"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EmergencyPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Small delay to let the page load before showing popup
        const timer = setTimeout(() => setIsOpen(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Modal Container */}
            <div className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-[#0F0B1A] animate-in zoom-in-95 duration-300 border border-white/5">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pop-up/pop-up-bg.jpeg"
                        alt="Emergency Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0914] via-[#0d0914]/80 to-transparent" />
                </div>

                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
                    aria-label="Close popup"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Content */}
                <div className="relative z-10 p-8 sm:p-10 pt-12 flex flex-col gap-6">

                    {/* Badge */}
                    <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-900/60 bg-red-950/40 w-fit backdrop-blur-md">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-pulse" />
                        <span className="text-[#e25555] text-[0.7rem] md:text-xs font-bold tracking-widest uppercase">
                            Emergency Response Active
                        </span>
                    </div>

                    {/* Titles */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-center">
                        <span className="text-white block">Your facility is hit</span>
                        <span className="text-[#c082ff] block mt-1.5">We help get you running again</span>
                    </h2>

                    {/* Description */}
                    <p className="text-[#a09eab] text-lg leading-relaxed max-w-[95%] mt-1 text-center mx-auto">
                        Emergency repair, parts sourcing, and operational restart for critical national infrastructure
                        <br />
                        <span className="text-white font-semibold">in days, not months</span>
                    </p>

                    {/* CTA Button */}
                    <a
                        href="https://sumud.mbk.global/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closePopup}
                        className="w-full mt-4 py-4 rounded-xl bg-[#9f51f5] hover:bg-[#8b3ced] text-white text-lg font-bold transition-all shadow-[0_0_20px_rgba(159,81,245,0.4)] active:scale-[0.98] block text-center"
                    >
                        Request Rapid Response
                    </a>
                </div>
            </div>
        </div>
    );
}
