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
    // Fraction [0-1] within the pin range where the overlay card is fully visible.
    // Computed once from tl.duration() so it stays accurate after any tween changes.
    const overlayFracRef = useRef(0.625);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 868px)", () => {
            const dispatchHeroSteps = () => {
                const trigger = heroTriggerRef.current;
                if (!trigger || typeof window === "undefined") return;

                const span = trigger.end - trigger.start;

                // Desktop snap points:
                //  1. Hero start (full previous section when scrolling back up).
                //  2. Overlay card fully revealed (purple-card checkpoint).
                // No Hero-end snap: the very next swipe after this checkpoint
                // lands on the Features section.
                const steps = [
                    Math.max(0, trigger.start + 2),
                    Math.max(0, trigger.start + span * overlayFracRef.current),
                ];

                window.dispatchEvent(
                    new CustomEvent("mbk-scroll-steps", {
                        detail: { source: "hero", steps },
                    })
                );
            };

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=200%",
                        pin: true,
                        scrub: true,
                        invalidateOnRefresh: true,
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

                // Step 2: Scale up the video
                tl.to(videoContainerRef.current, {
                    scale: 1.6,
                    y: -80,
                    duration: 0.5,
                    ease: "power2.inOut"
                }, 0.3);

                // Step 3: Overlay card rises into view
                tl.fromTo(overlayRef.current, {
                    opacity: 0,
                    y: 40,
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                }, 0.6);

                // Gap: overlay card stays fully visible. The controller snaps
                // here (step 1) so the user can read the card before scrolling on.
                // Nothing animates between t=1.0 and t=1.1.

                // Step 4: Card drops — cinematic exit before Features slides in
                tl.to(overlayRef.current, {
                    y: "240%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in"
                }, 1.1);

                // Compute overlay-visible fraction using the real timeline duration
                // so the snap always lands on the finished card state, not mid-fade.
                // Overlay finishes entering at t=1.0; tl.duration() ≈ 1.6.
                overlayFracRef.current = 1.0 / tl.duration();

                dispatchHeroSteps();

            }, sectionRef);

            const handleRefresh = () => dispatchHeroSteps();
            ScrollTrigger.addEventListener("refresh", handleRefresh);

            return () => {
                ctx.revert();
                heroTriggerRef.current = null;
                ScrollTrigger.removeEventListener("refresh", handleRefresh);
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center overflow-hidden bg-white pt-16 md:pt-[6.25rem] max-md:h-auto max-md:overflow-visible max-md:contents">

            <div className="w-full h-full flex flex-col items-center max-md:h-[100dvh] max-md:snap-start max-md:snap-always max-md:overflow-hidden max-md:pt-24 max-md:pb-4">
                <div ref={contentToHideRef} className="w-full flex flex-col items-center relative z-20">
                    {/* Main Headlines */}
                    <div className="text-center w-full max-w-5xl px-4 flex flex-col items-center gap-1 mb-2">
                        <h1 className="text-[1.85rem] sm:text-[1.9rem] md:text-[2.4rem] leading-tight font-extrabold text-[#481E8D]">
                            The Integrated Energy Value Chain.
                        </h1>
                        <h1 className="text-[1.85rem] sm:text-[1.9rem] md:text-[2.4rem] leading-tight font-extrabold text-[#481E8D]">
                            Reimagined for the Fourth Industrial Revolution.
                        </h1>
                    </div>

                    {/* Infinite Logo Slider */}
                    <div className="w-full">
                        <LogoTicker />
                    </div>
                </div>

                {/* Video section */}
                <div className="w-full px-2 md:px-8 flex flex-col justify-start items-center flex-1 min-h-0 pb-2 md:pb-6 relative z-10 mt-2 md:mt-4 origin-center">
                    <div ref={videoContainerRef} className="relative w-[130%] md:w-full max-w-none md:max-w-[75rem] bg-transparent rounded-xl flex justify-center items-center h-full origin-bottom -mt-2 md:mt-0">
                        <video
                            src="/icons/Final - Scene 0.mp4"
                            className="w-full h-full object-contain object-center rounded-xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Overlay Card that appears on scroll */}
                        <div
                            ref={overlayRef}
                            className="absolute -bottom-2 max-[25rem]:bottom-0 md:bottom-[-8%] left-1/2 -translate-x-1/2 w-[94vw] md:w-auto max-w-[27.5rem] md:max-w-[30rem] bg-[#2E0E68] text-white rounded-[1.2rem] p-3 md:p-4 md:px-6 text-center shadow-2xl z-20"
                        >
                            <h2 className="text-[0.8125rem] max-[25rem]:text-[0.75rem] md:text-base font-semibold mb-1">Built for Qatar&apos;s Oil & Gas Leaders</h2>
                            <p className="text-[0.5938rem] max-[25rem]:text-[0.5625rem] max-[25rem]:leading-[1.4] md:text-[0.625rem] text-gray-300 font-light leading-relaxed mx-auto max-md:px-1">
                                We help Qatar&apos;s energy ecosystem transition from reactive operations to intelligent, autonomous, integrated value chains safely, reliably, and at speed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
