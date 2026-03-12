import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-[#f6f6f8] px-6 py-2 flex items-center justify-between rounded-full mt-2 mx-4 max-w-[calc(100%-2rem)] shadow-sm">
            {/* Left Navigation */}
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
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

            {/* Right Buttons */}
            <div className="flex items-center gap-3">
                <Link href="/work" className="bg-[#6D28D9] hover:bg-purple-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                    Work With Us
                </Link>
                <Link href="/partner" className="bg-[#1e1e24] hover:bg-black text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
                    Partner With Us
                </Link>
            </div>
        </header>
    );
}
