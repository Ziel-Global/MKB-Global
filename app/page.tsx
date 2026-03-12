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
        <FeaturesSection />
        <WhyMBKSection />
      </main>
    </div>
  );
}
