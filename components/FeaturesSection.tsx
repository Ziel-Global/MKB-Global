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
    const curtainRef = useRef<HTMLDivElement>(null);   // outer clip
    const innerRef = useRef<HTMLDivElement>(null);     // inner slide
    const isTransitioningRef = useRef(false);
    const requireSecondBackScrollRef = useRef(false);
    const backScrollCooldownUntilRef = useRef(0);
    const blockedBackAttemptsRef = useRef(0);
    const requiredBackAttempts = 2;
    const recenterFrameRef = useRef<number | null>(null);

    const currentCards = tabData[activeTab] || [];

    const smoothRecenterToFeatures = () => {
        const sectionTop = sectionRef.current?.offsetTop ?? window.scrollY;
        const start = window.scrollY;
        const target = sectionTop + 2;
        const distance = target - start;

        if (Math.abs(distance) < 2) {
            window.scrollTo({ top: target, behavior: "auto" });
            return;
        }

        if (recenterFrameRef.current) {
            cancelAnimationFrame(recenterFrameRef.current);
            recenterFrameRef.current = null;
        }

        const duration = 260;
        const startedAt = performance.now();
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (now: number) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = easeOut(progress);
            window.scrollTo({ top: start + distance * eased, behavior: "auto" });

            if (progress < 1) {
                recenterFrameRef.current = requestAnimationFrame(animate);
            } else {
                recenterFrameRef.current = null;
            }
        };

        recenterFrameRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Inner div starts fully translated down (hidden inside clip, no DOM gap)
        gsap.set(innerRef.current, { yPercent: 100 });

        const handleHeroExit = () => {
            if (isTransitioningRef.current) return;
            isTransitioningRef.current = true;

            // Lock scroll so user can't linger between sections
            document.body.style.overflow = "hidden";

            // Snap into view immediately
            const el = curtainRef.current;
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "instant" });
                }, 20);
            }

            // Curtain inner slides up — cinematic reveal
            gsap.to(innerRef.current, {
                yPercent: 0,
                duration: 1.0,
                ease: "power3.out",
                delay: 0.04,
                onComplete: () => {
                    // Unlock scroll once fully revealed
                    isTransitioningRef.current = false;
                    document.body.style.overflow = "";
                    ScrollTrigger.refresh();
                },
            });

            // Content rises inside as section appears
            gsap.fromTo(contentRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.35 }
            );
        };

        window.addEventListener("hero-exit", handleHeroExit);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=180%",
                    pin: true,
                    scrub: 1,
                    onEnterBack: () => {
                        // Coming back from WhyMBK: first upward overscroll should stop here.
                        requireSecondBackScrollRef.current = true;
                        backScrollCooldownUntilRef.current = 0;
                        blockedBackAttemptsRef.current = 0;
                    },
                    onLeaveBack: () => {
                        const now = performance.now();

                        if (now < backScrollCooldownUntilRef.current) {
                            smoothRecenterToFeatures();
                            return;
                        }

                        if (requireSecondBackScrollRef.current) {
                            requireSecondBackScrollRef.current = false;
                            backScrollCooldownUntilRef.current = now + 550;
                            blockedBackAttemptsRef.current = 1;
                            smoothRecenterToFeatures();
                            return;
                        }

                        if (blockedBackAttemptsRef.current < requiredBackAttempts) {
                            blockedBackAttemptsRef.current += 1;
                            backScrollCooldownUntilRef.current = now + 500;
                            smoothRecenterToFeatures();
                            return;
                        }

                        if (isTransitioningRef.current) return;
                        isTransitioningRef.current = true;

                        // User scrolled back up — jump straight to Hero with no in-between gap
                        document.body.style.overflow = "hidden";

                        requestAnimationFrame(() => {
                            window.dispatchEvent(new CustomEvent("features-exit-back"));
                            gsap.set(contentRef.current, { y: 100, opacity: 0 });
                            gsap.set(innerRef.current, { yPercent: 100 });
                            blockedBackAttemptsRef.current = 0;
                            backScrollCooldownUntilRef.current = 0;
                            isTransitioningRef.current = false;
                        });
                    },
                }
            });

        }, sectionRef);

        return () => {
            ctx.revert();
            isTransitioningRef.current = false;
            requireSecondBackScrollRef.current = false;
            backScrollCooldownUntilRef.current = 0;
            blockedBackAttemptsRef.current = 0;
            if (recenterFrameRef.current) {
                cancelAnimationFrame(recenterFrameRef.current);
                recenterFrameRef.current = null;
            }
            document.body.style.overflow = "";
            window.removeEventListener("hero-exit", handleHeroExit);
        };
    }, []);

    return (
        /* Outer div: clips overflow so inner slide doesn't create a DOM gap */
        <div ref={curtainRef} className="w-full overflow-hidden" style={{ height: "100vh" }}>
        {/* Inner div: slides up from below the clip boundary */}
        <div ref={innerRef} className="w-full h-full">
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

            <style>
                {`
                    .full-bleed-scroll {
                        width: 100%;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                    .full-bleed-scroll::-webkit-scrollbar {
                        display: none; /* Chrome, Safari and Opera */
                    }
                    @media (min-width: 768px) {
                        .full-bleed-scroll {
                            padding-left: 3rem;
                            padding-right: 3rem;
                        }
                    }
                    @media (min-width: 1280px) {
                        .full-bleed-scroll {
                            padding-left: calc(3rem + (100vw - 1280px) / 2);
                            padding-right: calc(3rem + (100vw - 1280px) / 2);
                        }
                    }
                `}
            </style>

            {/* Content Container */}
            <div ref={contentRef} className="absolute bottom-0 w-full pb-6 md:pb-8 z-10 flex flex-col items-start">

                {/* Headers */}
                <div className="relative mb-3 md:mb-4 w-full max-w-[1280px] mx-auto px-4 md:px-12 flex flex-col z-10">
                    <div className="relative max-w-3xl z-10">
                        {/* Gloss / Frosty background effect */}
                        <div className="absolute top-0 left-[-20%] w-[150%] h-[250%] bg-white/60 blur-[100px] rounded-full pointer-events-none -z-10" />

                        <h2 className="text-2xl md:text-4xl leading-tight font-medium text-[#481E8D] mb-2 md:mb-3 relative z-10">
                            Every Asset Connected. Every Risk Anticipated.
                        </h2>
                        <p className="text-[#374151] text-xs md:text-base font-medium leading-relaxed max-w-2xl relative z-10">
                            Real-time subsurface intelligence synchronises teams, reduces interventions, and stabilises production.<br />
                            Models learn continuously, guiding drilling with precision and confidence.
                        </p>
                    </div>
                </div>

                {/* Tabs Row — horizontally scrollable on mobile & desktop */}
                <div className="w-full overflow-x-auto scrollbar-none mb-4 md:mb-5 pointer-events-auto relative z-20 full-bleed-scroll flex">
                    <div className="flex gap-2" style={{ minWidth: "max-content" }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-center px-3 py-2.5 md:py-3 rounded-xl text-[10px] md:text-xs font-semibold transition-all duration-300 shadow-sm leading-tight whitespace-nowrap
                                    ${activeTab === tab
                                        ? "bg-[#2E0E68] text-white shadow-[#2E0E68]/20"
                                        : "bg-[#F3F4FB] hover:bg-white text-[#481E8D] hover:shadow-md"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Row */}
                <div className="relative z-20 w-full flex overflow-x-auto gap-3 md:gap-4 scrollbar-none pb-2 pointer-events-auto items-stretch full-bleed-scroll">
                    {currentCards.map((card, idx) => (
                        <div
                            key={`${activeTab}-${idx}`}
                            className="group flex bg-[#2E0E68] hover:bg-[#4D07E3] rounded-2xl overflow-hidden min-w-[280px] md:min-w-[340px] w-[280px] md:w-[340px] h-[86px] md:h-[96px] shrink-0 shadow-xl cursor-pointer transition-colors duration-500"
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
                            <div className="w-[65%] p-2.5 md:p-3 flex flex-col justify-center text-white">
                                <h3 className="font-semibold text-[0.70rem] md:text-xs mb-1 leading-tight">
                                    {card.title}
                                </h3>
                                <div className="text-[0.60rem] md:text-[0.65rem] text-purple-200/90 font-light space-y-0.5">
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
        </div>
        </div>
    );
}
