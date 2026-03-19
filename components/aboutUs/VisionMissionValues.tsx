"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Our Vision",
    description:
      "To be Qatar’s trusted leader in technology driven transformation for energy operations by 2030.",
  },
  {
    title: "Our Mission",
    description:
      "We orchestrate and deliver end to end systems integration through Qatar‑owned and Qatar‑controlled joint ventures with proven global partners.",
  },
  {
    title: "Our Values",
    description:
      "To accelerate global digital evolution by connecting transformative technologies with the governments, enterprises, and communities that need them most.",
  },
];

export default function VisionMissionValues() {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isMobile) {
      cardRefs.current.forEach((card) => {
        if (card) {
          gsap.set(card, { clearProps: "all" });
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const vh = window.innerHeight;

      // Keep first card visible immediately; only reveal cards 2 and 3 on scroll
      gsap.set(cardRefs.current[0], { y: 0, opacity: 1 });
      gsap.set(cardRefs.current.slice(1), { y: vh, opacity: 1 });

      // Scrubbed timeline — scroll physically slides each card up from the bottom
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          pin: stickyRef.current,
        },
      });

      cardRefs.current.slice(1).forEach((card) => {
        tl.to(card, {
          y: 0,
          duration: 1,
          ease: "none",
        });
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="w-full px-6 py-12 bg-white">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative bg-[#3b0e8c] rounded-2xl p-8 flex flex-col justify-between min-h-[320px] overflow-hidden"
            >
              <div className="flex flex-col gap-6 z-10 relative">
                <h3 className="text-2xl font-extrabold text-white">{card.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{card.description}</p>
              </div>

              <div className="absolute bottom-2 right-2 w-[50%] opacity-[0.35] pointer-events-none select-none">
                <svg viewBox="20 28 130 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#DCD9ED]">
                  <path
                    d="M37.958 101.243L22 69.9357C34.8283 72.8567 40.9435 66.3387 42.3973 62.7145L54.2088 38.4063C61.2625 28.615 69.4585 34.3266 72.6747 38.4063L83.6546 62.7145C91.773 76.9933 100.679 68.6639 104.117 62.7145L115.097 39.9362C123.614 29.193 131.511 35.4597 134.394 39.9362L149 71.4848C136.816 68.5102 132.72 72.8089 131.611 75.4797L118.756 101.243C111.037 115.203 101.899 107.059 98.2942 101.243L86.1511 75.4797C80.7713 68.9511 72.5072 71.9257 70.6921 75.4797L57.1076 101.243C48.6817 115.07 40.8304 107.004 37.958 101.243Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    // Wrapper height controls reveal distance while pinned
    <div ref={wrapperRef} className="relative w-full" style={{ height: "220vh" }}>
      {/* Sticky grid — stays on screen while wrapper scrolls */}
      <div
        ref={stickyRef}
        className="sticky top-0 w-full flex items-center justify-center py-20 px-6 md:px-16 lg:px-24 bg-white overflow-hidden"
        style={{ height: "100vh" }}
      >
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {cards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative bg-[#3b0e8c] rounded-2xl p-8 flex flex-col justify-between min-h-[420px] overflow-hidden"
            >
              <div className="flex flex-col gap-6 z-10 relative">
                <h3 className="text-2xl font-extrabold text-white">{card.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{card.description}</p>
              </div>

              <div className="absolute bottom-2 right-2 w-[50%] opacity-[0.35] pointer-events-none select-none">
                <svg viewBox="20 28 130 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#DCD9ED]">
                  <path 
                    d="M37.958 101.243L22 69.9357C34.8283 72.8567 40.9435 66.3387 42.3973 62.7145L54.2088 38.4063C61.2625 28.615 69.4585 34.3266 72.6747 38.4063L83.6546 62.7145C91.773 76.9933 100.679 68.6639 104.117 62.7145L115.097 39.9362C123.614 29.193 131.511 35.4597 134.394 39.9362L149 71.4848C136.816 68.5102 132.72 72.8089 131.611 75.4797L118.756 101.243C111.037 115.203 101.899 107.059 98.2942 101.243L86.1511 75.4797C80.7713 68.9511 72.5072 71.9257 70.6921 75.4797L57.1076 101.243C48.6817 115.07 40.8304 107.004 37.958 101.243Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
