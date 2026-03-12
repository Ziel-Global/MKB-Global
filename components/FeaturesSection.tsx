"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
    "Subsurface & Drilling",
    "Midstream & Transport",
    "Processing & Refining",
    "Trade & Commercial",
    "Supply Chain & Industrial Services",
    "Corporate & Operations Centres",
    "Digital Nervous System",
    "Ecosystem Performance"
];

const tabData: Record<string, Array<{ title: string; subtitles: string[]; image: string }>> = {
    "Subsurface & Drilling": [
        {
            title: "Enhanced Reservoir Monitoring",
            subtitles: ["• Improved hydrocarbon recovery", "• Faster field decisions"],
            image: "/images/subsurface&drilling/0c8e090b98c8c49cb9692105363fdaefdc980b6a.png",
        },
        {
            title: "Autonomous Seismic Data Processing",
            subtitles: ["• Reduced exploration time", "• Faster subsurface insights"],
            image: "/images/subsurface&drilling/22eed7cc54230b494110a5283f8d61eb24b33cbd.png",
        },
        {
            title: "Geological Model AI",
            subtitles: ["• Better reservoir accuracy", "• Accelerated planning cycles"],
            image: "/images/subsurface&drilling/2b5d19ae8b5eeae376fba114e4580ac4b56d3564.png",
        },
        {
            title: "Autonomous Drilling Control",
            subtitles: ["• Enhanced safety", "• Optimized ROP"],
            image: "/images/subsurface&drilling/9a54bbd9c9f14dea38823bb52250db05dc45f1df.png",
        }
    ],
    "Midstream & Transport": [
        {
            title: "Terminal Operations Control",
            subtitles: ["• Optimized loading", "• Real-time tracking"],
            image: "/images/Midstream&Transport/5edae69127d285ba10ec779628c678137107df22.png",
        },
        {
            title: "Network Optimization",
            subtitles: ["• Reduced losses", "• Dynamic routing"],
            image: "/images/Midstream&Transport/e049a16bacb76dc0e8c514229ad3a0b8c3786796.png",
        },
        {
            title: "Predictive Asset Health",
            subtitles: ["• Zero downtime", "• Lower maintenance costs"],
            image: "/images/Midstream&Transport/fd5ebfff6438892c37a1c6723464ef1cc6582613.png",
        }
    ],
    "Processing & Refining": [
        {
            title: "Process Yield Optimization",
            subtitles: ["• Maximize product margins", "• Energy efficiency"],
            image: "/images/Processing&refining/4fc0d498149934f2bb7f26013886c25602f91370.png",
        },
        {
            title: "AI-Driven Plant Monitoring",
            subtitles: ["• Early anomaly detection", "• Emissions reduction"],
            image: "/images/Processing&refining/5c36104456dbd212f3d210fe7017f1efff27f8a6.png",
        },
        {
            title: "Advanced Distillation Control",
            subtitles: ["• Stable operations", "• Yield maximization"],
            image: "/images/Processing&refining/db3322dc03fe506dfeb6a7a98a1cf1b5c07828f7.png",
        }
    ],
    "Corporate & Operations Centres": [
        {
            title: "Integrated Operations Center",
            subtitles: ["• Global visibility", "• Asset performance views"],
            image: "/images/corporate&opertionalcenters/4dfc81d061ce603d4dcb777580aae3640689357a.png",
        },
        {
            title: "Decision Support Cockpit",
            subtitles: ["• Data-driven insights", "• Rapid collaboration"],
            image: "/images/corporate&opertionalcenters/9d6043777fc3ef7b100e7c6dbd994e03d1094539.png",
        }
    ],
    "Digital Nervous System": [
        {
            title: "AI Foundation Platform",
            subtitles: ["• Unified data layer", "• Scalable ML ops"],
            image: "/images/digitalNervousSystem/23b789f048b17120138c917b7efa3d3696b23f2f.png",
        },
        {
            title: "Edge To Cloud Connectivity",
            subtitles: ["• Real-time processing", "• Seamless integration"],
            image: "/images/digitalNervousSystem/6b06ef62bbbd0c024dde1dc604086089715d1147.png",
        }
    ],
    "Ecosystem Performance": [
        {
            title: "Carbon Footprint Tracking",
            subtitles: ["• ESG compliance", "• Roadmap to net zero"],
            image: "/images/ecosystemPerformance/cb55b41f1fbc7a4f0b9f0023e61ced2d32725bbd.png",
        },
        {
            title: "Circular Economy View",
            subtitles: ["• Waste reduction", "• Resource optimization"],
            image: "/images/ecosystemPerformance/937bfb0cc6a22c72571ffdef06bea43d2cc66754.png",
        }
    ],
    "Supply Chain & Industrial Services": [
        {
            title: "Smart Logistics Hub",
            subtitles: ["• Real-time supply chain", "• Optimized routes"],
            image: "/images/supplychain&Indistrialservice/b9e0338e571252360bf2b3be0024196c3cd334de.png",
        },
        {
            title: "Predictive Procurement",
            subtitles: ["• Cost savings", "• Supplier risk analysis"],
            image: "/images/supplychain&Indistrialservice/66523758ee7797fecdd5958b4ed2f27d5bd8f14b.png",
        }
    ],
    "Trade & Commercial": [
        {
            title: "Dynamic Trading Desk",
            subtitles: ["• Real-time market data", "• Profit maximization"],
            image: "/images/trade&commercial/0481f44a99695c08e64be2fb47b2da7f31e3ad7f.png",
        },
        {
            title: "Commercial Risk Modeler",
            subtitles: ["• Scenario simulation", "• Portfolio optimization"],
            image: "/images/trade&commercial/4e6f44922d593e9eed75c485d9f665ec436e487a.png",
        }
    ]
};

