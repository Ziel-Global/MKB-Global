import Header from "@/components/Header";
import OurStory from "@/components/aboutUs/OurStory";
import VisionMissionValues from "@/components/aboutUs/VisionMissionValues";
import CoreValues from "@/components/aboutUs/CoreValues";
import UniqueApproach from "@/components/aboutUs/UniqueApproach";
import ContactForm from "@/components/aboutUs/ContactForm";
import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    title: "Subsurface & Drilling",
    description:
      "AI-driven reservoir intelligence and autonomous drilling solutions that optimise recovery and reduce well costs.",
    icon: "/images/subsurface&drilling/icon.png",
  },
  {
    title: "Processing & Refining",
    description:
      "Digital twin and advanced process control capabilities that maximise plant yield and operational reliability.",
    icon: "/images/Processing&refining/icon.png",
  },
  {
    title: "Midstream & Transport",
    description:
      "Integrated pipeline and logistics orchestration platforms that eliminate bottlenecks across the value chain.",
    icon: "/images/Midstream&Transport/icon.png",
  },
  {
    title: "Trade & Commercial",
    description:
      "Real-time market analytics and automated trading execution tools tuned for energy commodity markets.",
    icon: "/images/trade&commercial/icon.png",
  },
  {
    title: "Supply Chain & Industrial Services",
    description:
      "Predictive procurement and vendor ecosystem management designed for complex energy supply networks.",
    icon: "/images/supplychain&Indistrialservice/icon.png",
  },
  {
    title: "Digital Nervous System",
    description:
      "The connective intelligence layer — data fabric, AI orchestration, and integration infrastructure — that unifies every division.",
    icon: "/images/digitalNervousSystem/icon.png",
  },
];

const pillars = [
  {
    label: "Investment",
    description:
      "We deploy capital with conviction into technologies and companies that are ready to scale within energy ecosystems.",
  },
  {
    label: "Operations",
    description:
      "We embed operational expertise directly into delivery, ensuring technology translates into measurable field outcomes.",
  },
  {
    label: "Innovation",
    description:
      "We co-develop next-generation solutions with our partners, turning frontier research into production-ready capabilities.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col w-full bg-white relative">
      {/* Header */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col relative items-center">
        <Header />
      </div>

      <main className="w-full flex-1">
        {/* ── Hero ── */}
        <section className="w-full min-h-screen bg-[#f0eef8] flex items-center pt-24 pb-16 px-6 md:px-16 lg:px-24 overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase">
                About MBK
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight">
                Built to Empower Digital Transformation
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
                MBK Global exists where ambition meets action. MBK unites
                investment, operations, and innovation to create sustainable
                digital transformation at scale.
              </p>
              <div>
                <Link
                  href="#divisions"
                  className="inline-block bg-[#6D28D9] hover:bg-purple-800 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
                >
                  Discover Our Divisions
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-us/aboutus.png"
                  alt="MBK Global – engineer at industrial facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <OurStory />

        {/* ── Vision / Mission / Values ── */}
        <VisionMissionValues />

        {/* ── Core Values ── */}
        <CoreValues />

        {/* ── Unique Approach ── */}
        <UniqueApproach />

        {/* ── Contact Form ── */}
        <ContactForm />


      </main>
    </div>
  );
}
