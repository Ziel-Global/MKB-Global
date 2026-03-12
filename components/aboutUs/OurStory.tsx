export default function OurStory() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto relative">

        {/* Card — text only, right padding reserves space so text doesn't go under video */}
        <div className="bg-[#f0eef8] rounded-3xl p-10 lg:p-12 lg:pr-[52%]">
          <span className="text-sm font-bold text-[#1e1e24] tracking-wide">
            Our Story
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#2E0E68] leading-tight">
            Where Vision Meets Execution
          </h2>
          <p className="mt-5 text-[#3d3d50] text-sm md:text-base leading-relaxed">
            MBK Global was born from a simple truth: Transformation doesn&apos;t
            happen through ideas alone, it needs execution, structure, and
            long-term vision.
          </p>
          <p className="mt-4 text-[#3d3d50] text-sm md:text-base leading-relaxed">
            Our founders built MBK to bridge the critical gap between ambition
            and delivery. Today, we operate as an ecosystem that accelerates
            the digital evolution of industries, governments, and communities
            across the region and beyond.
          </p>
        </div>

        {/* Video — overflows card on top, right, and bottom */}
        <div
          className="hidden lg:block absolute rounded-2xl overflow-hidden shadow-xl"
          style={{
            right: "-3rem",
            top: "1.5rem",
            bottom: "1.5rem",
            width: "52%",
          }}
        >
          <video
            src="/about-us/about-us.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden mt-6 w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <video
            src="/about-us/about-us.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}


