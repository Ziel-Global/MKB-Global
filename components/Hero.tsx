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

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150%", // How long to scroll before animation completes
                    pin: true,
                    scrub: 1, // Smooth scrubbing
                }
            });

            // Step 1: Fade out the headline and logo ticker slowly first
            tl.to(contentToHideRef.current, {
                opacity: 0,
                y: -40,
                duration: 0.4,
                ease: "power2.inOut"
            }, 0);

            // Step 2: Scale up the video as headline is disappearing
            tl.to(videoContainerRef.current, {
                scale: 1.6,
                y: -80,
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

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center overflow-hidden bg-white pt-24 md:pt-[100px]">
            <div ref={contentToHideRef} className="w-full flex flex-col items-center">
                {/* Main Headlines */}
                <div className="text-center w-full max-w-5xl px-4 flex flex-col items-center gap-1 mb-2">
                    <h1 className="text-3xl md:text-[2.5rem] leading-tight font-extrabold text-[#481E8D]">
                        The Integrated Energy Value Chain.
                    </h1>
                    <h1 className="text-3xl md:text-[2.5rem] leading-tight font-extrabold text-[#481E8D]">
                        Reimagined for the Fourth Industrial Revolution.
                    </h1>
                </div>

                {/* Infinite Logo Slider */}
                <div className="w-full">
                    <LogoTicker />
                </div>
            </div>

            {/* Video section */}
            <div className="w-full px-8 flex flex-col justify-start items-center flex-1 min-h-0 pb-6 relative z-10 mt-4 origin-center">
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
                        className="absolute bottom-[-5%] md:bottom-[-8%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-auto max-w-[95%] md:max-w-[480px] bg-[#2E0E68] text-white rounded-[1.2rem] p-3 md:p-4 md:px-6 text-center shadow-2xl z-20"
                    >
                        <h2 className="text-sm md:text-base font-semibold mb-1">Built for Qatar’s Oil & Gas Leaders</h2>
                        <p className="text-[9px] md:text-[10px] text-gray-300 font-light leading-relaxed mx-auto">
                            We help Qatar&apos;s energy ecosystem transition from reactive operations to intelligent, autonomous,integrated value chains — safely, reliably, and at speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
