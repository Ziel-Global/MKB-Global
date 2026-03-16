"use client";

import Image from "next/image";

export const caseStudyPartnerLogos = [
    { src: "/slider-images/innowise-logo.png", alt: "Innowise", partnerKey: "innowise" },
    { src: "/slider-images/29e3441716eeb4aef5a80b7ca6949718e11d2ef9.png", alt: "Digital Enterprises", partnerKey: "digital.enterprises" },
    { src: "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png", alt: "Kongsberg", partnerKey: "kongsberg" },
    { src: "/slider-images/8817ba20c7d2317cceefdb6164db9a9550a5dcce.png", alt: "Petroleum Development Oman", partnerKey: "pdo" },
    { src: "/slider-images/b5f0af026953b945a92a3bb0a8a23fc641e85d52.png", alt: "Orbital", partnerKey: "orbital" },
    { src: "/slider-images/fbf484095b4d10ed6abf6c611faf3f91a01f1ddb.png", alt: "Ocyan", partnerKey: "ocyan" },
] as const;

interface CaseStudiesLogoSelectorProps {
    activePartner: string;
    onSelectPartner: (partner: string) => void;
}

export default function CaseStudiesLogoSelector({
    activePartner,
    onSelectPartner,
}: CaseStudiesLogoSelectorProps) {

    return (
        <div className="w-full bg-white py-4">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    {caseStudyPartnerLogos.map((logo) => {
                        const isActive = activePartner === logo.partnerKey;
                        const isInnowise = logo.partnerKey === "innowise";
                        const isOrbital = logo.partnerKey === "orbital";

                        return (
                            <button
                                key={logo.partnerKey}
                                type="button"
                                onClick={() => onSelectPartner(logo.partnerKey)}
                                aria-pressed={isActive}
                                className={`rounded-2xl px-5 py-4 transition-all duration-200 ${
                                    isActive
                                        ? "bg-[#8B3DFF]/10"
                                        : "bg-transparent hover:bg-gray-50"
                                }`}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={220}
                                    height={60}
                                    className={`w-auto object-contain ${isInnowise ? "h-5 md:h-6" : isOrbital ? "h-6 md:h-7" : "h-8 md:h-10"}`}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}