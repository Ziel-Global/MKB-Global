"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudiesData";

interface CaseStudiesGridProps {
    partnerFilter?: string;
}

export default function CaseStudiesGrid({ partnerFilter }: CaseStudiesGridProps) {
    const filteredStudies = partnerFilter
        ? caseStudiesData.filter((study) => study.partnerLogo === partnerFilter)
        : caseStudiesData;

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                {filteredStudies.length === 0 ? (
                    <p className="text-center text-gray-600 text-base md:text-lg">
                        No case studies found for this partner yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {filteredStudies.map((study) => (
                        <Link
                            key={study.id}
                            href={`/case-studies/${study.id}`}
                            className="group flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                                {/* Simulated Logo Badge in Top Left */}
                                <div className="absolute top-4 left-4 z-10 font-bold text-black text-xs flex items-center bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                                    {study.partnerLogo}
                                    <span className="text-red-500 ml-0.5 leading-none">.</span>
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
