"use client";

import { useState } from "react";
import CaseStudiesLogoSelector, { caseStudyPartnerLogos } from "@/components/caseStudies/CaseStudiesLogoSelector";
import CaseStudiesGrid from "@/components/caseStudies/CaseStudiesGrid";

export default function CaseStudiesContent() {
    const [activePartner, setActivePartner] = useState<string>(caseStudyPartnerLogos[0].partnerKey);

    return (
        <>
            <div className="py-12 border-b border-gray-100">
                <CaseStudiesLogoSelector
                    activePartner={activePartner}
                    onSelectPartner={setActivePartner}
                />
            </div>

            <CaseStudiesGrid partnerFilter={activePartner} />
        </>
    );
}