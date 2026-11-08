"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const SEEN_KEY = "mbk-irx-rebrand-banner-seen";
const SHOW_DELAY_MS = 300;

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function RebrandBanner() {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const closingRef = useRef(false);

    // Show once per browser session, shortly after the visitor lands.
    useEffect(() => {
        try {
            if (sessionStorage.getItem(SEEN_KEY)) return;
        } catch {
            /* storage unavailable — still show the banner */
        }
        const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    // Entrance animation.
    useLayoutEffect(() => {
        if (!isOpen || !rootRef.current) return;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion()) {
                gsap.from("[data-rb='backdrop'], [data-rb='card']", { autoAlpha: 0, duration: 0.3 });
                return;
            }

            // Absolute start times (seconds) so steps overlap: message is readable
            // by ~1.2s and the whole sequence settles by ~1.7s.
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from("[data-rb='backdrop']", { autoAlpha: 0, duration: 0.35, ease: "power2.out" }, 0)
                .from(
                    "[data-rb='card']",
                    {
                        autoAlpha: 0,
                        y: 40,
                        scale: 0.94,
                        rotateX: 10,
                        transformPerspective: 900,
                        duration: 0.8,
                        ease: "expo.out",
                    },
                    0.05
                )
                .from("[data-rb='orb']", { autoAlpha: 0, scale: 0.5, duration: 1, stagger: 0.1, ease: "power2.out" }, 0.05)
                .from("[data-rb='logo']", { autoAlpha: 0, y: -12, duration: 0.4 }, 0.2)
                .from("[data-rb='badge']", { autoAlpha: 0, scale: 0.7, duration: 0.4, ease: "back.out(2)" }, 0.3)
                .from("[data-rb='word']", { yPercent: 110, duration: 0.6, stagger: 0.06, ease: "expo.out" }, 0.35)
                .from("[data-rb='old-name']", { autoAlpha: 0, x: -16, duration: 0.4 }, 0.55)
                .from("[data-rb='arrow-line']", { scaleX: 0, transformOrigin: "left center", duration: 0.35, ease: "power2.inOut" }, 0.75)
                .from("[data-rb='arrow-head']", { autoAlpha: 0, x: -6, duration: 0.2 }, 1.0)
                .fromTo(
                    "[data-rb='new-name']",
                    { clipPath: "inset(0 100% 0 0)" },
                    { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power4.inOut" },
                    1.0
                )
                .from("[data-rb='new-glow']", { autoAlpha: 0, duration: 0.5 }, 1.2)
                .to("[data-rb='old-name']", { opacity: 0.45, duration: 0.5 }, 1.2)
                .from("[data-rb='copy']", { autoAlpha: 0, y: 14, duration: 0.5 }, 0.7)
                .fromTo("[data-rb='cta']", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.85)
                .add(() => closeBtnRef.current?.focus({ preventScroll: true }));
        }, rootRef);

        return () => ctx.revert();
    }, [isOpen]);

    // Lock page scroll and keep the site's wheel/touch/key scroll controller from reacting.
    useEffect(() => {
        const root = rootRef.current;
        if (!isOpen || !root) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Stop these reaching the window-level scroll controller; the body
        // overflow lock prevents page scroll while the card can still scroll natively.
        const block = (event: Event) => event.stopPropagation();
        root.addEventListener("wheel", block, { passive: false });
        root.addEventListener("touchmove", block, { passive: false });

        return () => {
            document.body.style.overflow = previousOverflow;
            root.removeEventListener("wheel", block);
            root.removeEventListener("touchmove", block);
        };
    }, [isOpen]);

    const close = useCallback(() => {
        if (closingRef.current) return;
        closingRef.current = true;

        try {
            sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
            /* ignore */
        }

        const finish = () => {
            closingRef.current = false;
            setIsOpen(false);
        };

        if (!rootRef.current || prefersReducedMotion()) {
            finish();
            return;
        }

        const q = gsap.utils.selector(rootRef);
        gsap.timeline({ onComplete: finish })
            .to(q("[data-rb='card']"), { autoAlpha: 0, y: 30, scale: 0.95, duration: 0.4, ease: "power2.in" })
            .to(q("[data-rb='backdrop']"), { autoAlpha: 0, duration: 0.35, ease: "power2.in" }, "-=0.2");
    }, []);

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        // Don't let arrow/space/page keys reach the page's scroll controller.
        event.stopPropagation();
        if (event.key === "Escape") {
            close();
            return;
        }
        if (event.key === "Tab" && rootRef.current) {
            const focusables = rootRef.current.querySelectorAll<HTMLElement>("button");
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={rootRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="rebrand-title"
            aria-describedby="rebrand-desc"
            onKeyDown={onKeyDown}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
            {/* Backdrop */}
            <div
                data-rb="backdrop"
                onClick={close}
                className="absolute inset-0 bg-[#160634]/60 backdrop-blur-md"
            />

            {/* Card */}
            <div
                data-rb="card"
                className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-[34rem] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2E0E68] via-[#3D1E85] to-[#481E8D] text-white shadow-[0_30px_80px_-20px_rgba(46,14,104,0.75)]"
            >
                {/* Ambient glow orbs */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div data-rb="orb" className="rb-float-a absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#8B3DFF]/45 blur-3xl" />
                    <div data-rb="orb" className="rb-float-b absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#7C3AED]/35 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:22px_22px]" />
                </div>

                {/* Close */}
                <button
                    ref={closeBtnRef}
                    onClick={close}
                    aria-label="Close announcement"
                    className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c082ff]"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="relative z-10 flex flex-col items-center overflow-y-auto overscroll-contain [scrollbar-width:none] px-7 pb-9 pt-10 text-center sm:px-12 sm:pb-11 sm:pt-12">
                    <div data-rb="logo">
                        <Image
                            src="/svg-logos/Horizontal%20Logo_White.svg"
                            alt="MBK Global"
                            width={240}
                            height={40}
                            className="h-7 w-auto object-contain opacity-90 sm:h-8"
                        />
                    </div>

                    <div
                        data-rb="badge"
                        className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c082ff] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c082ff]" />
                        </span>
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#EBE9FF]">
                            Announcement
                        </span>
                    </div>

                    <h2
                        id="rebrand-title"
                        className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                    >
                        {["We", "are", "evolving."].map((word) => (
                            <span key={word} className="inline-block overflow-hidden pb-1 align-bottom">
                                <span data-rb="word" className="inline-block px-[0.12em]">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </h2>

                    {/* MBK Global → IRx Global */}
                    <div aria-hidden className="mt-7 flex w-full items-center justify-center gap-3 sm:gap-4">
                        <span data-rb="old-name" className="whitespace-nowrap text-lg font-semibold text-white/80 sm:text-xl">
                            MBK Global
                        </span>
                        <span className="flex items-center">
                            <span data-rb="arrow-line" className="block h-[2px] w-10 rounded-full bg-gradient-to-r from-white/30 to-[#c082ff] sm:w-14" />
                            <svg data-rb="arrow-head" width="10" height="14" viewBox="0 0 10 14" className="-ml-[2px] text-[#c082ff]">
                                <path d="M1 1l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="relative">
                            <span data-rb="new-glow" className="absolute -inset-x-3 -inset-y-2 rounded-xl bg-[#8B3DFF]/30 blur-xl" />
                            <span
                                data-rb="new-name"
                                className="rb-shimmer relative whitespace-nowrap bg-gradient-to-r from-[#EBE9FF] via-[#c082ff] to-[#EBE9FF] bg-[length:200%_100%] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl"
                            >
                                IRx Global
                            </span>
                        </span>
                    </div>

                    <p
                        id="rebrand-desc"
                        data-rb="copy"
                        className="mt-7 max-w-[26rem] text-base leading-relaxed text-[#d9d4f0] sm:text-lg"
                    >
                        <span className="sr-only">We are evolving. </span>
                        <span className="font-semibold text-white">MBK Global</span> will soon become{" "}
                        <span className="font-semibold text-white">IRx Global</span>, reflecting the next phase of our
                        organisation&rsquo;s journey.
                    </p>

                    <button
                        data-rb="cta"
                        onClick={close}
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#2E0E68] shadow-[0_10px_30px_-10px_rgba(139,61,255,0.8)] transition-colors hover:bg-[#EBE9FF] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c082ff] sm:text-base"
                    >
                        Continue to website
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
