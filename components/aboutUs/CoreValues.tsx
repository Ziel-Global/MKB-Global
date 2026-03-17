"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "People Over Process",
    description: "We empower teams with the right frameworks, not rigid rules.",
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
    description: "We connect Qatar's vision with world-class practices.",
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
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

      // Cards stagger up on scroll
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
            delay: (i % 3) * 0.12,
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
        {/* Heading block */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-sm font-bold text-[#1e1e24] tracking-wide">
            Our Core Values
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight max-w-2xl mx-auto">
            The Principles That Guide Everything We Do
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            At MBK Global, our values are the foundation of our identity. They
            shape our culture, drive our decisions, and define how we engage
            with partners, clients, and communities. Integrity, innovation, and
            impact aren&apos;t just words they&apos;re our commitment to excellence.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {values.slice(0, 3).map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="bg-[#f0eef8] rounded-2xl p-7 flex flex-col gap-3"
            >
              <h3 className="text-base font-bold text-[#2E0E68]">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards centred */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3">
          {values.slice(3).map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { cardRefs.current[3 + i] = el; }}
              className="bg-[#f0eef8] rounded-2xl p-7 flex flex-col gap-3"
            >
              <h3 className="text-base font-bold text-[#2E0E68]">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
