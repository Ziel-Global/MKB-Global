export interface CaseStudy {
    id: number;
    title: string;
    image: string;
    partnerLogo: string;
    imageOnlyDetails?: boolean;
    hideDetailImages?: boolean;
    sectionImages?: {
        problem?: string;
        solution?: string;
        results?: string;
    };
    details?: {
        challenge: string[];
        challengeBullets?: string[];
        solutionIntro?: string;
        solutionCapabilities?: string[];
        solutionAdditionalModules?: string[];
        impactBullets: string[];
        conclusion?: string;
    };
}

export const caseStudiesData: CaseStudy[] = [
    {
        id: 1,
        title: "AI-powered anomalies detection in pipelines",
        image: "/innowise-images/case-1/Case 1 - General picture (background).png",
        partnerLogo: "innowise",
        sectionImages: {
            problem: "/innowise-images/case-1/Case 1 - Incidents.jpg",
            solution: "/innowise-images/case-1/Case 1 - Pipeline Integrity Management System.jpg",
        },
        details: {
            challenge: [
                "A global oil and gas company manages thousands of kilometers of pipelines across remote and challenging terrains. It recognized that its longstanding surveillance methods were no longer adequate and cost-effective.",
                "The client needed a solution to monitor pipelines faster, more accurately, and cost-effectively, ensuring safety, security, and environmental protection.",
            ],
            challengeBullets: [
                "Costly and time-consuming monitoring",
                "Prone to missing critical issues",
                "Inefficient detection of both security threats and structural anomalies (corrosion, insulation defects, leaks)",
            ],
            solutionIntro:
                "Innowise implemented an AI-powered, ML-based pipeline monitoring system using high-resolution drone imagery.",
            solutionCapabilities: [
                "Comprehensive image acquisition across diverse environments, weather, altitudes, viewing angles, and seasons",
                "Advanced normalization and filtering with geometric and lighting adjustments, color correction, and noise reduction",
                "Detailed annotation and preprocessing for accurate tagging of people, vehicles, and construction equipment",
                "High-accuracy CNN-based detection models for reliable entity recognition under varying conditions",
                "Integrated anomaly-detection algorithms to identify corrosion, insulation defects, structural damage, and potential leaks",
                "Scalable cloud-based infrastructure for secure, continuous monitoring",
            ],
            impactBullets: [
                "Effective remote monitoring of pipelines in hard-to-access areas",
                "Reduced false positives by up to 30%",
                "Earlier detection of corrosion, insulation defects, and leaks",
                "Strengthened security and reduced vandalism/theft risk",
            ],
            conclusion:
                "The solution increased visibility, improved decisions, and reduced manual surveillance costs, delivering a safer and more efficient monitoring system.",
        },
    },
    {
        id: 2,
        title: "Intelligent SCADA twin",
        image: "/innowise-images/case-2/Case 2 - general picture (background).png",
        partnerLogo: "innowise",
        sectionImages: {
            problem: "/innowise-images/case-2/Case 2 - Map.png",
            solution: "/innowise-images/case-2/Case 2 - SCADA Dashboard.png",
            results: "/innowise-images/case-2/Case 2 - Workorders.png",
        },
        details: {
            challenge: [
                "An energy company was relying on an outdated SCADA system that could only react to issues after they occurred.",
                "The outdated interface, slow feature deployment, poor integration capabilities, and high maintenance demands created operational constraints.",
            ],
            challengeBullets: [
                "Delayed response to operational issues",
                "Difficulty implementing new features",
                "Increased maintenance costs and downtime",
                "Limited scalability and poor integration with modern tools",
            ],
            solutionIntro:
                "The company deployed an Intelligent SCADA twin to unify monitoring and management of electrical equipment and the distribution grid.",
            solutionCapabilities: [
                "Interactive dashboard with real-time and historical data",
                "Advanced analytics and forecasting for demand prediction and load optimization",
                "Predictive maintenance to identify and mitigate issues earlier",
                "Customizable views for critical areas and KPIs",
                "Simulation and emergency rehearsal for outages and severe weather",
                "Automated alerts and incident management",
                "Performance optimization tools to reduce losses and improve grid efficiency",
                "Comprehensive reporting across operations, maintenance, and efficiency",
            ],
            solutionAdditionalModules: [
                "Third-party integration for digital work orders and maintenance",
                "GIS geospatial visualization for assets, faults, and grid conditions",
            ],
            impactBullets: [
                "Shift from reactive to predictive operations (up to 30% more data-driven)",
                "Teams trained for more than 50 emergency scenarios",
                "Energy loss reduced by 10–15% with better load balancing",
            ],
            conclusion:
                "The Intelligent SCADA twin improved operational maturity, reliability, and scalability while enabling faster decision-making and long-term strategic value.",
        },
    },
    {
        id: 3,
        title: "VR training tool for wind turbine maintenance",
        image: "/innowise-images/case-3/Case 3 - General picture (background).png",
        partnerLogo: "innowise",
        sectionImages: {
            problem: "/innowise-images/case-3/Case 3 - Web side.png",
        },
        details: {
            challenge: [
                "In the energy sector, engineers work in high-risk environments involving live electrical equipment, high-voltage systems, and complex infrastructure.",
                "Traditional training methods cannot safely replicate real-world hazards, leaving limited hands-on experience.",
                "The client needed a safe, modern, immersive solution for critical procedure practice and emergency readiness without endangering people or facilities.",
            ],
            challengeBullets: [
                "Risk of costly accidents and equipment damage",
                "Operational downtime",
                "Reduced confidence in handling emergencies",
            ],
            solutionIntro:
                "Innowise implemented a scalable VR training system with interactive scenarios, assessments, and web-based analytics.",
            solutionCapabilities: [
                "Safe VR onboarding before entering realistic scenarios",
                "Interactive 3D environments including turbine areas, control rooms, workshops, and safety zones",
                "Hands-on task simulation with tools, machinery, and assessments",
                "Performance tracking with scores, feedback, and improvement insights",
                "Scalable architecture to add new training scenarios",
                "Web analytics for managers to track progress and completion rates",
            ],
            impactBullets: [
                "Employees learn tasks 40% faster",
                "Errors decrease by 25%",
                "Knowledge retention improves by 30%",
                "Training time reduced by 2×",
                "100% measurable task performance tracking",
            ],
            conclusion:
                "The VR solution improves safety, efficiency, and workforce readiness while reducing operational risk and supporting long-term productivity.",
        },
    },
    {
        id: 4,
        title: "Avoiding unplanned downtime in high-complexity turnarounds",
        image: "/kongsberg/KDI Case study 1 - Avoiding unplanned downtime in high- complexity turnarounds_page-0001.jpg",
        partnerLogo: "kongsberg",
        imageOnlyDetails: true,
    },
    {
        id: 16,
        title: "Operational safety and situational awareness in LNG operations",
        image: "/kongsberg/KDI Case study 2 - Operational safety and situational awareness in LNG operations_page-0001.jpg",
        partnerLogo: "kongsberg",
        imageOnlyDetails: true,
    },
    {
        id: 17,
        title: "Planning turnarounds with fewer on-site job walks",
        image: "/kongsberg/KDI Case study 3 - Planning turnarounds with fewer on-site job walks_page-0001.jpg",
        partnerLogo: "kongsberg",
        imageOnlyDetails: true,
    },
    {
        id: 18,
        title: "use case 1",
        image: "/sp3d/use case 1.JPG",
        partnerLogo: "sp3d",
        imageOnlyDetails: true,
    },
    {
        id: 19,
        title: "use case 2",
        image: "/sp3d/use case 2.JPG",
        partnerLogo: "sp3d",
        imageOnlyDetails: true,
    },
    {
        id: 20,
        title: "use case 3",
        image: "/sp3d/use case 3.JPG",
        partnerLogo: "sp3d",
        imageOnlyDetails: true,
    },
    {
        id: 21,
        title: "use case 4",
        image: "/sp3d/use case 4.JPG",
        partnerLogo: "sp3d",
        imageOnlyDetails: true,
    },
    {
        id: 5,
        title: "Enterprise resource planning optimization",
        image: "/images/ecosystemPerformance/1e616235b7fa94237b79a4345c16e501d9c9571b.png",
        partnerLogo: "orbital",
    },
    {
        id: 6,
        title: "Subsurface drilling data analytics",
        image: "/images/subsurface&drilling/0c8e090b98c8c49cb9692105363fdaefdc980b6a.png",
        partnerLogo: "ocyan",
    },
    {
        id: 8,
        title: "Downstream Operator Accelerates MRO Procurement",
        image: "/images/trade&commercial/0481f44a99695c08e64be2fb47b2da7f31e3ad7f.png",
        partnerLogo: "digital.enterprises",
        hideDetailImages: true,
        details: {
            challenge: [
                "A major downstream operator faced persistent delays in sourcing critical rotating-equipment spares.",
                "Fragmented ERPs across affiliates, inconsistent material descriptions, and zero real-time visibility of local supplier stock created major sourcing friction.",
            ],
            challengeBullets: [
                "Long sourcing cycles (23–27 days)",
                "High emergency procurement",
                "4+ months of inventory buffers",
                "Duplicate SKUs and costly expediting",
            ],
            solutionIntro:
                "The operator deployed ADAPT to synchronise procurement across its ecosystem.",
            solutionCapabilities: [
                "ERP-to-ERP Integration Mesh connecting SAP and D365",
                "AI Catalogue Harmonisation of 28,000+ items",
                "Real-time Supplier Inventory & Alternates from 24 pre-qualified vendors",
            ],
            solutionAdditionalModules: [
                "Dynamic spot-market RFQs",
                "Automated three-quote compliance",
                "Supplier performance analytics",
            ],
            impactBullets: [
                "35% faster sourcing cycle time",
                "2.8% reduction in spare-parts inventory",
                "QAR 9.4m in avoided costs through reduced emergency orders",
                "100+ manual steps eliminated via automation",
                "62% of spot purchases awarded to Qatari SMEs, supporting localisation targets",
            ],
            conclusion:
                "ADAPT unlocked immediate efficiency, transparency, and localisation impact across the operator’s MRO value chain.",
        },
    },
    {
        id: 10,
        title: "EPC Contractor Cuts Shutdown Overruns",
        image: "/images/Processing&refining/4fc0d498149934f2bb7f26013886c25602f91370.png",
        partnerLogo: "digital.enterprises",
        hideDetailImages: true,
        details: {
            challenge: [
                "A Tier-1 EPC contractor managing large turnarounds struggled with poor material visibility and coordination.",
            ],
            challengeBullets: [
                "Limited visibility on supplier stock",
                "Frequent BOM mismatches",
                "Manual procurement tracking across calls and WhatsApp",
                "Shutdown overruns of 6–10 days",
                "Operational delays, penalties, idle labour, and inflated project costs",
            ],
            solutionIntro:
                "The contractor implemented ADAPT as its unified shutdown materials command system.",
            solutionCapabilities: [
                "AI Matching of Engineering Specs ⇒ Real Supplier Stock",
                "Real-time availability, alternates, and lead-time insights from 18 specialised suppliers",
                "ERP Automation converting material requests into structured RFQs/POs via D365BC",
            ],
            solutionAdditionalModules: [
                "ETA tracking and delay alerts",
                "Long-lead item risk scoring",
                "Supplier capacity & workload visibility",
            ],
            impactBullets: [
                "4.3 days reduction in overall shutdown duration",
                "QAR 4.1m in cost savings from avoided penalties and reduced idle time",
                "Zero material-related stoppages",
                ">70% fewer engineering-procurement mismatches",
                "Full audit traceability for all sourcing decisions",
            ],
            conclusion:
                "ADAPT turned shutdown procurement into a predictable, data-driven, zero-excuses process.",
        },
    },
    {
        id: 11,
        title: "Qatari SME Scales Rapidly into the Energy Sector",
        image: "/images/supplychain&Indistrialservice/3ef197ad01fd371875824a6eb8a863a1ecb36d38.png",
        partnerLogo: "digital.enterprises",
        hideDetailImages: true,
        details: {
            challenge: [
                "A local SME distributor had strong warehouse capacity but struggled to access opportunities in the oil & gas sector.",
            ],
            challengeBullets: [
                "Poor catalogue quality",
                "Lack of ERP/digital readiness",
                "Long sales cycles (6–12 months)",
                "Limited visibility across buyer networks",
            ],
            solutionIntro:
                "Through ADAPT’s SME Digitalisation Programme, the supplier received a full digital upgrade.",
            solutionCapabilities: [
                "Rapid D365 Business Central Deployment in under 3 weeks",
                "AI-Driven Catalogue Transformation of 4,800 SKUs",
                "Direct Integration with ADAPT’s Buyer Network for real-time visibility and automated RFQ handling",
            ],
            solutionAdditionalModules: [
                "Performance analytics",
                "Stock-availability broadcasting",
                "Microsoft-grade procurement compliance",
            ],
            impactBullets: [
                "20x increase in visibility across buyer search queries",
                "First IOC contract secured in 27 days",
                "15% revenue growth in the first quarter",
                "40% reduction in manual workload through automation",
                "Full compliance with QatarEnergy digital procurement requirements",
            ],
            conclusion:
                "ADAPT enabled a local SME to become a digitally ready, procurement-grade supplier—closing the gap between capability and opportunity.",
        },
    },
    {
        id: 9,
        title: "Predictive maintenance for offshore platforms",
        image: "/images/Processing&refining/4fc0d498149934f2bb7f26013886c25602f91370.png",
        partnerLogo: "ocyan",
    },
    {
        id: 12,
        title: "LiftSentinel AI — Multiwell Gas-Lift Field Under Lift-Gas Constraints",
        image: "/images/subsurface&drilling/0c8e090b98c8c49cb9692105363fdaefdc980b6a.png",
        partnerLogo: "optvance",
        hideDetailImages: true,
        details: {
            challenge: [
                "An offshore operator manages 45 gas-lifted wells with limited lift-gas availability.",
                "Allocation decisions are manual, based on periodic well testing and static assumptions. Production fluctuates daily due to suboptimal lift-gas distribution and unstable wells.",
            ],
            challengeBullets: [
                "Constrained lift-gas supply",
                "Manual stop-testing disrupting production",
                "No real-time visibility of valve depth and injection efficiency",
                "Uneven well performance and deferred barrels",
            ],
            solutionIntro:
                "LiftSentinel integrates with SCADA and downhole sensing to:",
            solutionCapabilities: [
                "Infer real-time injection depth and gas distribution",
                "Predict optimal lift allocation under constraints",
                "Autonomously adjust choke settings",
                "Embed equipment health and MPC-based risk logic",
            ],
            impactBullets: [
                "+2–4% incremental oil production",
                "Elimination of manual stop testing",
                "Stabilized multiwell production",
                "Reduced compressor overloading",
                "Improved gas utilization efficiency",
            ],
        },
    },
    {
        id: 13,
        title: "FlowSentinel AI — Offshore Trunkline Experiencing Severe Slugging",
        image: "/images/Midstream&Transport/14e67d1edca1df0ba818cf92d1f359524881c846.png",
        partnerLogo: "optvance",
        hideDetailImages: true,
        details: {
            challenge: [
                "A 70 km multiphase offshore pipeline experiences intermittent severe slugging, causing downstream separator instability and periodic flaring.",
            ],
            challengeBullets: [
                "Reactive choke adjustments",
                "Separator trips and deferred production",
                "High vibration and mechanical stress",
                "No predictive flow stability modeling",
            ],
            solutionIntro:
                "FlowSentinel overlays digital twin and ML models to:",
            solutionCapabilities: [
                "Predict slug formation 30–60 minutes ahead",
                "Optimize choke and valve settings dynamically",
                "Stabilize operating envelope within safe constraints",
                "Integrate closed-loop control with APC",
            ],
            impactBullets: [
                "+3–5% throughput increase",
                "30% reduction in slug-related trips",
                "Reduced flaring and separator stress",
                "Improved pipeline integrity margins",
            ],
        },
    },
    {
        id: 14,
        title: "ChemSentinel AI — Central Processing Facility with High Chemical Spend",
        image: "/images/Processing&refining/13cd710994173304660d7828d6c91e824c918f42.png",
        partnerLogo: "optvance",
        hideDetailImages: true,
        details: {
            challenge: [
                "A brownfield GOSP injects demulsifiers and corrosion inhibitors using fixed setpoints.",
                "Chemical consumption is excessive due to conservative dosing.",
            ],
            challengeBullets: [
                "15–20% chemical overspend",
                "Separation instability during feed variability",
                "Manual laboratory-based adjustments",
                "Limited correlation between process dynamics and dosing rates",
            ],
            solutionIntro: "ChemSentinel enables:",
            solutionCapabilities: [
                "Real-time emulsion and separation monitoring",
                "AI-driven dosing optimization",
                "Dynamic adjustment based on feed composition",
                "Closed-loop chemical control integrated with DCS",
            ],
            impactBullets: [
                "10–20% chemical cost reduction",
                "Improved separation efficiency",
                "Reduced carryover and reprocessing",
                "Lower OPEX with enhanced asset protection",
            ],
        },
    },
    {
        id: 15,
        title: "PlantSentinel AI — Gas Processing Complex with Energy Constraints",
        image: "/images/ecosystemPerformance/1e616235b7fa94237b79a4345c16e501d9c9571b.png",
        partnerLogo: "optvance",
        hideDetailImages: true,
        details: {
            challenge: [
                "A multi-train gas processing facility operates near capacity but faces bottlenecks due to compressor limits and energy inefficiencies.",
            ],
            challengeBullets: [
                "Unit-level optimization without plant-wide coordination",
                "Energy overconsumption",
                "Throughput limited by hidden bottlenecks",
                "Limited predictive capability across interacting units",
            ],
            solutionIntro: "PlantSentinel implements:",
            solutionCapabilities: [
                "Plant-wide digital twin orchestration",
                "Hybrid physics-AI models",
                "Reinforcement learning optimization",
                "Cross-unit supervisory control coordination",
            ],
            impactBullets: [
                "+1–3% throughput increase",
                "8–15% energy efficiency improvement",
                "Reduced compressor stress",
                "Higher margin per processed unit",
                "Coordinated, autonomous plant optimization",
            ],
        },
    },
    {
        id: 22,
        title: "Explainable AI for Energy & Heavy-Industry Operations",
        image: "/images/digitalNervousSystem/0ca4ea1d74c587a7f241e0a9d18d36360f68f63c.png",
        partnerLogo: "applied.computing",
        hideDetailImages: true,
        details: {
            challenge: [
                "Frontline energy and heavy-industry teams require real-time operational and engineering decisions in environments where safety, reliability, and trust are non-negotiable.",
                "Conventional black-box analytics and delayed data workflows often limit transparency, response speed, and operator confidence.",
            ],
            challengeBullets: [
                "Need for full-fidelity high-frequency data without aggregation loss",
                "Need for explainable recommendations aligned with engineering reasoning",
                "Need for secure deployment in on-premise or hybrid environments",
                "Need to reduce false positives while maintaining trust in AI outputs",
            ],
            solutionIntro:
                "Orbital is deployed as a domain-specific AI platform for frontline operations, integrating physics principles, high-frequency process data, and explainable AI.",
            solutionCapabilities: [
                "Edge-native integration with DCS, process historians, and LIMS",
                "Hybrid Physics + AI architecture with continuously calibrated model coefficients",
                "Domain-trained industrial LLM using PFDs, P&IDs, SOPs, and operating logs",
                "Multi-agent validation across forecasting, physics, and reasoning models",
            ],
            impactBullets: [
                "Earlier detection of abnormal conditions",
                "Reduced reliance on delayed lab tests and manual analysis",
                "Improved operator confidence through explainable insights",
                "Faster and more consistent decision-making",
                "Lower financial, operational, and compliance risk",
            ],
            conclusion:
                "Orbital enables proactive, explainable, and trusted decision support for high-consequence industrial operations.",
        },
    },
    {
        id: 23,
        title: "Refining & Downstream Operations — Explainable Unit Optimization",
        image: "/images/Processing&refining/13cd710994173304660d7828d6c91e824c918f42.png",
        partnerLogo: "applied.computing",
        hideDetailImages: true,
        details: {
            challenge: [
                "Refining operations require continuous balancing of throughput, quality, energy use, and emissions under dynamic process conditions.",
            ],
            challengeBullets: [
                "Delayed lab feedback for key quality properties",
                "Limited early-warning context for process anomalies",
                "Need for real-time optimization across complex unit interactions",
            ],
            solutionIntro:
                "Orbital supports refining teams with explainable, real-time optimization and diagnostics.",
            solutionCapabilities: [
                "Real-time soft sensing of lab-grade properties",
                "Early detection and explanation of process anomalies",
                "Unit-level real-time optimisation for throughput, quality, energy, and emissions",
                "Support for FCC, hydrotreating, and CCR reforming operations",
            ],
            impactBullets: [
                "Yield and throughput improvement opportunities",
                "Energy and emissions intensity reduction",
                "Faster engineering and operator response cycles",
                "More consistent operating decisions under variability",
            ],
        },
    },
    {
        id: 24,
        title: "Offshore, Upstream & Utilities — Physics-Informed Operational Reliability",
        image: "/images/Midstream&Transport/14e67d1edca1df0ba818cf92d1f359524881c846.png",
        partnerLogo: "applied.computing",
        hideDetailImages: true,
        details: {
            challenge: [
                "Offshore, upstream, and integrated utility systems face uncertainty, meter drift, equipment constraints, and cross-team knowledge gaps that can degrade reliability.",
            ],
            challengeBullets: [
                "Production allocation and reconciliation complexity",
                "Drift and uncertainty in metering",
                "Need for early detection of flow-regime changes and operating constraints",
                "Need for auditable and explainable decisions across stakeholders",
            ],
            solutionIntro:
                "Orbital provides physics-informed monitoring and explainable diagnostics across production and utilities operations.",
            solutionCapabilities: [
                "Physics-informed production allocation and reconciliation",
                "Meter drift detection and uncertainty reduction",
                "Continuous asset performance monitoring and predictive diagnostics",
                "Optimisation against economic or emissions objectives with explainable audit trails",
            ],
            impactBullets: [
                "Improved operational reliability and situational awareness",
                "Reduced manual analysis burden and faster corrective action",
                "Knowledge capture across operations, engineering, and reliability teams",
                "Lower OPEX exposure and reduced compliance risk",
            ],
        },
    },
];
