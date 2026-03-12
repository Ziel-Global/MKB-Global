import Header from "@/components/Header";
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
                  src="/about-us/hero.jpg"
                  alt="MBK Global – engineer at industrial facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
          <div className="w-full max-w-[1200px] mx-auto">
            <span className="text-sm font-semibold text-[#6D28D9] tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1e1e24] leading-tight max-w-2xl">
              One company. Three integrated pillars.
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl leading-relaxed">
              MBK Global is built around three mutually reinforcing forces that
              transform how energy companies operate, compete, and grow.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="bg-[#f8f6ff] rounded-2xl p-8 flex flex-col gap-4 border border-purple-100"
                >
                  <div className="w-10 h-10 rounded-full bg-[#6D28D9] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {pillar.label[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2E0E68]">
                    {pillar.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divisions ── */}
        <section
          id="divisions"
          className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#f0eef8]"
        >
          <div className="w-full max-w-[1200px] mx-auto">
            <span className="text-sm font-semibold text-[#6D28D9] tracking-widest uppercase">
              Our Divisions
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1e1e24] leading-tight max-w-2xl">
              Six divisions. One integrated energy value chain.
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl leading-relaxed">
              Each division is a specialist in its domain, purpose-built to
              interlock with the others — eliminating fragmentation and
              delivering coherent digital transformation at every layer of the
              energy stack.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((div) => (
                <div
                  key={div.title}
                  className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow border border-purple-50"
                >
                  <h3 className="text-lg font-bold text-[#2E0E68]">
                    {div.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {div.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#2E0E68]">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center gap-6">
            <span className="text-sm font-semibold text-purple-300 tracking-widest uppercase">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              Transforming the energy value chain — from reactive to
              intelligent.
            </h2>
            <p className="text-purple-200 max-w-2xl leading-relaxed text-base md:text-lg">
              We help Qatar's and the region's energy ecosystem transition from
              reactive operations to intelligent, autonomous, integrated value
              chains — safely, reliably, and at speed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link
                href="/work"
                className="bg-[#6D28D9] hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
              >
                Work With Us
              </Link>
              <Link
                href="/partner"
                className="bg-white hover:bg-gray-100 text-[#2E0E68] font-semibold px-8 py-3 rounded-full transition-colors text-sm"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
