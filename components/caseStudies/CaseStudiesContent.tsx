"use client";

import { useState } from "react";
import CaseStudiesLogoSelector, { caseStudyPartnerLogos } from "@/components/caseStudies/CaseStudiesLogoSelector";
import CaseStudiesGrid from "@/components/caseStudies/CaseStudiesGrid";

export default function CaseStudiesContent() {
    const [activePartner, setActivePartner] = useState<string>(caseStudyPartnerLogos[0].partnerKey);

    return (
        <>
            <div className="pt-12 pb-6 border-b border-gray-100">
                <CaseStudiesLogoSelector
                    activePartner={activePartner}
                    onSelectPartner={setActivePartner}
                />
            </div>

            {activePartner === "innowise" && (
                <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[#4b5563] text-[0.95rem] md:text-[1.05rem] leading-relaxed font-medium">
                        Innowise is an international full-cycle software development and IT services company providing end-to-end digital solutions for enterprises and technology-driven organizations. Founded in 2007, the company delivers custom software development, IT consulting, system modernization, cloud engineering, and data-driven solutions across a wide range of industries. Innowise supports complex digital transformation initiatives through scalable delivery models and global engineering teams.
                    </p>
                </div>
            )}

            {activePartner === "digital.enterprises" && (
                <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[#4b5563] text-[0.95rem] md:text-[1.05rem] leading-relaxed font-medium">
                        Digital Enterprises is a digital solutions and transformation company delivering software, data, and technology services to organizations seeking to modernize operations and business models. The company supports enterprise digital transformation initiatives through custom software development, platform engineering, and data-driven solutions, helping organizations improve efficiency, scalability, and digital capability. Building on this foundation, ADAPT is Digital Enterprises&apos; flagship product designed specifically to optimize MRO processes. ADAPT enables organizations to streamline spare parts management, reduce downtime through predictive maintenance, and improve asset lifecycle visibility. By integrating data from across supply chains and operations, ADAPT helps enterprises cut excess inventory, accelerate work order execution, and ensure critical equipment availability. With ADAPT, companies gain a platform that not only modernizes digital workflows but also delivers measurable improvements in maintenance efficiency, cost control, and operational resilience — the core drivers of MRO excellence.
                    </p>
                </div>
            )}

            {activePartner === "kongsberg" && (
                <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[#4b5563] text-[0.95rem] md:text-[1.05rem] leading-relaxed font-medium">
                        Kongsberg Digital is a Norwegian industrial software company and part of the KONGSBERG Group, a 211-year-old sovereign-backed technology organisation. Through its digital twin platform, Kognitwin, it enables user-centric digital transformation in heavy-asset industries by unifying data, systems, and processes into one operational workflow. By creating a single source of truth across the organisation, it aligns teams, improves safety, increases production performance, and drives measurable operational gains at scale.
                    </p>
                </div>
            )}

            {activePartner === "sp3d" && (
                <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[#4b5563] text-[0.95rem] md:text-[1.05rem] leading-relaxed font-medium">
                        Spare Parts 3D (SP3D) is a deeptech software company transforming how industrial spare parts are managed and produced. Founded in 2015, SP3D digitizes spare parts supply chains through additive manufacturing, enabling manufacturers to identify, digitize, and produce parts on demand using 3D printing. By removing key bottlenecks in 3D data creation, digital inventory management, and additive manufacturing adoption, SP3D helps industrial organizations reduce inventory, shorten lead times, and operate more sustainably. Operating through joint ventures in key regions, SP3D works closely with local industrial ecosystems while scaling its technology globally—enabling faster and smarter industrial digitalization.
                    </p>
                </div>
            )}

            {activePartner === "optvance" && (
                <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[#4b5563] text-[0.95rem] md:text-[1.05rem] leading-relaxed font-medium">
                        Optvance.ai is an advanced industrial AI company delivering physics-informed, domain-specific platforms that transform how complex Oil & Gas assets are operated and optimized. Its Sentinel AI Portfolio provides a modular, closed-loop control stack that integrates seamlessly with existing SCADA, DCS, and APC systems, enabling real-time optimization without replacing legacy infrastructure. Across upstream, midstream, processing, and energy transition operations, Sentinel AI drives measurable production uplift, flow stability, integrity management, chemical efficiency, and emissions reduction. Optvance does not build dashboards, it engineers autonomous performance that converts industrial complexity into sustainable competitive advantage.
                    </p>
                </div>
            )}

            {activePartner === "applied.computing" && (
                <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-[#4b5563] text-[0.95rem] md:text-[1.05rem] leading-relaxed font-medium">
                        Applied Computing is an industrial AI company delivering real-time operational intelligence for the energy sector. The company develops advanced AI and physics-based models that utilize 100% of real-time operational data to optimize performance, reduce false alarms, and improve predictive accuracy in complex industrial environments such as refineries, LNG facilities, and petrochemical plants. Its flagship platform enables faster, safer, and more reliable operational decision-making.
                    </p>
                </div>
            )}

            <CaseStudiesGrid partnerFilter={activePartner} />
        </>
    );
}