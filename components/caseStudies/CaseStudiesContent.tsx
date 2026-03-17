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

            <CaseStudiesGrid partnerFilter={activePartner} />
        </>
    );
}