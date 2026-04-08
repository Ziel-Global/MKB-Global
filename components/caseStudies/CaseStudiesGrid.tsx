"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudiesData";

interface CaseStudiesGridProps {
    partnerFilter?: string;
}

const partnerLogoMap: Record<string, string> = {
    innowise: "/slider-images/innowise-logo.png",
    "digital.enterprises": "/logo 2/Untitled-11.png",
    kongsberg: "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png",
    sp3d: "/slider-images/SP3D-logo1-3-300x157-removebg-preview.png",
    optvance: "/slider-images/Frame 10.png",
    "applied.computing": "/slider-images/applied-computing-new.png",
};

export default function CaseStudiesGrid({ partnerFilter }: CaseStudiesGridProps) {
    const filteredStudies = partnerFilter
        ? caseStudiesData.filter((study) => study.partnerLogo === partnerFilter)
        : caseStudiesData;

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[77.5rem] mx-auto px-4 md:px-8">
                {filteredStudies.length === 0 ? (
                    <p className="text-center text-gray-600 text-base md:text-lg">
                        No case studies found for this partner yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {filteredStudies.map((study) => (
                            <Link
                                key={study.id}
                                href={`/our-partners/${study.id}`}
                                className="group flex flex-col gap-4 cursor-pointer"
                            >
                                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                                    {/* Partner Logo Badge in Top Left */}
                                    <div className="absolute top-4 left-4 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm px-2 h-7 md:h-8 min-w-[3.5rem] md:min-w-[4rem] rounded overflow-visible shadow-sm">
                                        <Image
                                            src={partnerLogoMap[study.partnerLogo] || "/logos/logo-main.png"}
                                            alt={study.partnerLogo}
                                            width={120}
                                            height={40}
                                            className={`w-auto object-contain ${
                                                study.partnerLogo === "innowise" 
                                                    ? "h-4 md:h-5" 
                                                    : study.partnerLogo === "digital.enterprises" 
                                                        ? "h-11 md:h-13" 
                                                        : study.partnerLogo === "kongsberg"
                                                            ? "h-8 md:h-10"
                                                            : study.partnerLogo === "optvance"
                                                                ? "h-5 md:h-6"
                                                                : "h-4.5 md:h-5.5"
                                            }`}
                                        />
                                    </div>

                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-black leading-snug group-hover:text-[#8B3DFF] transition-colors duration-300">
                                    {study.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
