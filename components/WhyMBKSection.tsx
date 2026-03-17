"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    {
        title: "Higher hit-rate of successful digitalisation",
        description: "Because everything is designed, sequenced, and integrated as part of one operating model.",
    },
    {
        title: "Faster time-to-impact",
        description: "Because ecosystem capabilities are already aligned, pre-integrated, and ready to deploy.",
    },
    {
        title: "Lower risk",
        description: "Because we eliminate fragmentation, duplication, and incompatibility across vendors and workflows.",
    },
    {
        title: "Greater operational certainty",
        description: "Because intelligence, automation, and human-centred design are built into every layer from subsurface to trading.",
    },
    {
        title: "Sustained competitiveness",
        description: "Because we help move from reactive operations to Energy-as-a-Service: adaptive, predictive, and margin-disciplined.",
    },
];

const partnerAchievements = [
    {
        title: "Embedding their capabilities inside national-scale solutions",
        description: "Partners become part of integrated, end-to-end transformations not isolated tools.",
    },
    {
        title: "Reducing sales friction and cycle time",
        description: "Because MBK already has trust, access, and credibility in the energy ecosystem.",
    },
    {
        title: "Increasing deployment success",
        description: "Because partners plug into a coordinated architecture rather than delivering standalone components.",
    },
    {
        title: "Ensuring their technologies deliver measurable performance",
        description: "Through strategic alignment, operational integration, and human-centred change.",
    },
    {
        title: "Accelerating adoption at ecosystem level",
        description: "Because MBK orchestrates multi-party deployments operators, EPCs, fabricators, logistics, regulators, and service providers.",
    },
];

// Card full height (title ~28px + desc ~72px + padding ~32px = ~132px; with buffer)
const CARD_FULL_HEIGHT = 140;
const DESC_MAX_HEIGHT = 80;

