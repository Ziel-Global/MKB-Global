"use client";

import Image from "next/image";

export const caseStudyPartnerLogos = [
    { src: "/slider-images/innowise-logo.png", alt: "Innowise", partnerKey: "innowise" },
    { src: "/slider-images/29e3441716eeb4aef5a80b7ca6949718e11d2ef9.png", alt: "Digital Enterprises", partnerKey: "digital.enterprises" },
    { src: "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png", alt: "Kongsberg", partnerKey: "kongsberg" },
    { src: "/slider-images/SP3D-logo1-3-300x157-removebg-preview.png", alt: "SP3D", partnerKey: "sp3d" },
    { src: "/slider-images/Frame 10.png", alt: "Optvance AI", partnerKey: "optvance" },
    { src: "/slider-images/applied-computing-new.png", alt: "Applied Computing", partnerKey: "applied.computing" },

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
                        const isKongsberg = logo.partnerKey === "kongsberg";
                        const isAppliedComputing = logo.partnerKey === "applied.computing";
                        const isOptvance = logo.partnerKey === "optvance";

                        return (
                            <button
                                key={logo.partnerKey}
                                type="button"
                                onClick={() => onSelectPartner(logo.partnerKey)}
                                aria-pressed={isActive}
                                className={`rounded-2xl px-5 py-4 transition-all duration-200 ${isActive
                                    ? "bg-[#8B3DFF]/10"
                                    : "bg-transparent hover:bg-gray-50"
                                    }`}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={220}
                                    height={60}
                                    className={`w-auto object-contain transition-all duration-200 ${isActive ? "grayscale-0" : "grayscale"
                                        } ${isInnowise ? "h-5 md:h-6" : isKongsberg ? "h-12 md:h-14" : isAppliedComputing ? "h-10 md:h-12" : isOptvance ? "h-6 md:h-8" : "h-8 md:h-10"}`}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}