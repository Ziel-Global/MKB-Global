"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-[#EBE9FFE5] px-6 py-2 flex items-center justify-between rounded-full mt-2 mx-4 max-w-[calc(100%-2rem)] shadow-sm">
                {/* Left Navigation — hidden on mobile (below 849px) */}
                <nav className="hidden min-[849px]:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
                    <Link href="/services" className="hover:text-black transition-colors">Services</Link>
                    <Link href="/case-studies" className="hover:text-black transition-colors">Case Studies</Link>
                </nav>

                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image src="/logos/logo-main.png" alt="MBK Logo" width={32} height={24} className="h-6 w-auto object-contain" priority />
                        <span className="font-bold text-xl ml-2 tracking-wide text-black">MBK GLOBAL</span>
                    </Link>
                </div>

                {/* Right Buttons — hidden on mobile (below 849px) */}
                <div className="hidden min-[849px]:flex items-center gap-3">
                    <Link href="/work" className="bg-[#6D28D9] hover:bg-purple-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                        Work With Us
                    </Link>
                    <Link href="/partner" className="bg-[#1e1e24] hover:bg-black text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                        Partner With Us
                    </Link>
                </div>

                {/* Hamburger Button — visible only on mobile/tablet (below 849px) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="min-[849px]:hidden relative z-[60] flex flex-col items-center justify-center w-9 h-9 gap-[5px] ml-auto"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-[2px] bg-[#1e1e24] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-[#1e1e24] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-[#1e1e24] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </header>

            {/* Mobile Menu Overlay — hidden above 848px */}
            {menuOpen && (
                <div className="min-[849px]:hidden fixed inset-0 top-[52px] z-50 bg-white/95 backdrop-blur-md flex flex-col items-center pt-12 gap-6 animate-fadeIn">
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">About Us</Link>
                    <Link href="/services" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">Services</Link>
                    <Link href="/case-studies" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">Case Studies</Link>
                    <div className="flex flex-col gap-3 mt-4 w-[70%]">
                        <Link href="/work" onClick={() => setMenuOpen(false)} className="bg-[#6D28D9] hover:bg-purple-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors text-center">
                            Work With Us
                        </Link>
                        <Link href="/partner" onClick={() => setMenuOpen(false)} className="bg-[#1e1e24] hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors text-center">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
