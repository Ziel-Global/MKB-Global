"use client";
import Image from "next/image";
import { ReactNode } from "react";

interface CaseStudySectionProps {
    title: string;
    children: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
}

export default function CaseStudySection({ title, children, imageSrc, imageAlt }: CaseStudySectionProps) {
    return (
        <section className="w-full py-8 bg-white">
            <div className="max-w-[1000px] mx-auto px-4 md:px-8">
                <h2 className="text-xl md:text-[1.35rem] font-bold text-black mb-5">
                    {title}
                </h2>

                <div className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed flex flex-col gap-4 font-medium mb-12">
                    {children}
                </div>

                {imageSrc && (
                    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-[#1A1A1A] p-2 pb-0 flex items-end justify-center">
                        <Image
                            src={imageSrc}
                            alt={imageAlt || title}
                            width={1000}
                            height={600}
                            className="w-full object-contain rounded-t-lg"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
