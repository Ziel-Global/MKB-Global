import Header from "@/components/Header";
import CaseStudiesHero from "@/components/caseStudies/CaseStudiesHero";
import CaseStudiesContent from "@/components/caseStudies/CaseStudiesContent";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen flex flex-col pt-0 bg-white font-sans text-gray-900 selection:bg-[#8B3DFF] selection:text-white">
            <Header />

            <main className="w-full flex-1">
                {/* ── Case Studies Hero ── */}
                <CaseStudiesHero />

                {/* ── Static clickable logos + filtered grid ── */}
                <CaseStudiesContent />

                {/* ── Case Studies CTA ── */}
                <ServicesCTA />

            </main>

        </div>
    );
}
