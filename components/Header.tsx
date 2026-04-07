"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

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
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                // On mobile, find the phase-6 container (the contact form's snap slide) and scroll it into view
                setTimeout(() => {
                    const element = document.getElementById("contact-form");
                    if (element) {
                        // Find the snap child (parent with snap-start) to scroll to
                        const snapParent = element.closest('[class*="snap-start"]') as HTMLElement | null;
                        if (snapParent) {
                            snapParent.scrollIntoView({ behavior: "smooth", block: "start" });
                        } else {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }
                }, 100);
            } else {
                // Give GSAP time to process the event and set scroll
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("scroll-to-contact"));
                }, 50);
            }
        }
    };

    return (
        <div className="fixed top-0 z-50 mt-2 w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] mx-4">
            <header className={`relative bg-[#EBE9FFF2] backdrop-blur-xl px-6 py-2 flex items-center justify-between ${menuOpen ? "rounded-t-[1.75rem] rounded-b-none" : "rounded-full"}`}>
                {/* Left Navigation — hidden on mobile (below 849px) */}
                <nav className="hidden min-[53.0625rem]:flex items-center gap-6 text-sm font-medium text-gray-700">
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
                <div className="hidden min-[53.0625rem]:flex items-center gap-3">
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
                    className="min-[53.0625rem]:hidden relative z-[60] flex flex-col items-center justify-center w-9 h-9 gap-[0.3125rem] ml-auto"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`block w-5 h-[2px] bg-[#1e1e24] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[0.4375rem]" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-[#1e1e24] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-[#1e1e24] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[0.4375rem]" : ""}`} />
                </button>
            </header>

            {/* Mobile Dropdown Menu — hidden above 848px */}
            <div
                className={`min-[53.0625rem]:hidden absolute top-full left-0 right-0 overflow-hidden transition-[max-height,opacity] duration-220 ease-out ${menuOpen ? "max-h-[23.75rem] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
                <div className="bg-[#EBE9FFF2] backdrop-blur-xl rounded-[0_0_28px_28px] overflow-hidden -mt-[2px]">
                    <div className="px-6 pt-7 pb-6">
                        <nav className="flex flex-col items-center gap-8">
                            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">
                                About Us
                            </Link>
                            {/* <Link href="/services" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">Services</Link> */}
                            <Link href="/our-partners" onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-[#2D1469] hover:text-[#6D28D9] transition-colors">
                                Our Partners
                            </Link>
                        </nav>

                        <div className="flex flex-col gap-3 mt-8 px-4">
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
                </div>
            </div>

        </div>
    );
}
