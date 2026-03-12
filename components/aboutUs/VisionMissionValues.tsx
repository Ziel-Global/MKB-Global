"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Our Vision",
    description:
      "We identify, invest in, and nurture digital solutions that solve critical challenges across sectors and regions — creating sustainable value for our partners and positive impact for societies worldwide.",
  },
  {
    title: "Our Mission",
    description:
      "We identify, invest in, and nurture digital solutions that solve critical challenges across sectors and regions — creating sustainable value for our partners and positive impact for societies worldwide.",
  },
  {
    title: "Our Values",
    description:
      "To accelerate global digital evolution by connecting transformative technologies with the governments, enterprises, and communities that need them most.",
  },
];

export default function VisionMissionValues() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const vh = window.innerHeight;

      // Cards start fully below the viewport
      gsap.set(cardRefs.current, { y: vh, opacity: 1 });

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

      cardRefs.current.forEach((card) => {
        tl.to(card, {
          y: 0,
          duration: 1,
          ease: "none",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // Tall wrapper = scroll distance (300vh gives each card ~100vh of scroll)
    <div ref={wrapperRef} className="relative w-full" style={{ height: "300vh" }}>
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

              <div className="absolute bottom-0 right-0 w-[70%] opacity-20 pointer-events-none select-none">
                <Image
                  src="/logos/transparent-logo.png"
                  alt=""
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
