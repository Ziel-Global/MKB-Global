"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "People Over Process",
    description:
      "We empower teams with the right frameworks, not rigid rules.",
  },
  {
    title: "Purpose Over Hype",
    description:
      "We back ventures that solve real problems. Substance always comes before spotlight.",
  },
  {
    title: "Execution Over Talk",
    description:
      "Ideas are nothing without action. We focus on outcomes, not opinions.",
  },
  {
    title: "Partnership Over Transaction",
    description: "We grow together through collaboration, not contracts.",
  },
  {
    title: "Local Roots, Global Reach",
    description: "We connect Qatar's vision with world-class practices",
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white"
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Header */}
        <span className="text-sm font-bold text-black tracking-wide">
          Our Core Values
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight text-center max-w-xl">
          The Principles That Guide Everything We Do
        </h2>
        <p className="mt-5 text-gray-600 text-base leading-relaxed text-center max-w-2xl">
          At MBK Global, our values are the foundation of our identity. They
          shape our culture, drive our decisions, and define how we engage with
          partners, clients, and communities. Integrity, innovation, and impact
          aren&apos;t just words — they&apos;re our commitment to excellence.
        </p>

        {/* Row 1 – 3 cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {values.slice(0, 3).map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="bg-[#eeeaf8] rounded-2xl px-7 py-8 flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-[#2E0E68]">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 – 2 cards centered */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-[66.666%] md:mx-auto">
          {values.slice(3).map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { cardRefs.current[3 + i] = el; }}
              className="bg-[#eeeaf8] rounded-2xl px-7 py-8 flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-[#2E0E68]">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
