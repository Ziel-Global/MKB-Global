"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Startup & SME Support Services",
        subtitle: "A Launchpad for Ventures With Vision",
        description: "We help early-stage companies build with confidence while offering infrastructure, strategic guidance, and operational support tailored to founders navigating the first critical stages of growth.",
        points: [
            "Structured support to go from idea to traction",
            "Governance frameworks for scale readiness",
            "Shared services to reduce admin burden and cost"
        ],
        image: "/images/placeholder.png", // Will need real images later
        reverse: false,
    },
    {
        title: "VC as a Service (VCaaS)",
        subtitle: "Extend Your Reach. De-Risk Your Investments.",
        description: "MBK acts as your venture capital execution arm sourcing, screening, and supporting high-potential startups aligned with your strategic goals.",
        points: [
            "Mandate-based startup sourcing",
            "Due diligence and growth support",
            "Portfolio management with real operational insights"
        ],
        image: "/images/placeholder.png",
        reverse: true,
    },
    {
        title: "Digital Transformation",
        subtitle: "Building the Infrastructure for Tomorrow’s Institutions",
        description: "From government platforms to enterprise systems, we deliver full-spectrum digital transformation — integrating technology, people, and process into scalable solutions.",
        points: [
            "Government modernization & citizen services",
            "Sector-specific enterprise transformation",
            "AI, automation, and next-gen tech adoption"
        ],
        image: "/images/placeholder.png",
        reverse: false,
    },
    {
        title: "Strategy Planning & Execution",
        subtitle: "Frameworks That Move You Forward",
        description: "We help organizations craft strategies they can actually deliver aligning vision, capability, and pace into clear, actionable roadmaps.",
        points: [
            "Co-developed business & digital strategies",
            "Implementation planning with milestones",
            "On-ground execution guidance & governance"
        ],
        image: "/images/placeholder.png",
        reverse: true,
    },
    {
        title: "Business Performance Management",
        subtitle: "Measure What Matters. Improve What Counts.",
        description: "We design systems that track performance, expose bottlenecks, and enable continuous improvement across key operations.",
        points: [
            "KPI design and tracking infrastructure",
            "Executive dashboards and real-time visibility",
            "Operational coaching and team enablement"
        ],
        image: "/images/placeholder.png",
        reverse: false,
    },
    {
        title: "Business Excellence",
        subtitle: "From Operational Chaos to Repeatable Success",
        description: "We help teams institutionalize excellence, embedding lean systems, clear standards, and a culture of improvement into daily operations.",
        points: [
            "Operational audits and excellence mapping",
            "Quality frameworks tailored to your sector",
            "Training and rollout across teams"
        ],
        image: "/images/placeholder.png",
        reverse: true,
    },
    {
        title: "Talent Management & Development",
        subtitle: "People Are the Platform. We Help Them Thrive.",
        description: "From leadership to frontline teams, we design development pathways and training programs that fuel growth and enable transformation.",
        points: [
            "Tailored training aligned with strategy",
            "Talent development plans for evolving teams",
            "Workshops, coaching, and capacity building"
        ],
        image: "/images/placeholder.png",
        reverse: false,
    }
];

export default function ServiceCategories() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.service-card') as HTMLElement[];

            sections.forEach((section, index) => {
                const textContent = section.querySelector('.text-content');
                const imageContent = section.querySelector('.image-content');

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                });

                // Determine direction based on reverse prop (odd/even visually)
                const isReverse = index % 2 !== 0;

                timeline.fromTo(textContent,
                    { opacity: 0, x: isReverse ? 50 : -50 },
                    { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
                ).fromTo(imageContent,
                    { opacity: 0, x: isReverse ? -50 : 50, scale: 0.95 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.6"
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full py-16 md:py-24 bg-white" ref={containerRef}>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-20 md:gap-32">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card flex flex-col md:flex-row relative items-center justify-center"
                    >
                        {/* Mobile Layout (Stacked) */}
                        <div className="flex md:hidden flex-col w-full gap-6">
                            <div className="text-content w-full bg-[#f3f0f8] rounded-2xl p-6 relative z-0">
                                <h2 className="text-2xl font-extrabold text-[#3b177d] leading-tight mb-2">
                                    {service.title}
                                </h2>
                                <h3 className="text-base font-bold text-black mb-3">
                                    {service.subtitle}
                                </h3>
                                <p className="text-[#333333] text-sm leading-relaxed mb-5">
                                    {service.description}
                                </p>

                                <ul className="flex flex-col gap-3 mb-6">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px] flex-shrink-0">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#8B3DFF" fillOpacity="0.1" />
                                                <path d="M16 10L10.5 15.5L8 13" stroke="#8B3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="text-[#333333] text-xs leading-snug">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="inline-block bg-[#8B3DFF] hover:bg-[#7220e8] text-white font-semibold py-2 px-5 rounded-full transition-colors text-xs shadow-sm">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="image-content w-full relative z-10">
                                <div className="relative w-full aspect-[16/10] bg-[#fafafa] rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                                    <div className="text-gray-300">
                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                                            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <Image src={service.image} alt={service.title} fill className="object-cover opacity-0" sizes="100vw" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout (Overlapping) */}
                        <div className="hidden md:flex w-full relative h-[450px] lg:h-[500px]">
                            {/* Text Card background - Anchored to left or right based on reverse */}
                            <div className={`absolute top-0 bottom-0 w-[65%] bg-[#f3f0f8] rounded-[2rem] p-10 lg:p-14 flex flex-col justify-center z-0
                                ${service.reverse ? 'right-0 lg:pl-32' : 'left-0 lg:pr-32'}
                            `}>
                                <div className={`text-content max-w-lg ${service.reverse ? 'ml-auto' : 'mr-auto'}`}>
                                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3b177d] leading-tight mb-4">
                                        {service.title}
                                    </h2>
                                    <h3 className="text-lg font-bold text-black mb-4">
                                        {service.subtitle}
                                    </h3>
                                    <p className="text-[#333333] text-sm lg:text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <ul className="flex flex-col gap-3.5 mb-8">
                                        {service.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 flex-shrink-0">
                                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#8B3DFF" fillOpacity="0.1" />
                                                    <path d="M16 10L10.5 15.5L8 13" stroke="#8B3DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-[#333333] text-sm lg:text-[0.95rem] leading-snug">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div>
                                        <Link href="/contact" className="inline-block bg-[#8B3DFF] hover:bg-[#7220e8] text-white font-semibold py-2.5 px-6 rounded-full transition-colors text-sm shadow-sm md:shadow-md transform hover:-translate-y-0.5">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Image Card - Centered vertically, anchored to opposite side */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-[55%] lg:w-[50%] h-[85%] z-10 
                                ${service.reverse ? 'left-0' : 'right-0'}
                            `}>
                                <div className="image-content w-full h-full bg-[#fafafa] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 flex items-center justify-center overflow-hidden">
                                    <div className="text-gray-300">
                                        <svg width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                                            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <Image src={service.image} alt={service.title} fill className="object-cover opacity-0" sizes="50vw" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