export default function FeaturesSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const currentCards = tabData[activeTab] || [];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=180%",
                    pin: true,
                    scrub: 1,
                }
            });

            tl.fromTo(contentRef.current, {
                opacity: 0,
                y: 100,
            }, {
                opacity: 1,
                y: 0,
                ease: "power1.out",
                duration: 1
            });

            // Exit phase: fade out and slide down content before next section
            tl.to(contentRef.current, {
                opacity: 0,
                y: -60,
                ease: "power1.in",
                duration: 0.8
            }, 1.2);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    src="/icons/Final - Scene 2.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />

            {/* Content Container */}
            <div ref={contentRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-6 md:px-12 pb-8 z-10 flex flex-col items-start max-w-[1280px]">

                {/* Headers */}
                <div className="mb-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl leading-tight font-medium text-[#481E8D] mb-3">
                        Every Asset Connected. Every Risk Anticipated.
                    </h2>
                    <p className="text-[#374151] text-sm md:text-base font-normal leading-relaxed max-w-2xl">
                        Real-time subsurface intelligence synchronises teams, reduces interventions, and stabilises production.<br />
                        Models learn continuously, guiding drilling with precision and confidence.
                    </p>
                </div>

                {/* Tabs Row */}
                <div className="w-full flex gap-2 mb-5 pointer-events-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 text-center px-3 py-3 rounded-xl text-xs font-semibold transition-all duration-300 shadow-sm leading-tight
                                ${activeTab === tab
                                    ? "bg-[#2E0E68] text-white shadow-[#2E0E68]/20"
                                    : "bg-[#F3F4FB] hover:bg-white text-[#481E8D] hover:shadow-md"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards Row */}
                <div className="w-full flex overflow-x-auto gap-4 scrollbar-none pb-2 pointer-events-auto items-stretch">
                    {currentCards.map((card, idx) => (
                        <div
                            key={`${activeTab}-${idx}`}
                            className="group flex bg-[#2E0E68] hover:bg-[#4D07E3] rounded-2xl overflow-hidden min-w-[280px] w-[280px] h-[110px] shrink-0 shadow-xl cursor-pointer transition-colors duration-500"
                        >
                            {/* Left side Image */}
                            <div className="w-[35%] relative bg-[#1A0B3F] overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Right side Text */}
                            <div className="w-[65%] p-4 flex flex-col justify-center text-white">
                                <h3 className="font-semibold text-sm mb-1 leading-tight">
                                    {card.title}
                                </h3>
                                <div className="text-[0.7rem] text-purple-200/90 font-light space-y-0.5">
                                    {card.subtitles.map((sub, i) => (
                                        <p key={i}>{sub}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
