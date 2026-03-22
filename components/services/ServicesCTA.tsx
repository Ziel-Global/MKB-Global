"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactForm } from "@/lib/useContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCTA() {
    const containerRef = useRef<HTMLElement>(null);
    const {
        role,
        setRole,
        formData,
        isSubmitting,
        submitMessage,
        handleFieldChange,
        handleSubmit,
    } = useContactForm("Operator");

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

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className="w-full py-12 md:py-16 bg-white">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between">

                {/* Left Side - Information & Cards */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                    <h2 className="fade-up-element text-3xl md:text-4xl font-medium text-[#3b177d] leading-tight mb-4">
                        Head-quarter in Qatar,<br />
                        Connected to the World
                    </h2>
                    <p className="fade-up-element text-[#333333] text-sm md:text-base mb-8">
                        MBK Global is a venture builder based in Qatar, built by people who believe execution is a craft and building with others is a privilege.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Operator Prospectus Card */}
                        <div className="fade-up-element relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group">
                            <Image
                                src="/work-with-us/839afe1e339b32e95f94af548b116ed1813f57b0.png"
                                alt="Operator Prospectus"
                                fill
                                className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                                Operator Prospectus
                            </span>
                        </div>

                        {/* Partner Prospectus Card */}
                        <div className="fade-up-element relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group">
                            <Image
                                src="/work-with-us/0436f4551509088b818c12028374d32a21737219.png"
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

                {/* Right Side - Form */}
                <div id="contact-form" className="fade-up-element w-full lg:w-[45%] bg-[#F3F0F8] rounded-[2rem] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-medium text-[#3b177d] mb-6">
                        Work With Us
                    </h2>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                        {/* Name Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-[#3b177d]">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleFieldChange}
                                className="w-full px-4 py-2.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                            />
                        </div>

                        {/* Company & Role Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Company</label>
                                <input
                                    name="company"
                                    type="text"
                                    placeholder="Enter your company name"
                                    value={formData.company}
                                    onChange={handleFieldChange}
                                    className="w-full px-4 py-2.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Role</label>
                                <input
                                    name="jobRole"
                                    type="text"
                                    placeholder="What's your role?"
                                    value={formData.jobRole}
                                    onChange={handleFieldChange}
                                    className="w-full px-4 py-2.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleFieldChange}
                                    className="w-full px-4 py-2.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-xs font-semibold text-[#3b177d]">Phone</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone"
                                    value={formData.phone}
                                    onChange={handleFieldChange}
                                    className="w-full px-4 py-2.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Role Segmented Control */}
                        <div className="flex flex-col gap-2 mt-1">
                            <div className="w-full p-1 bg-white rounded-xl flex">
                                <button
                                    type="button"
                                    onClick={() => setRole("Operator")}
                                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "Operator" ? 'bg-[#8B3DFF] text-white shadow-sm' : 'text-[#3b177d] hover:bg-gray-50'
                                        }`}
                                >
                                    Operator
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole("Partner")}
                                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "Partner" ? 'bg-[#8B3DFF] text-white shadow-sm' : 'text-[#3b177d] hover:bg-gray-50'
                                        }`}
                                >
                                    Partner
                                </button>
                            </div>
                        </div>

                        {/* Challenge Textarea */}
                        <div className="flex flex-col gap-2 mt-1">
                            <label className="text-xs font-semibold text-[#3b177d]">What challenge are you facing?</label>
                            <textarea
                                name="challenge"
                                placeholder="Type here..."
                                rows={3}
                                value={formData.challenge}
                                onChange={handleFieldChange}
                                className="w-full px-4 py-2.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#8B3DFF]/50 text-sm bg-white placeholder:text-gray-400 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 w-full bg-[#8B3DFF] hover:bg-[#7220e8] disabled:opacity-70 text-white font-semibold py-2.5 px-8 rounded-full transition-colors text-sm shadow-md"
                        >
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                        {submitMessage && <p className="text-xs text-[#3b177d]">{submitMessage}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
