"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current?.children ? Array.from(textRef.current.children) : [],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full flex justify-center items-center py-6 md:py-12 px-4 md:px-6 mt-16 md:mt-24">
            <div className="w-full max-w-[1100px] relative rounded-[2rem] overflow-hidden p-8 md:p-14 lg:py-20 lg:px-12 flex flex-col items-center text-center shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-gradient-to-br border border-white/40 from-[#e9e6f2] via-[#f7f6fb] to-[#dfd5f5]">

                {/* Background Image Overlay to mimic the reference refinery picture */}
                <Image
                    src="/images/placeholder.png" // Placeholder for the actual refinery twilight image
                    alt="Refinery Background"
                    fill
                    className="object-cover opacity-[0.35] pointer-events-none mix-blend-overlay z-0"
                    priority
                />

                {/* Extra wash for text readability if needed */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-10 pointer-events-none fade-overlay-gradient"></div>

                <div ref={textRef} className="w-full flex flex-col items-center gap-4 md:gap-6 relative z-20">
                    <p className="text-black font-extrabold text-sm md:text-base tracking-wide mt-1">
                        Case Studies
                    </p>

                    <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-extrabold text-[#3b177d] leading-[1.1] tracking-tight max-w-[800px]">
                        Our Technology & Innovation Partners 
                    </h1>

                    <div className="flex flex-col gap-2 max-w-3xl mt-2">
                        <p className="text-[#333333] text-sm md:text-base font-medium leading-relaxed">
                           MBK Global collaborates with leading technology and innovation partners to deliver advanced digital, engineering, and industrial solutions across energy, infrastructure, and enterprise sectors. 
                        </p>
                    </div>
                </div>
            </div>
            {/* Quick style to create the soft fade-in of the background similar to the reference image */}
            <style jsx>{`
                .fade-overlay-gradient {
                    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.9) 100%);
                }
            `}</style>
        </section>
    );
}
