"use client";
import Image from "next/image";

interface CaseStudyHeroProps {
    title: string;
    imageSrc: string;
    hideTitle?: boolean;
    fullImage?: boolean;
    hideImage?: boolean;
}

export default function CaseStudyHero({ title, imageSrc, hideTitle = false, fullImage = false, hideImage = false }: CaseStudyHeroProps) {
    return (
        <section className="w-full pt-10 pb-6 bg-white">
            <div className="max-w-[1000px] mx-auto px-4 md:px-8">
                {!hideImage && (
                    <div className="w-full h-auto rounded-3xl overflow-hidden mb-12 shadow-md">
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={1000}
                            height={fullImage ? 1600 : 560}
                            className={fullImage ? "w-full h-auto object-contain" : "w-full object-cover aspect-[16/9]"}
                            priority
                        />
                    </div>
                )}

                {!hideTitle && (
                    <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-extrabold text-[#3D1E85] leading-snug tracking-tight">
                        {title}
                    </h1>
                )}
            </div>
        </section>
    );
}
