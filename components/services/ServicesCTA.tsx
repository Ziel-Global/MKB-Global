"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCTA() {
    const containerRef = useRef<HTMLElement>(null);
    const [role, setRole] = useState<"Operator" | "Partner">("Operator");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".fade-up-element",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full py-20 bg-white">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between">

                {/* Left Side - Information & Cards */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                    <h2 className="fade-up-element text-4xl md:text-5xl font-medium text-[#3b177d] leading-tight mb-6">
                        Head-quartered in Qatar,<br />
                        Connected to the World
                    </h2>
                    <p className="fade-up-element text-[#333333] text-base md:text-lg mb-12">
                        MBK Global is a venture builder based in Qatar, built by people who believe execution is a craft and building with others is a privilege.
                    </p>

                    <div className="w-full flex flex-row gap-4 h-[300px] md:h-[400px]">
                        {/* Operator Prospectus Card */}
                        <div className="fade-up-element relative w-1/2 h-full rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/digitalNervousSystem/6b06ef62bbbd0c024dde1dc604086089715d1147.png"
                                alt="Operator Prospectus"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Dark Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-white text-xl font-bold">Operator Prospectus</h3>
                            </div>
                        </div>

                        {/* Partner Prospectus Card */}
                        <div className="fade-up-element relative w-1/2 h-full rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/digitalNervousSystem/4c3b42c8648a634d83ee022c1a421637a99d7e49.png"
                                alt="Partner Prospectus"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Dark Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-white text-xl font-bold">Partner Prospectus</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="fade-up-element w-full lg:w-[45%] bg-[#F3F0F8] rounded-[2rem] p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-medium text-[#3b177d] mb-10">
                        Work With Us
                    </h2>

                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                        {/* Name Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-[#3b177d]">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                            />
                        </div>

                        {/* Company & Role Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Role</label>
                                <input
                                    type="text"
                                    placeholder="What's your role?"
                                    className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone"
                                    className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Role Segmented Control */}
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="w-full p-1 bg-white rounded-xl flex">
                                <button
                                    type="button"
                                    onClick={() => setRole("Operator")}
                                    className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "Operator" ? 'bg-[#8B3DFF] text-white shadow-sm' : 'text-[#3b177d] hover:bg-gray-50'
                                        }`}
                                >
                                    Operator
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole("Partner")}
                                    className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "Partner" ? 'bg-[#8B3DFF] text-white shadow-sm' : 'text-[#3b177d] hover:bg-gray-50'
                                        }`}
                                >
                                    Partner
                                </button>
                            </div>
                        </div>

                        {/* Challenge Textarea */}
                        <div className="flex flex-col gap-2 mt-2">
                            <label className="text-xs font-semibold text-[#3b177d]">What challenge are you facing?</label>
                            <textarea
                                placeholder="Type here..."
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 self-start bg-[#8B3DFF] hover:bg-[#7220e8] text-white font-semibold py-3 px-8 rounded-full transition-colors text-sm shadow-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
