import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col w-full bg-white relative">
            {/* Header */}
            <div className="w-full max-w-[1440px] mx-auto flex flex-col relative items-center">
                <Header />
            </div>

            <main className="w-full flex-1">
                {/* ── Services Hero ── */}
                <ServicesHero />

                {/* ── Service Categories ── */}
                <ServiceCategories />

                {/* ── CTA / Work With Us ── */}
                <ServicesCTA />
            </main>
        </div>
    );
}
