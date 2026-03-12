import Header from "@/components/Header";
import CaseStudiesHero from "@/components/caseStudies/CaseStudiesHero";
import LogoTicker from "@/components/LogoTicker";
import CaseStudiesGrid from "@/components/caseStudies/CaseStudiesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen flex flex-col pt-0 bg-white font-sans text-gray-900 selection:bg-[#8B3DFF] selection:text-white">
            <Header />

            <main className="w-full flex-1">
                {/* ── Case Studies Hero ── */}
                <CaseStudiesHero />

                {/* ── Logo Ticker ── */}
                <div className="py-12 border-b border-gray-100">
                    <LogoTicker />
                </div>

                {/* ── Case Studies Grid ── */}
                <CaseStudiesGrid />

                {/* ── Case Studies CTA ── */}
                <ServicesCTA />

            </main>

        </div>
    );
}
