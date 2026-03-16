"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoTicker from "./LogoTicker";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentToHideRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const heroTriggerRef = useRef<ScrollTrigger | null>(null);
    const isReturningRef = useRef(false);
    const scrollFrameRef = useRef<number | null>(null);
    const preventTopUntilRef = useRef(0);
    const unlockTimerRef = useRef<number | null>(null);

    const smoothScrollTo = (target: number, duration = 650, onComplete?: () => void) => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const start = window.scrollY;
        const distance = target - start;

        if (prefersReducedMotion || Math.abs(distance) < 2) {
            window.scrollTo({ top: target, behavior: "auto" });
            onComplete?.();
            return;
        }

        if (scrollFrameRef.current) {
            cancelAnimationFrame(scrollFrameRef.current);
            scrollFrameRef.current = null;
        }

        const startTime = performance.now();
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            window.scrollTo({ top: start + distance * eased, behavior: "auto" });

            if (progress < 1) {
                scrollFrameRef.current = requestAnimationFrame(animate);
            } else {
                scrollFrameRef.current = null;
                onComplete?.();
            }
        };

        scrollFrameRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        // When FeaturesSection reverse-transitions back, smoothly bring Hero card into view
        const handleFeaturesBack = () => {
            if (isReturningRef.current) return;
            isReturningRef.current = true;

            const trigger = heroTriggerRef.current;
            const fallbackTop = sectionRef.current?.offsetTop ?? 0;
            const targetScrollRaw = trigger
                ? trigger.start + (trigger.end - trigger.start) * 0.76
                : fallbackTop + window.innerHeight * 1.2;
            const targetScroll = Math.max(0, targetScrollRaw);

            document.body.style.overflow = "hidden";

            smoothScrollTo(targetScroll, 700, () => {
                preventTopUntilRef.current = performance.now() + 900;
                if (unlockTimerRef.current) {
                    window.clearTimeout(unlockTimerRef.current);
                }
                unlockTimerRef.current = window.setTimeout(() => {
                    document.body.style.overflow = "";
                    unlockTimerRef.current = null;
                }, 180);

                ScrollTrigger.refresh();
                isReturningRef.current = false;
            });
        };

        window.addEventListener("features-exit-back", handleFeaturesBack);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=200%",
                    pin: true,
                    scrub: 1,
                    onLeave: () => {
                        window.dispatchEvent(new CustomEvent("hero-exit"));
                    },
                    onLeaveBack: (self) => {
                        if (performance.now() < preventTopUntilRef.current) {
                            window.scrollTo({ top: self.start + 2, behavior: "auto" });
                        }
                    },
                }
            });

            heroTriggerRef.current = tl.scrollTrigger ?? null;

            // Step 1: Fade out the headline and logo ticker
            tl.to(contentToHideRef.current, {
                opacity: 0,
                y: -40,
                duration: 0.4,
                ease: "power2.inOut"
            }, 0);

            // Step 2: Scale up the video — less on mobile to prevent overflow
            tl.to(videoContainerRef.current, {
                scale: isMobile ? 1.3 : 1.6,
                y: isMobile ? -40 : -80,
                duration: 0.5,
                ease: "power2.inOut"
            }, 0.3);

            // Step 3: Fade in and slide up the overlay card last
            tl.fromTo(overlayRef.current, {
                opacity: 0,
                y: 40,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }, 0.6);

            // Step 4: Card drops — cinematic exit before next section magically appears
            tl.to(overlayRef.current, {
                y: "240%",
                opacity: 0,
                duration: 0.5,
                ease: "power3.in"
            }, 1.1);

        }, sectionRef);

        return () => {
            ctx.revert();
            heroTriggerRef.current = null;
            if (scrollFrameRef.current) {
                cancelAnimationFrame(scrollFrameRef.current);
                scrollFrameRef.current = null;
            }
            if (unlockTimerRef.current) {
                window.clearTimeout(unlockTimerRef.current);
                unlockTimerRef.current = null;
            }
            preventTopUntilRef.current = 0;
            isReturningRef.current = false;
            document.body.style.overflow = "";
            window.removeEventListener("features-exit-back", handleFeaturesBack);
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center overflow-hidden bg-white pt-20 md:pt-[100px]">
            <div ref={contentToHideRef} className="w-full flex flex-col items-center">
                {/* Main Headlines */}
                <div className="text-center w-full max-w-5xl px-4 flex flex-col items-center gap-1 mb-2">
                    <h1 className="text-[1.4rem] sm:text-[1.8rem] md:text-[2.5rem] leading-tight font-extrabold text-[#481E8D]">
                        The Integrated Energy Value Chain.
                    </h1>
                    <h1 className="text-[1.4rem] sm:text-[1.8rem] md:text-[2.5rem] leading-tight font-extrabold text-[#481E8D]">
                        Reimagined for the Fourth Industrial Revolution.
                    </h1>
                </div>

                {/* Infinite Logo Slider */}
                <div className="w-full">
                    <LogoTicker />
                </div>
            </div>

            {/* Video section */}
            <div className="w-full px-4 md:px-8 flex flex-col justify-start items-center flex-1 min-h-0 pb-6 relative z-10 mt-4 origin-center">
                <div ref={videoContainerRef} className="relative w-full max-w-[1200px] bg-transparent rounded-xl flex justify-center items-center h-full origin-bottom">
                    <video
                        src="/icons/Final - Scene 0.mp4"
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Overlay Card that appears on scroll */}
                    <div
                        ref={overlayRef}
                        className="absolute bottom-[-5%] md:bottom-[-8%] left-1/2 -translate-x-1/2 w-[92%] sm:w-[80%] md:w-auto max-w-[95%] md:max-w-[480px] bg-[#2E0E68] text-white rounded-[1.2rem] p-3 md:p-4 md:px-6 text-center shadow-2xl z-20"
                    >
                        <h2 className="text-xs sm:text-sm md:text-base font-semibold mb-1">Built for Qatar&apos;s Oil & Gas Leaders</h2>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-300 font-light leading-relaxed mx-auto">
                            We help Qatar&apos;s energy ecosystem transition from reactive operations to intelligent, autonomous,integrated value chains — safely, reliably, and at speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