export default function WhyMBKSection() {
    const sectionRef = useRef<HTMLElement>(null);
    // Left panel refs
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const descRefs = useRef<(HTMLDivElement | null)[]>([]);
    const footerRef = useRef<HTMLParagraphElement>(null);

    // Video & Right panel refs
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);

    // Phase 3 & Marquee refs
    const phase3Ref = useRef<HTMLDivElement>(null);
    const partnerWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const partnerDescRefs = useRef<(HTMLDivElement | null)[]>([]);
    const phase3FooterRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    // Phase 4 ref
    const phase4Ref = useRef<HTMLDivElement>(null);

    // Phase 5 ref
    const phase5Ref = useRef<HTMLDivElement>(null);
    const phase5TopRef = useRef<HTMLDivElement>(null);
    const phase5BottomRef = useRef<HTMLDivElement>(null);

    // Phase 6 ref
    const phase6Ref = useRef<HTMLDivElement>(null);

    // Drag-scroll refs for Phase 5 image strip
    const dragScrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const scrollStartX = useRef(0);

    const handleDragStart = (e: React.MouseEvent) => {
        isDragging.current = true;
        dragStartX.current = e.pageX;
        scrollStartX.current = dragScrollRef.current?.scrollLeft ?? 0;
        if (dragScrollRef.current) dragScrollRef.current.style.cursor = 'grabbing';
    };
    const handleDragMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !dragScrollRef.current) return;
        e.preventDefault();
        const dx = e.pageX - dragStartX.current;
        dragScrollRef.current.scrollLeft = scrollStartX.current - dx;
    };
    const handleDragEnd = () => {
        isDragging.current = false;
        if (dragScrollRef.current) dragScrollRef.current.style.cursor = 'grab';
    };

    const logos = [
        "/slider-images/innowise-logo.png",
        "/slider-images/29e3441716eeb4aef5a80b7ca6949718e11d2ef9.png",
        "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png",
        "/slider-images/SP3D-logo1-3-300x157-removebg-preview.png",
        "/slider-images/Frame 10.png",
        "/slider-images/applied-computing-new.png"
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Tighter durations for snappier transitions
            const totalDuration = achievements.length * 1.2 + 1.0 + 2.5 + partnerAchievements.length * 1.2 + 1.5 + 1.5 + 3.0 + 3.5 + 4.5;

            // Collect snap points (normalized 0–1) for each phase boundary
            const snapPoints: number[] = [];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${totalDuration * 55}%`,
                    pin: true,
                    scrub: 0.6,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            achievements.forEach((_, i) => {
                const t = i * 1.2;

                tl.fromTo(
                    wrapperRefs.current[i],
                    { maxHeight: 0, marginBottom: 0, opacity: 0 },
                    { maxHeight: CARD_FULL_HEIGHT, marginBottom: 2, opacity: 1, ease: "power2.out", duration: 0.8 },
                    t
                );

                if (i > 0) {
                    tl.to(
                        descRefs.current[i - 1],
                        { maxHeight: 0, opacity: 0, ease: "power2.inOut", duration: 0.5 },
                        t
                    );
                }
            });

            // Footer appears after all cards
            const footerStart = achievements.length * 1.2;
            tl.fromTo(
                footerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 },
                footerStart
            );

            // --- Transition to "Why Partners" Section ---
            const transitionStart = footerStart + 1.0;
            snapPoints.push(transitionStart / totalDuration);

            tl.to(leftPanelRef.current, { opacity: 0, duration: 0.8, ease: "power2.inOut" }, transitionStart);

            tl.to(
                videoContainerRef.current,
                { left: 0, right: "auto", x: "-35%", scale: 1.6, duration: 1.2, ease: "power2.inOut" },
                transitionStart
            );

            tl.fromTo(
                rightPanelRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1.0, ease: "power2.out" },
                transitionStart + 0.8
            );

            // --- Phase 3: "We amplify partners by" ---
            const phase3Start = transitionStart + 2.5;
            snapPoints.push(phase3Start / totalDuration);

            tl.to(rightPanelRef.current, { opacity: 0, y: -20, duration: 0.8, ease: "power2.inOut" }, phase3Start);
            tl.to(marqueeRef.current, { opacity: 0, y: 20, duration: 0.8, ease: "power2.inOut" }, phase3Start);

            tl.to(
                videoContainerRef.current,
                { x: "-8%", scale: 0.9, duration: 1.2, ease: "power2.inOut" },
                phase3Start
            );

            tl.fromTo(
                phase3Ref.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
                phase3Start + 0.6
            );

            // Phase 3 Accordion sequence
            partnerAchievements.forEach((_, i) => {
                const t = phase3Start + 1.5 + (i * 1.2);

                tl.fromTo(
                    partnerWrapperRefs.current[i],
                    { maxHeight: 0, opacity: 0 },
                    { maxHeight: CARD_FULL_HEIGHT, opacity: 1, ease: "power2.out", duration: 0.8 },
                    t
                );

                if (i > 0) {
                    tl.to(
                        partnerDescRefs.current[i - 1],
                        { maxHeight: 0, opacity: 0, ease: "power2.inOut", duration: 0.5 },
                        t
                    );
                }
            });

            // Phase 3 footer
            const phase3FooterStart = phase3Start + 1.5 + partnerAchievements.length * 1.2;
            tl.fromTo(
                phase3FooterRef.current,
                { opacity: 0, y: 24, maxHeight: 0 },
                { opacity: 1, y: 0, maxHeight: 200, ease: "power2.out", duration: 0.8 },
                phase3FooterStart
            );

            // --- Phase 4: "The MBK Advantage" ---
            const phase4Start = phase3FooterStart + 1.2;
            snapPoints.push(phase4Start / totalDuration);

            // Exit: video LEFT, phase3 RIGHT
            tl.to(
                videoContainerRef.current,
                { x: "-130%", opacity: 0, duration: 0.8, ease: "power2.inOut" },
                phase4Start
            );
            tl.to(
                phase3Ref.current,
                { x: "130%", opacity: 0, duration: 0.8, ease: "power2.inOut" },
                phase4Start
            );

            // Entrance: Phase 4 rises
            tl.fromTo(
                phase4Ref.current,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, ease: "power2.out", duration: 1.0 },
                phase4Start + 1.0
            );

            // Snap point when Phase 4 is fully visible
            const phase4VisibleAt = (phase4Start + 2.0) / totalDuration;
            snapPoints.push(phase4VisibleAt);

            // --- Phase 5: "Go Further. Go Faster. Go Together." ---
            const phase5Start = phase4Start + 3.0;
            snapPoints.push(phase5Start / totalDuration);

            // Exit Phase 4
            tl.to(
                phase4Ref.current,
                { y: "-100%", opacity: 0, ease: "power2.inOut", duration: 0.8 },
                phase5Start
            );

            // Entrance Phase 5
            tl.fromTo(
                phase5Ref.current,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, ease: "power2.out", duration: 1.0 },
                phase5Start + 0.8
            );

            // Snap point when Phase 5 is fully visible
            const phase5VisibleAt = (phase5Start + 1.8) / totalDuration;
            snapPoints.push(phase5VisibleAt);

            // --- Phase 6: "Let's Build the Future" ---
            const phase5ExitStart = phase5Start + 3.5;
            snapPoints.push(phase5ExitStart / totalDuration);

            tl.to(
                phase5TopRef.current,
                { y: "-100%", opacity: 0, ease: "power2.inOut", duration: 0.8 },
                phase5ExitStart
            );
            tl.to(
                phase5BottomRef.current,
                { y: "100%", opacity: 0, ease: "power2.inOut", duration: 0.8 },
                phase5ExitStart
            );

            // Phase 6 slides in from the RIGHT
            tl.fromTo(
                phase6Ref.current,
                { x: "100%", opacity: 0 },
                { x: "0%", opacity: 1, ease: "power2.out", duration: 1.0 },
                phase5ExitStart + 0.8
            );

            // Final snap point (end)
            snapPoints.push(1);

        }, sectionRef);

        // Recalculate all ScrollTrigger positions after both sections have mounted.
        const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

        return () => {
            clearTimeout(refreshTimer);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
            {/* Isometric video — hidden on mobile to avoid overlap */}
            <div
                ref={videoContainerRef}
                className="absolute top-1/2 -translate-y-[46%] right-0 w-[58%] h-[80%] hidden md:flex items-center justify-center pointer-events-none z-0 transform-gpu"
            >
                <video
                    src="/icons/Final - Scene 0.mp4"
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* ===== Phase 1: Left content panel — "With MBK, customers achieve" ===== */}
            <div
                ref={leftPanelRef}
                className="absolute top-[11%] left-4 md:left-16 w-[90%] md:w-[42%] max-w-[520px] z-10"
            >
                <h2 className="text-[1.5rem] md:text-[2.25rem] font-semibold text-[#2D1469] mb-5 md:mb-7 leading-tight">
                    With MBK, customers achieve
                </h2>

                <div className="flex flex-col">
                    {achievements.map((item, i) => (
                        // Wrapper: overflow-hidden, starts at height 0 — no empty space
                        <div
                            key={i}
                            ref={(el) => { wrapperRefs.current[i] = el; }}
                            className="group overflow-hidden rounded-2xl bg-[#EAE6F5] hover:bg-[#E2DCEF] transition-colors duration-300 cursor-pointer"
                            style={{ maxHeight: 0, opacity: 0, marginBottom: 0 }}
                        >
                            {/* Inner card content */}
                            <div className="px-4 md:px-5 pt-3 md:pt-4 pb-3 md:pb-4">
                                <h3 className="font-bold text-[0.85rem] md:text-[0.95rem] text-[#2D1469] leading-snug group-hover:text-[#1A0B3B] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                {/* Description – collapses when next card appears */}
                                <div
                                    ref={(el) => { descRefs.current[i] = el; }}
                                    className="overflow-hidden transition-all duration-300 group-hover:!max-h-[120px] group-hover:!opacity-100"
                                    style={{ maxHeight: DESC_MAX_HEIGHT }}
                                >
                                    <p className="text-[0.75rem] md:text-[0.82rem] text-gray-500 mt-1.5 md:mt-2 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing statement */}
                <p
                    ref={footerRef}
                    className="mt-4 md:mt-5 text-[0.88rem] md:text-[1.1rem] font-semibold text-[#2D1469] leading-snug opacity-0"
                >
                    MBK Global makes digitalisation work — not once, not in pockets, but across the entire value chain.
                </p>
            </div>

            {/* ===== Phase 2: Right content panel — "Why Partners Accelerate..." ===== */}
            <div
                ref={rightPanelRef}
                className="absolute top-[12%] right-4 md:right-16 w-[90%] md:w-[45%] max-w-[580px] z-10 opacity-0 pointer-events-none flex flex-col justify-start h-[70%]"
                style={{ opacity: 0 }}
            >
                <div className="bg-[#F5F2FC] rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-sm pointer-events-auto relative z-20">
                    <h2 className="text-[1.6rem] md:text-[2.6rem] font-semibold text-[#3D1E85] mb-3 md:mb-5 leading-[1.15]">
                        Why Partners Accelerate Further With MBK Global
                    </h2>
                    <p className="text-gray-600 text-[0.88rem] md:text-[1rem] leading-relaxed mb-3 md:mb-5 font-medium">
                        Technology providers, OEMs, advanced manufacturers, integrators, and digital platforms want to scale in energy but scaling alone is slow, expensive, and risky.
                    </p>
                    <p className="text-[#3D1E85] text-[0.95rem] md:text-[1.05rem] font-semibold">
                        MBK Global changes the equation.
                    </p>
                </div>
            </div>

            {/* ===== Phase 3: Right content panel — "We amplify partners by" ===== */}
            <div
                ref={phase3Ref}
                className="absolute top-[16%] md:top-[20%] right-4 md:right-[4%] lg:right-[8%] w-[90%] md:w-[41%] max-w-[460px] z-10 opacity-0 pointer-events-none flex flex-col justify-center"
                style={{ opacity: 0 }}
            >
                <h2 className="text-[1.3rem] md:text-[1.9rem] font-semibold text-[#3D1E85] mb-3 md:mb-4 leading-[1.15]">
                    We amplify partners by:
                </h2>

                <div className="flex flex-col gap-[2px] rounded-xl overflow-hidden pointer-events-auto">
                    {partnerAchievements.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => { partnerWrapperRefs.current[i] = el; }}
                            className="group overflow-hidden bg-[#F5F2FC] hover:bg-[#EBE5F7] transition-colors duration-300 cursor-pointer w-full"
                            style={{ maxHeight: 0, opacity: 0 }}
                        >
                            <div className="px-4 md:px-5 pt-2.5 md:pt-3 pb-2.5 md:pb-3">
                                <h3 className="font-bold text-[0.8rem] md:text-[0.88rem] text-[#3D1E85] leading-snug group-hover:text-[#1A0B3B] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <div
                                    ref={(el) => { partnerDescRefs.current[i] = el; }}
                                    className="overflow-hidden transition-all duration-300 group-hover:!max-h-[120px] group-hover:!opacity-100"
                                    style={{ maxHeight: DESC_MAX_HEIGHT }}
                                >
                                    <p className="text-[0.72rem] md:text-[0.78rem] text-gray-600 mt-1 md:mt-1.5 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 pr-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing statement */}
                <div
                    ref={phase3FooterRef}
                    className="mt-4 md:mt-5 overflow-hidden pointer-events-auto"
                    style={{ opacity: 0, maxHeight: 0 }}
                >
                    <p className="text-[0.95rem] md:text-[1.25rem] font-semibold text-[#3D1E85] leading-snug mb-2">
                        Partners go further and faster with MBK because the ecosystem is already built around success.
                    </p>
                    <p className="text-[0.75rem] md:text-[0.82rem] text-gray-500 leading-relaxed">
                        We create the conditions where the right technologies reach the right users at the right time and deliver the impact they were designed for.
                    </p>
                </div>
            </div>

            {/* ===== Phase 4 — "The MBK Advantage" ===== */}
            <div
                ref={phase4Ref}
                className="absolute inset-0 z-30 bg-white flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-24 overflow-y-auto md:overflow-hidden"
                style={{ transform: "translateY(100%)", opacity: 0 }}
            >
                {/* Left: text */}
                <div className="w-full md:w-[46%] max-w-[520px] flex flex-col justify-center pt-16 md:pt-0 pb-6 md:pb-0">
                    <h2 className="text-[1.6rem] md:text-[2.5rem] font-bold text-[#2D1469] leading-tight mb-2 md:mb-3">
                        The MBK Advantage:
                    </h2>
                    <h3 className="text-[0.95rem] md:text-[1.3rem] font-bold text-[#3D1E85] mb-4 md:mb-5">
                        Orchestration at Industrial Scale
                    </h3>
                    <p className="text-gray-700 text-[0.82rem] md:text-[0.92rem] leading-relaxed mb-3">
                        Digitalisation is no longer a technology problem it is an integration problem.
                    </p>
                    <p className="text-gray-700 text-[0.82rem] md:text-[0.92rem] leading-relaxed mb-3">
                        MBK Global solves it.
                    </p>
                    <p className="text-gray-700 text-[0.82rem] md:text-[0.92rem] leading-relaxed mb-3">
                        We bring together the full IR4 stack sensing, digital twins, AI, additive manufacturing, cloud, edge, robotics, supply-chain intelligence, and automation into one coherent model of how the energy ecosystem should operate.
                    </p>
                    <p className="text-gray-700 text-[0.82rem] md:text-[0.92rem] leading-relaxed">
                        This is how Qatar moves from a fragmented, reactive, commodity price taker to an Energy as a Service price maker adaptive, predictive, and globally differentiated.
                    </p>
                </div>

                {/* Right: MBK logo with orbiting partner logos */}
                <div className="w-full md:w-[48%] flex items-center justify-center relative h-[280px] md:h-full mt-4 md:mt-0">
                    {/* Central MBK logo (actual PNG) */}
                    <div className="flex flex-col items-center z-10 relative">
                        <Image
                            src="/logos/logo-main.png"
                            alt="MBK Global"
                            width={220}
                            height={220}
                            className="object-contain mb-3 w-[120px] md:w-[220px] h-auto"
                        />
                        <span className="font-black text-[1.3rem] md:text-[2rem] tracking-widest text-[#1a1a1a]">MBK <span className="font-light">GLOBAL</span></span>
                    </div>

                    {/* Orbiting partner logos — evenly spaced 72° apart, same speed */}
                    {[
                        { logo: "/logos/logo-1.png", size: 64, delay: "0s" },
                        { logo: "/logos/logo-2.png", size: 64, delay: "-3.2s" },
                        { logo: "/logos/logo-3.png", size: 64, delay: "-6.4s" },
                        { logo: "/logos/logo-4.png", size: 64, delay: "-9.6s" },
                        { logo: "/logos/logo-5.png", size: 64, delay: "-12.8s" },
                    ].map((orb, idx) => (
                        <div
                            key={idx}
                            className="absolute pointer-events-none"
                            style={{
                                top: "50%",
                                left: "50%",
                                width: orb.size,
                                height: orb.size,
                                marginTop: -orb.size / 2,
                                marginLeft: -orb.size / 2,
                                animation: `orbit 16s linear ${orb.delay} infinite`,
                            }}
                        >
                            <Image src={orb.logo} alt="partner" fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== Phase 5 — "Go Further. Go Faster. Go Together." ===== */}
            <div
                ref={phase5Ref}
                className="absolute inset-0 z-30 bg-white flex flex-col overflow-hidden"
                style={{ transform: "translateY(100%)", opacity: 0 }}
            >
                {/* Top section: headline + cards */}
                <div ref={phase5TopRef} className="flex flex-col md:flex-row flex-1 items-start md:items-center px-5 md:px-16 lg:px-24 pt-16 md:pt-20 pb-4 md:pb-6 gap-6 md:gap-12">
                    {/* Left: headline */}
                    <div className="w-full md:w-[38%] flex flex-col justify-center">
                        <h2 className="text-[1.8rem] md:text-[3.5rem] font-extrabold text-[#2D1469] leading-[1.1] mb-4 md:mb-6">
                            Go Further.<br />
                            Go Faster.<br />
                            Go Together.
                        </h2>
                        <p className="text-gray-600 text-[0.82rem] md:text-[0.95rem] leading-relaxed max-w-[420px]">
                            Whether you operate assets or build technologies, MBK Global helps you achieve more with less complexity, less risk, and significantly more impact.
                        </p>
                    </div>

                    {/* Right: Customers + Partners cards */}
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full md:w-[58%]">
                        <div className="group flex-1 bg-[#EEE9F9] hover:bg-[#E4DDF7] rounded-[12px] p-5 md:p-7 flex flex-col justify-between min-h-[140px] md:min-h-[180px] relative overflow-hidden cursor-pointer transition-colors duration-300">
                            {/* Arrow - appears on hover */}
                            <div className="absolute top-4 md:top-5 right-4 md:right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>
                            {/* Watermark logo - rises on hover */}
                            <div className="absolute bottom-[-10%] right-[-2%] w-[45%] opacity-[0.18] group-hover:opacity-[0.28] group-hover:translate-y-[-12%] pointer-events-none select-none transition-all duration-500">
                                <Image src="/logos/logo-main.png" alt="" fill className="object-contain" />
                            </div>
                            <h3 className="text-[1.1rem] md:text-[1.3rem] font-bold text-[#3D1E85] group-hover:text-[#5B21B6] mb-2 md:mb-3 transition-colors duration-300">Customers</h3>
                            <p className="text-[#3D1E85] group-hover:text-[#5B21B6] text-[0.82rem] md:text-[0.92rem] leading-snug font-medium transition-colors duration-300">Unlock the full potential of digitalisation.</p>
                        </div>
                        <div className="group flex-1 bg-[#EEE9F9] hover:bg-[#E4DDF7] rounded-[12px] p-5 md:p-7 flex flex-col justify-between min-h-[140px] md:min-h-[180px] relative overflow-hidden cursor-pointer transition-colors duration-300">
                            {/* Arrow - appears on hover */}
                            <div className="absolute top-4 md:top-5 right-4 md:right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>
                            {/* Watermark logo - rises on hover */}
                            <div className="absolute bottom-[-10%] right-[-2%] w-[45%] opacity-[0.18] group-hover:opacity-[0.28] group-hover:translate-y-[-12%] pointer-events-none select-none transition-all duration-500">
                                <Image src="/logos/logo-main.png" alt="" fill className="object-contain" />
                            </div>
                            <h3 className="text-[1.1rem] md:text-[1.3rem] font-bold text-[#3D1E85] group-hover:text-[#5B21B6] mb-2 md:mb-3 transition-colors duration-300">Partners</h3>
                            <p className="text-[#3D1E85] group-hover:text-[#5B21B6] text-[0.82rem] md:text-[0.92rem] leading-snug font-medium transition-colors duration-300">Scale solutions with amplified speed and certainty.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom: draggable image strip */}
                <div ref={phase5BottomRef}>
                    <div
                        ref={dragScrollRef}
                        className="w-full overflow-x-auto pb-4 md:pb-6 px-4 md:px-6 select-none"
                        style={{ cursor: 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                    >
                        <div className="flex gap-4 md:gap-5" style={{ width: 'max-content' }}>
                            {[
                                { src: "/images/subsurface&drilling/0c8e090b98c8c49cb9692105363fdaefdc980b6a.png", label: "Enhanced Reservoir Monitoring" },
                                { src: "/images/Midstream&Transport/5edae69127d285ba10ec779628c678137107df22.png", label: "Terminal Operations Control" },
                                { src: "/images/Processing&refining/4fc0d498149934f2bb7f26013886c25602f91370.png", label: "Process Yield Optimization" },
                                { src: "/images/trade&commercial/0481f44a99695c08e64be2fb47b2da7f31e3ad7f.png", label: "Trade Analytics Platform" },
                                { src: "/images/digitalNervousSystem/0ca4ea1d74c587a7f241e0a9d18d36360f68f63c.png", label: "Digital Nervous System" },
                                { src: "/images/subsurface&drilling/22eed7cc54230b494110a5283f8d61eb24b33cbd.png", label: "Autonomous Seismic Processing" },
                                { src: "/images/Midstream&Transport/e049a16bacb76dc0e8c514229ad3a0b8c3786796.png", label: "Network Optimization" },
                                { src: "/images/Processing&refining/5c36104456dbd212f3d210fe7017f1efff27f8a6.png", label: "AI-Driven Plant Monitoring" },
                            ].map((item, i) => (
                                <div key={i} className="group flex-shrink-0 w-[200px] md:w-[280px] flex flex-col">
                                    {/* Image card */}
                                    <div className="relative w-full h-[120px] md:h-[170px] rounded-2xl overflow-hidden bg-gray-100">
                                        <Image
                                            src={item.src}
                                            alt={item.label}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            draggable={false}
                                        />
                                        {/* Grey/silver overlay on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[rgba(180,185,195,0.35)]" />
                                        {/* Arrow on hover — plain, pink-purple */}
                                        <div className="absolute top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C026D3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Label */}
                                    <p className="mt-2 md:mt-2.5 text-[0.78rem] md:text-[0.88rem] font-bold text-gray-800 group-hover:text-[#5B21B6] leading-snug transition-colors duration-300 px-0.5">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>{/* end phase5BottomRef */}
            </div>

            {/* ===== Phase 6 — Contact / Let's Build the Future ===== */}
            <div
                ref={phase6Ref}
                className="absolute inset-0 z-40 bg-white flex flex-col md:flex-row items-stretch justify-start md:justify-center px-5 md:px-10 lg:px-16 gap-6 md:gap-10 overflow-y-auto md:overflow-hidden pt-24 pb-20 md:py-16"
                style={{ transform: "translateX(100%)", opacity: 0 }}
            >
                {/* Left: text + prospectus cards */}
                <div className="flex flex-col w-full md:w-[38%] md:max-w-[420px] shrink-0 md:self-stretch">
                    <h2 className="text-[1.6rem] md:text-[2.7rem] font-extrabold text-[#2D1469] leading-[1.1] mb-3 md:mb-4">
                        Let&apos;s Build the Future of Operations
                    </h2>
                    <p className="text-gray-500 text-[0.8rem] md:text-[0.88rem] leading-relaxed mb-4 md:mb-6">
                        Whether you&apos;re exploring digitalisation, scaling solutions, or seeking impact MBK Global helps you move forward safely, confidently, and fully.
                    </p>
                    <div className="flex gap-3 flex-1 min-h-[160px] md:min-h-0">
                        <div className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group">
                            <Image src="/images/subsurface&drilling/0c8e090b98c8c49cb9692105363fdaefdc980b6a.png" alt="Operator Prospectus" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-[rgba(10,12,30,0.55)]" />
                            {/* Download icon */}
                            <div className="absolute bottom-12 left-4 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 ease-out">
                                <div className="bg-[#7C3AED] rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shadow-lg">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 4v12m0 0l-4-4m4 4l4-4" /><line x1="4" y1="20" x2="20" y2="20" />
                                    </svg>
                                </div>
                            </div>
                            <span className="absolute bottom-3 left-3 text-white font-bold text-[0.75rem] md:text-[0.85rem] z-10">Operator Prospectus</span>
                        </div>
                        <div className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group">
                            <Image src="/images/Midstream&Transport/5edae69127d285ba10ec779628c678137107df22.png" alt="Partner Prospectus" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-[rgba(10,12,30,0.55)]" />
                            {/* Download icon */}
                            <div className="absolute bottom-12 left-4 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 ease-out">
                                <div className="bg-[#7C3AED] rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shadow-lg">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 4v12m0 0l-4-4m4 4l4-4" /><line x1="4" y1="20" x2="20" y2="20" />
                                    </svg>
                                </div>
                            </div>
                            <span className="absolute bottom-3 left-3 text-white font-bold text-[0.75rem] md:text-[0.85rem] z-10">Partner Prospectus</span>
                        </div>
                    </div>
                </div>

                {/* Right: form card */}
                <div className="flex-1 max-w-full md:max-w-[620px] bg-[#EEE9F9] rounded-3xl p-5 md:p-7 flex flex-col gap-3 md:self-stretch justify-between">
                    <h3 className="text-[1.3rem] md:text-[1.6rem] font-bold text-[#2D1469] mb-1">Work With Us</h3>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-wide">Name</label>
                        <input type="text" placeholder="Enter your name" className="w-full bg-white rounded-xl px-4 py-2.5 text-[0.85rem] text-gray-700 outline-none border border-transparent focus:border-[#7C3AED] transition-colors placeholder:text-gray-400" />
                    </div>

                    {/* Company + Role */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-wide">Company</label>
                            <input type="text" placeholder="Enter your company name" className="w-full bg-white rounded-xl px-4 py-2.5 text-[0.85rem] text-gray-700 outline-none border border-transparent focus:border-[#7C3AED] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-wide">Role</label>
                            <input type="text" placeholder="What's your role?" className="w-full bg-white rounded-xl px-4 py-2.5 text-[0.85rem] text-gray-700 outline-none border border-transparent focus:border-[#7C3AED] transition-colors placeholder:text-gray-400" />
                        </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full bg-white rounded-xl px-4 py-2.5 text-[0.85rem] text-gray-700 outline-none border border-transparent focus:border-[#7C3AED] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
                            <input type="tel" placeholder="Enter your phone" className="w-full bg-white rounded-xl px-4 py-2.5 text-[0.85rem] text-gray-700 outline-none border border-transparent focus:border-[#7C3AED] transition-colors placeholder:text-gray-400" />
                        </div>
                    </div>

                    {/* Operator / Partner toggle */}
                    <div className="flex gap-3">
                        <button className="flex-1 py-2.5 rounded-xl bg-[#7C3AED] text-white font-semibold text-[0.85rem] transition-colors hover:bg-[#6D28D9]">Operator</button>
                        <button className="flex-1 py-2.5 rounded-xl bg-white text-gray-700 font-semibold text-[0.85rem] border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">Partner</button>
                    </div>

                    {/* Challenge textarea */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-wide">What challenge are you facing?</label>
                        <textarea rows={3} placeholder="Type here..." className="w-full bg-white rounded-xl px-4 py-2.5 text-[0.85rem] text-gray-700 outline-none border border-transparent focus:border-[#7C3AED] transition-colors resize-none placeholder:text-gray-400" />
                    </div>

                    <button className="self-start bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-[0.9rem] px-7 py-2.5 rounded-full transition-colors">
                        Submit
                    </button>
                </div>
            </div>

            {/* Marquee layer - positioned at the very bottom spanning the entire width */}
            <div ref={marqueeRef} className="absolute bottom-0 left-0 w-full z-20 pt-4 md:pt-6 pb-2 overflow-hidden">
                <div className="absolute top-1/2 left-[-20%] -translate-y-1/2 w-[150%] h-[280%] bg-white/62 blur-[130px] rounded-full pointer-events-none" />
                <p className="relative z-10 text-center text-gray-600 text-[11px] md:text-[13px] font-medium mb-3 md:mb-4">Our Partners</p>
                <div className="relative z-10 w-full overflow-hidden">
                    <div className="flex w-[200%] animate-marquee">
                        {/* First set of logos */}
                        <div className="flex w-1/2 items-center justify-around px-4 md:px-8">
                            {logos.map((logo, index) => (
                                <div key={`logo-1-${index}`} className="flex items-center justify-center min-w-[90px] md:min-w-[150px]">
                                    <div className="relative w-full h-full min-h-[28px] md:min-h-[35px] max-w-[80px] md:max-w-[110px]">
                                        <Image
                                            src={logo}
                                            alt={`Partner logo ${index + 1}`}
                                            fill
                                            className="object-contain mix-blend-multiply opacity-90 transition-opacity hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Second set of logos for seamless loop */}
                        <div className="flex w-1/2 items-center justify-around px-4 md:px-8">
                            {logos.map((logo, index) => (
                                <div key={`logo-2-${index}`} className="flex items-center justify-center min-w-[90px] md:min-w-[150px]">
                                    <div className="relative w-full h-full min-h-[28px] md:min-h-[35px] max-w-[80px] md:max-w-[110px]">
                                        <Image
                                            src={logo}
                                            alt={`Partner logo ${index + 1}`}
                                            fill
                                            className="object-contain mix-blend-multiply opacity-90 transition-opacity hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
