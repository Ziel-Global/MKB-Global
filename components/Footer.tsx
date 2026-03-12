import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#eeeaf8] mt-auto overflow-hidden" style={{ borderRadius: '3rem 3rem 0 0' }}>
      {/* Links grid */}
      <div className="w-full max-w-[1400px] mx-auto px-10 md:px-16 lg:px-24 pt-14 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#1e1e24] text-sm">Quick Links</span>
            <ul className="flex flex-col gap-3 text-sm text-[#3d3d50]">
              <li><Link href="/" className="hover:text-[#2E0E68] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#2E0E68] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#2E0E68] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#2E0E68] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#1e1e24] text-sm">Explore</span>
            <ul className="flex flex-col gap-3 text-sm text-[#3d3d50]">
              <li><Link href="#" className="hover:text-[#2E0E68] transition-colors">Operator Prospectus</Link></li>
              <li><Link href="#" className="hover:text-[#2E0E68] transition-colors">Partner Prospectus</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#1e1e24] text-sm">Policies</span>
            <ul className="flex flex-col gap-3 text-sm text-[#3d3d50]">
              <li><Link href="#" className="hover:text-[#2E0E68] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#2E0E68] transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#1e1e24] text-sm">Get In Touch</span>
            <ul className="flex flex-col gap-3 text-sm text-[#3d3d50]">
              <li><a href="tel:+97444679005" className="hover:text-[#2E0E68] transition-colors">+974 4467 9005</a></li>
              <li><a href="mailto:hello@mbk.global" className="hover:text-[#2E0E68] transition-colors">hello@mbk.global</a></li>
              <li className="leading-relaxed">AAB Tower, 8th Floor, Doha – Qatar</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-[#d4cff0] py-6">
          <span className="text-xs text-[#6b6b80]">
            © 2025 MBK Global Holding. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#1e1e24] hover:text-[#2E0E68] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#1e1e24] hover:text-[#2E0E68] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Large logo banner */}
      <div className="w-full flex items-center px-10 md:px-16 lg:px-24 pt-6 pb-0 gap-6 md:gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/logos/logo-main.png"
            alt="MBK Global logo mark"
            width={203}
            height={104}
            className="w-[120px] md:w-[180px] lg:w-[180px] h-auto"
            priority
          />
        </div>
        <div className="flex items-baseline gap-0 leading-none">
          <span className="font-black text-[#1e1e24] text-[clamp(2.5rem,10vw,9rem)] tracking-tight leading-none">MBK</span>
          <span className="font-light text-[#1e1e24] text-[clamp(2.5rem,10vw,9rem)] tracking-tight leading-none">&nbsp;GLOBAL</span>
        </div>
      </div>
    </footer>
  );
}

