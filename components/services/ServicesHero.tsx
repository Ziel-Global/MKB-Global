"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

import Image from "next/image";

export default function ServicesHero() {
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
        <section ref={sectionRef} className="w-full flex justify-center items-center py-6 md:py-8 px-4 md:px-6 mt-16 md:mt-20">
            <div className="w-full max-w-[1000px] relative rounded-[2rem] overflow-hidden p-6 md:p-10 lg:py-12 lg:px-8 flex flex-col items-center text-center shadow-[0_4px_40px_rgb(0,0,0,0.06)] bg-[#f3f0f8]">

                {/* Background Image using Next.js Image for reliability */}
                <Image
                    src="/images/ecosystemPerformance/cb55b41f1fbc7a4f0b9f0023e61ced2d32725bbd.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-[0.25] pointer-events-none z-0"
                    priority
                />

                {/* Additional light blur/wash to ensure text readability */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 pointer-events-none"></div>

                <div ref={textRef} className="w-full flex flex-col items-center gap-3 md:gap-4 relative z-20">
                    <p className="text-black font-bold text-xs md:text-sm tracking-wide mt-1">
                        Our Services
                    </p>

                    <h1 className="text-[1.5rem] md:text-[2.25rem] lg:text-[2.75rem] font-extrabold text-[#3b177d] leading-[1.1] tracking-tight">
                        Services That Build What&apos;s Next
                    </h1>

                    <div className="flex flex-col gap-2 max-w-2xl mt-1">
                        <p className="text-[#333333] text-xs md:text-sm font-medium leading-relaxed">
                            From strategy to execution, MBK delivers end-to-end solutions that move ventures, enterprises, and institutions forward.
                        </p>

                        <p className="text-[#333333] text-xs md:text-sm leading-relaxed">
                            Whether you&apos;re starting with a bold idea, scaling a high-impact venture, or transforming complex operations—we bring the tools, talent, and structure to get it done. Every service we offer is built to drive outcomes, not just outputs.
                        </p>
                    </div>

                    <div className="pt-2 md:pt-3">
                        <Link href="/about" className="inline-flex items-center justify-center bg-[#8B3DFF] hover:bg-[#7220e8] text-white font-semibold py-2 px-5 text-xs rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            About MBK
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
