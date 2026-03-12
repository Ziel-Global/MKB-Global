"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const approaches = [
  {
    title: "Strategic Investment",
    description: "Through MBK Capital and MBK Ventures",
  },
  {
    title: "Operational Excellence",
    description: "Through MBK Capital and MBK Ventures",
  },
  {
    title: "Community Empowerment",
    description: "Through MBK Capital and MBK Ventures",
  },
];

export default function UniqueApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-16 lg:px-24 bg-white"
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight">
            Our Unique Approach
          </h2>
          <p className="mt-5 text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Unlike typical investors, consultancies, or tech providers, MBK
            delivers across the full digital transformation lifecycle:
          </p>
        </div>

        {/* 3 cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {approaches.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="bg-[#f0eef8] rounded-2xl p-7 flex flex-col gap-3"
            >
              <h3 className="text-base font-bold text-[#2E0E68]">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
