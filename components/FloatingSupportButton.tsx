"use client";

import Link from "next/link";

export default function FloatingSupportButton() {
  return (
    <Link
      href="https://sumud.mbk.global/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3.5 bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_10px_45px_rgba(220,38,38,0.6)] rounded-xl sm:rounded-2xl p-2.5 sm:py-3 sm:px-4 group hover:-translate-y-1"
    >
      {/* Warning Icon */}
      <div className="flex-shrink-0">
        <svg
          className="w-7 h-7 sm:w-[2.125rem] sm:h-[2.125rem]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.5L1.5 20.5H22.5L12 2.5Z"
            fill="#FACC15"
            stroke="#FACC15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9V14"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="17.5" r="1.25" fill="#111827" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex flex-col pr-0 sm:pr-1">
        <span className="text-white font-bold text-[0.875rem] sm:text-[1.0625rem] leading-tight tracking-wide">
          Facility at Risk?
        </span>
        <span className="text-white/90 font-medium text-[0.6875rem] sm:text-[0.8125rem] tracking-wide mt-0.5 sm:mt-0">
          Get Immediate Support
        </span>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 ml-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </Link>
  );
}
