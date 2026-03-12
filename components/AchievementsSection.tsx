"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    {
        title: "Higher hit-rate of successful digitalisation",
        description: "Because everything is designed, sequenced, and integrated as part of one operating model.",
    },
    {
        title: "Faster time-to-impact",
        description: "Because ecosystem capabilities are already aligned, pre-integrated, and ready to deploy.",
    },
    {
        title: "Lower risk",
        description: "Because we eliminate fragmentation, duplication, and incompatibility across vendors and workflows.",
    },
    {
        title: "Greater operational certainty",
        description: "Because intelligence, automation, and human-centred design are built into every layer — from subsurface to trading.",
    },
    {
        title: "Sustained competitiveness",
        description: "Because we help move from reactive operations to Energy-as-a-Service: adaptive, predictive, and margin-disciplined.",
    },
];

export default function AchievementsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${achievements.length * 80}%`,
                    pin: true,
                    scrub: 1,
                }
            });

            // Each card slides up from below and fades in, one after another
            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                tl.fromTo(card, {
                    y: 80,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 1,
                }, i * 1.2);
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
            {/* Video / Illustration on the right */}
            <div className="absolute top-1/2 -translate-y-[45%] right-0 w-[58%] h-[80%] flex items-center justify-center">
                <video
                    src="/icons/Final - Scene 0.mp4"
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Left side content */}
            <div className="absolute top-[15%] left-8 md:left-16 w-[380px] max-w-[38vw] z-10">
                {/* Heading */}
                <h2 className="text-3xl md:text-[2.5rem] font-medium text-[#481E8D] mb-8 leading-tight italic">
                    With MBK, customers achieve
                </h2>

                {/* Stacking cards */}
                <div className="flex flex-col gap-3">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className="bg-[#F0EEF8] rounded-xl px-5 py-4 border-l-4 border-[#6D28D9] opacity-0"
                        >
                            <h3 className="font-bold text-sm text-gray-900 leading-snug">
                                {item.title}
                            </h3>
                            {/* Only the last visible card shows the description */}
                            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
