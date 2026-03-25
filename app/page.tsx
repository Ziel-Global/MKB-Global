import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import WhyMBKSection from "@/components/WhyMBKSection";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col w-full bg-white relative">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col relative w-full items-center">
        <Header />
      </div>
      <main className="w-full flex-1">
        <Hero />
        <div
          id="mobile-snap-wrapper"
          className="max-md:h-[100dvh] max-md:overflow-y-auto max-md:[scroll-snap-type:y_mandatory] max-md:overscroll-behavior-contain max-md:bg-white"
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
        >
          <FeaturesSection />
          <WhyMBKSection />
        </div>
      </main>
    </div>
  );
}
