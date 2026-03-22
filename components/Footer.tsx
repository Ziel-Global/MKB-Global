import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#eeeaf8] mt-auto overflow-hidden" style={{ borderRadius: '3rem 3rem 0 0' }}>
      {/* Links grid */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-10 md:pt-14 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#1e1e24] text-sm">Quick Links</span>
            <ul className="flex flex-col gap-3 text-sm text-[#3d3d50]">
              <li><Link href="/" className="hover:text-[#2E0E68] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#2E0E68] transition-colors">About Us</Link></li>
              {/* <li><Link href="/services" className="hover:text-[#2E0E68] transition-colors">Services</Link></li> */}
              {/* <li><Link href="/contact" className="hover:text-[#2E0E68] transition-colors">Contact Us</Link></li> */}
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
              <li><Link href="/privacy-policy" className="hover:text-[#2E0E68] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#2E0E68] transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[#1e1e24] text-sm">Get In Touch</span>
            <ul className="flex flex-col gap-3 text-sm text-[#3d3d50]">
              <li><a href="tel:+97444679005" className="hover:text-[#2E0E68] transition-colors">+974 4467 9005</a></li>
              <li><a href="mailto:hello@mbk.global" className="hover:text-[#2E0E68] transition-colors">hello@mbk.global</a></li>
              <li className="leading-relaxed mt-2 pt-2 border-t border-[#d4cff0]/60">
                <span className="font-semibold text-[#1e1e24] block mb-1">Visiting address:</span>
                MBK Hub, Manarat Tower, Lusail Marina, Floor 12, Units 1203 & 1204
              </li>
              <li className="leading-relaxed mt-1">
                <span className="font-semibold text-[#1e1e24] block mb-1">Registered address:</span>
                Office 1204, Floor 12, Manarat Lusail Tower, Lusail Marina, Doha, Qatar
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between border-t border-[#d4cff0] py-4 md:py-6 gap-3 md:gap-0">
          <span className="text-xs text-[#6b6b80]">
            © 2025 MBK Global Holding. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/mbk-global/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#1e1e24] hover:text-[#2E0E68] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Large logo banner */}
      <div className="w-full flex justify-center px-6 md:px-16 lg:px-24 pt-4 md:pt-6 pb-0">
        <Image
          src="/svg-logos/Horizontal%20Logo.svg"
          alt="MBK Global horizontal logo"
          width={1200}
          height={280}
          className="w-full max-w-[440px] sm:max-w-[680px] md:max-w-[920px] lg:max-w-[1240px] h-auto"
          priority
        />
      </div>
    </footer>
  );
}

