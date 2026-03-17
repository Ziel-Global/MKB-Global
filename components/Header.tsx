"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const scrollToContact = (role: "Operator" | "Partner") => {
        setMenuOpen(false);
        
        // Dispatch the role change event immediately so components can update stat
        window.dispatchEvent(new CustomEvent("set-contact-role", { detail: { role } }));

        // Only use native scrollIntoView if we are not on the home page. 
        // On home page, WhyMBKSection handles the scrolling via GSAP so it doesn't get stuck in the pinning section.
        if (pathname !== "/") {
            setTimeout(() => {
                const element = document.getElementById("contact-form");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        } else {
            // Give GSAP time to process the event and set scroll
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent("scroll-to-contact"));
            }, 50);
        }
    };

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-[#EBE9FFE5] px-6 py-2 flex items-center justify-between rounded-full mt-2 mx-4 max-w-[calc(100%-2rem)] shadow-sm">
                {/* Left Navigation — hidden on mobile (below 849px) */}
                <nav className="hidden min-[849px]:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
                    {/* <Link href="/services" className="hover:text-black transition-colors">Services</Link> */}
                    <Link href="/our-partners" className="hover:text-black transition-colors">Our Partners</Link>
                </nav>

                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image
                            src="/svg-logos/Horizontal%20Logo.svg"
                            alt="MBK Global horizontal logo"
                            width={240}
                            height={56}
                            className="h-8 md:h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Right Buttons — hidden on mobile (below 849px) */}
                <div className="hidden min-[849px]:flex items-center gap-3">
                    <button
                        onClick={() => scrollToContact("Operator")}
                        className="bg-[#6D28D9] hover:bg-purple-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
                    >
                        Work With Us
                    </button>
                    <button
                        onClick={() => scrollToContact("Partner")}
                        className="bg-[#1e1e24] hover:bg-black text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
                    >
                        Partner With Us
                    </button>
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
                    {/* <Link href="/services" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">Services</Link> */}
                    <Link href="/our-partners" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">Our Partners</Link>
                    <div className="flex flex-col gap-3 mt-4 w-[70%]">
                        <button
                            onClick={() => scrollToContact("Operator")}
                            className="bg-[#6D28D9] hover:bg-purple-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors text-center"
                        >
                            Work With Us
                        </button>
                        <button
                            onClick={() => scrollToContact("Partner")}
                            className="bg-[#1e1e24] hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors text-center"
                        >
                            Partner With Us
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
