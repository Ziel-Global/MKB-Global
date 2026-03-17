"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [role, setRole] = useState<"operator" | "partner">("operator");

  useEffect(() => {
    const handleSetRole = (e: any) => {
      if (e.detail?.role) {
        setRole(e.detail.role.toLowerCase());
      }
    };
    window.addEventListener("set-contact-role", handleSetRole as EventListener);
    return () => window.removeEventListener("set-contact-role", handleSetRole as EventListener);
  }, []);

  return (
    <section id="contact-form" className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E0E68] leading-tight">
              Let&apos;s Build the Future of Operations
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Whether you&apos;re exploring digitalisation, scaling solutions,
              or seeking impact MBK Global helps you move forward safely,
              confidently, and fully.
            </p>
          </div>

          {/* Two prospectus image cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Operator Prospectus */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group">
              <Image
                src="/about-us/aboutus.png"
                alt="Operator Prospectus"
                fill
                className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Operator Prospectus
              </span>
            </div>

            {/* Partner Prospectus */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group">
              <Image
                src="/about-us/aboutus.png"
                alt="Partner Prospectus"
                fill
                className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Partner Prospectus
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: Form card ── */}
        <div className="bg-[#eeeaf8] rounded-3xl p-8 md:p-10 flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-[#2E0E68]">Work With Us</h3>

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          {/* Company + Role */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-700 font-medium">Company</label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-700 font-medium">Role</label>
              <input
                type="text"
                placeholder="What's your role?"
                className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition"
              />
            </div>
          </div>

          {/* Operator / Partner toggle */}
          <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-[#d4cff0]">
            <button
              onClick={() => setRole("operator")}
              className={`py-3 text-sm font-semibold transition-colors ${role === "operator"
                ? "bg-[#6D28D9] text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
            >
              Operator
            </button>
            <button
              onClick={() => setRole("partner")}
              className={`py-3 text-sm font-semibold transition-colors ${role === "partner"
                ? "bg-[#6D28D9] text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
            >
              Partner
            </button>
          </div>

          {/* Challenge textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-gray-700 font-medium">
              What challenge are you facing?
            </label>
            <textarea
              placeholder="Type here..."
              rows={4}
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition resize-none"
            />
          </div>

          {/* Submit */}
          <div>
            <button className="bg-[#6D28D9] hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
