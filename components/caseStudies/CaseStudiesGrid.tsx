"use client";

import Image from "next/image";
import Link from "next/link";

// Pre-defined dummy data to match the UI 
// The actual images will fall back correctly, but we'll map the slider-images found in the directory
const caseStudiesData = [
    {
        id: 1,
        title: "AI-powered anomalies detection in pipelines",
        image: "/images/Midstream&Transport/14e67d1edca1df0ba818cf92d1f359524881c846.png",
        // This is a placeholder for the top-left logo present in the reference images
        partnerLogo: "innowise"
    },
    {
        id: 2,
        title: "Intelligent SCADA twin",
        image: "/images/Processing&refining/13cd710994173304660d7828d6c91e824c918f42.png",
        partnerLogo: "innowise"
    },
    {
        id: 3,
        title: "VR training tool for wind turbine maintenance",
        image: "/images/corporate&opertionalcenters/4dfc81d061ce603d4dcb777580aae3640689357a.png",
        partnerLogo: "innowise"
    },
    {
        id: 4,
        title: "Digital twins for remote asset management",
        image: "/images/digitalNervousSystem/0ca4ea1d74c587a7f241e0a9d18d36360f68f63c.png",
        partnerLogo: "kongsberg"
    },
    {
        id: 5,
        title: "Enterprise resource planning optimization",
        image: "/images/ecosystemPerformance/1e616235b7fa94237b79a4345c16e501d9c9571b.png",
        partnerLogo: "orbital"
    },
    {
        id: 6,
        title: "Subsurface drilling data analytics",
        image: "/images/subsurface&drilling/0c8e090b98c8c49cb9692105363fdaefdc980b6a.png",
        partnerLogo: "ocyan"
    },
    {
        id: 7,
        title: "Supply chain visibility & logistics tracking",
        image: "/images/supplychain&Indistrialservice/3ef197ad01fd371875824a6eb8a863a1ecb36d38.png",
        partnerLogo: "innowise"
    },
    {
        id: 8,
        title: "Automated commercial contract processing",
        image: "/images/trade&commercial/0481f44a99695c08e64be2fb47b2da7f31e3ad7f.png",
        partnerLogo: "digital.enterprises"
    },
    {
        id: 9,
        title: "Predictive maintenance for offshore platforms",
        image: "/images/Processing&refining/4fc0d498149934f2bb7f26013886c25602f91370.png",
        partnerLogo: "ocyan"
    },
];

export default function CaseStudiesGrid() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {caseStudiesData.map((study) => (
                        <Link
                            key={study.id}
                            href={`/case-studies/${study.id}`} // Link to theoretical details page
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
            </div>
        </section>
    );
}
