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

            // Fade out and translate up the headline and logo ticker
            tl.to(contentToHideRef.current, {
                opacity: 0,
                y: -50,
                ease: "power1.inOut"
            }, 0);

            // Scale up the video container to fill the screen
            tl.to(videoContainerRef.current, {
                scale: 1.15,
                y: -50, // Move up slightly
                ease: "power1.inOut"
            }, 0);

            // Fade in and slide up the overlay text box
            tl.fromTo(overlayRef.current, {
                opacity: 0,
                y: 50,
            }, {
                opacity: 1,
                y: 0,
                ease: "power1.out"
            }, 0.2); // Start slightly after the other animations

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
                        className="absolute bottom-[-5%] md:bottom-[-10%] left-1/2 -translate-x-1/2 w-[85%] md:w-[70%] max-w-[650px] bg-[#2E0E68] text-white rounded-[1.5rem] p-6 md:p-8 text-center shadow-2xl z-20"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium mb-3">Built for Qatar’s Oil & Gas Leaders</h2>
                        <p className="text-xs md:text-sm text-gray-200 uppercase tracking-wider font-light">
                            We help Qatar&apos;s energy ecosystem transition from reactive operations to intelligent, autonomous, integrated value chains — safely, reliably, and at speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
