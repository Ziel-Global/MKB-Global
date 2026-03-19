"use client";

import { useState } from "react";
import Image from "next/image";

const YOUTUBE_VIDEO_ID = "8IEkGW_4erM";

export default function OurStory() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full py-16 md:py-20 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto relative">

        {/* Card — text only, right padding reserves space so text doesn't go under video */}
        <div className="bg-[#f0eef8] rounded-3xl p-10 lg:p-12 lg:pr-[52%]">
          <span className="text-sm font-bold text-[#1e1e24] tracking-wide">
            Our Story
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#2E0E68] leading-tight">
            Where Vision Meets Execution
          </h2>
          <p className="mt-5 text-[#3d3d50] text-sm md:text-base leading-relaxed">
            MBK Global was born from a simple truth: Transformation doesn&apos;t
            happen through ideas alone, it needs execution, structure, and
            long-term vision.
          </p>
          <p className="mt-4 text-[#3d3d50] text-sm md:text-base leading-relaxed">
            Our founders built MBK to bridge the critical gap between ambition
            and delivery. Today, we operate as an ecosystem that accelerates
            the digital evolution of industries, governments, and communities
            across the region and beyond.
          </p>
        </div>

        {/* Video thumbnail — overflows card on top, right, and bottom */}
        <div
          className="hidden lg:block absolute rounded-2xl overflow-hidden shadow-xl"
          style={{
            right: "-3rem",
            top: "1.5rem",
            bottom: "1.5rem",
            width: "52%",
          }}
        >
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full h-full group"
            aria-label="Play About Us video"
          >
            <Image
              src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
              alt="About Us video thumbnail"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <span className="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#2E0E68]" />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile thumbnail */}
        <div className="lg:hidden mt-6 w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full h-full group"
            aria-label="Play About Us video"
          >
            <Image
              src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
              alt="About Us video thumbnail"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <span className="ml-1 w-0 h-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-[#2E0E68]" />
              </span>
            </div>
          </button>
        </div>

        {isVideoOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/75 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 z-10 bg-black/65 text-white rounded-full w-9 h-9"
                aria-label="Close video"
              >
                ×
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="MBK About Us Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


