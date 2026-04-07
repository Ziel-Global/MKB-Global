"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: "H.E. Sheikh Mansoor Bin Khalifa Al-Thani",
    role: "Chairman",
    image: "/our-team-images/H.E. Sheikh Mansoor Bin Khalifa Al-Thani.jpg",
    bio: [
      "H.E. Sheikh Mansoor Bin Khalifa Al-Thani is a visionary Qatari leader, entrepreneur, and investor with more than 30 years of experience driving innovation, strategic development, and venture capital across global markets. A distinguished member of the Qatari ruling family, he has consistently championed technology-enabled transformation and entrepreneurship in alignment with Qatar National Vision 2030.",
      "Sheikh Mansoor began his career leading the IT Department for the Supreme Council of Family Affairs, where he pioneered advanced enterprise architecture and digital infrastructure that was more than a decade ahead of its time. His early work laid the foundation for Qatar’s digital transformation journey, embedding automation, software innovation, and forward-looking governance models into national institutions.",
      "As Founder and Chairman of MBK Global, Sheikh Mansoor provides overarching vision and strategic leadership, ensuring the organization’s mission is rooted in innovation, execution excellence, and global connectivity. Under his guidance, MBK Global builds ecosystems that accelerate entrepreneurship, localize industrial capability, and translate emerging technologies into scalable, real-world solutions for Qatar’s energy and industrial sectors.",
      "Beyond his corporate leadership, Sheikh Mansoor is a trusted mentor and adviser to entrepreneurs and innovators worldwide. He is deeply committed to “innovating innovation” fostering platforms that empower startups, enable access to global markets, and create durable value chains that strengthen Qatar’s role in the global digital economy.",
      "Sheikh Mansoor’s leadership at MBK Global anchors the organization’s role as a catalyst for industrial modernization, digital transformation, and sustainable growth, ensuring that innovation is not only envisioned but executed with measurable impact."
    ]
  },
  {
    name: "Nasser Jeham Al-Kuwari",
    role: "CEO",
    image: "/our-team-images/Nasser Al-Kuwari.jpg",
    bio: [
      "Nasser Jeham Al-Kuwari is a distinguished oil and gas executive with more than three decades of experience spanning upstream operations, petrochemicals, and large-scale industrial leadership within Qatar’s energy sector. Over the course of his career, he has played a pivotal role in shaping some of the country’s most strategically important industrial assets, bringing together operational excellence, long-term vision, and national development priorities.",
      "Nasser began his career at Qatar Petroleum and was the Director of the Dukhan field with several hundred of wells before going on to serve as Chief Executive Officer of QChem and Chief Executive Officer of QAFAC, where he led complex petrochemical production environments including methanol and MTBE facilities. Across these roles, he was recognized for driving industrial expansion, strengthening asset performance, and embedding technology-enabled transformation across operations closely linked to Qatar’s LNG value chain.",
      "As CEO of MBK Global, Nasser provides strategic direction and executive oversight, ensuring the company’s growth, partnerships, and technology deployments are aligned with national objectives and industrial realities. His leadership anchors MBK Global’s mission to build durable, execution ready ecosystems that strengthen Qatar’s energy sector, localize capability, and translate innovation into measurable, long-term value.",
      "Outside of his professional commitments, Nasser is deeply committed to mentorship and national capability building and remains a strong advocate for disciplined leadership and sustainable industrial growth."
    ]
  },
  {
    name: "Adil Mohammad, FCIPS",
    role: "Deputy CEO",
    image: "/our-team-images/Adil Taj Mohammad.jpg",
    bio: [
      "Adil Mohammad, FCIPS, is a globally respected supply chain and transformation leader with more than 25 years of experience across the energy, industrial, and defense sectors. His career has been defined by leading large-scale transformation programs, modernizing complex supply chains, and embedding advanced digital and governance models into mission-critical operations.",
      "Adil has overseen multibillion dollar supply chain portfolios and enterprise procurement functions, delivering step change improvements through AI, analytics, workflow automation, and operating model redesign. A Fellow of the Chartered Institute of Procurement and Supply (CIPS) and a member of its Board of Trustees, he is widely recognized for advancing professional standards and capability development across global supply chain communities. Adil has worked as GM for Qatar Shell’s Supply Chain function, managing 300+ staff and a spend > 1USD Billion per annum.",
      "As Deputy CEO of MBK Global, Adil drives corporate strategy, operating model design, and the integration of digital, manufacturing, and supply chain capabilities across MBK’s ecosystem. He plays a central role in shaping how MBK Global orchestrates partners, platforms, and joint ventures ensuring that innovation is structured, scalable, and grounded in execution excellence.",
      "Adil is deeply passionate about mentoring future leaders, advancing professional excellence, and building resilient systems that enable organizations to operate smarter, faster, and with greater strategic clarity."
    ]
  },
  {
    name: "Nick Leissner ChPP",
    role: "CFO",
    image: "/our-team-images/Nick Leissner.jpg",
    bio: [
      "Nick Leissner is a senior finance, commercial, and project controls professional with extensive experience delivering value in complex, high pressure environments across Europe and the Middle East. His background spans oil and gas, consultancy, financial services, and large industrial portfolios, with a strong focus on governance, capital discipline, and execution certainty.",
      "Nick has played key roles in major turnarounds and large project portfolios, including senior project controls and commercial leadership positions with Shell, where he supported multibillion dollar capital programs in some of the most demanding project, turnaround and maintenance environments in the Middle East. His experience bridges project controls, finance, contracts and portfolio management, allowing him to operate fluently at the intersection of strategy and execution.",
      "As Chief Financial Officer of MBK Global, Nick is responsible for financial stewardship, governance, ensuring that MBK’s growth is underpinned by disciplined financial controls, scalable financial systems as also the attainment of VC and R&D funds. His leadership enables MBK Global’s joint ventures and partners to move at speed while maintaining the rigor required for sustainable, long-term value creation.",
      "Outside of work, Nick remains actively connected to the international business community and enjoys travel and sports, including sailing, wakeboarding, diving, cycling, and boxing."
    ]
  },
  {
    name: "Jitse Munten, FCIPS",
    role: "COO",
    image: "/our-team-images/Jitse Munten.jpg",
    bio: [
      "Jitse Munten, FCIPS, is a seasoned supply chain expert with more than 17 years of oil and gas experience, including leading MRO supply chains for Iraq’s largest commercial company. His expertise spans operations and maintenance of gas and GTL plants, complemented by deep hands-on experience in upstream and drilling operations across Iraq, Nigeria, Qatar, and China.",
      "Jitse’s supply chain oil and gas career has taken him across Pakistan, Kazakhstan, Iraq, Brazil, Germany, Norway, Qatar, Nigeria, Egypt and beyond. This global exposure has shaped his ability to localize supply chains, navigate complex industrial ecosystems with cultural and operational fluency. During his tenure Jitse initiated and achieved several hundreds of millions of supply chain localization projects.",
      "In parallel, Jitse spent over a decade as CEO and owner of a marine charter company, where he ran marine operations and oversaw maintenance, repair, shipyard workovers, and the construction of crew and hotel vessels delivering hundreds of thousands of crew and hotel nights",
      "This rare combination of oil and gas supply chain leadership, marine operational execution and commercial acumen as a CEO as also the innovations he worked on in both energy and marine industry underpins MBK Global’s mission to transform supply chains, embed industrial integrity, and commercialize IP for Qatar’s energy operations.",
      "As COO of MBK Global, Jitse leads the Shared Service Center overseeing HR, Legal, Compliance, IT, and Real Estate, while also supporting strategy development and the execution of operational sales. These services enable MBK Global’s joint ventures to focus on technology deployment and commercial growth. His leadership ensures MBK Global’s innovation is relevant, nationally strategic, and industrially validated viewed through a holistic supply chain lens.",
      "Jitse is a Fellow at the Chartered Institute for Procurement and Supply (CIPS) and acts as the EVP leading the Qatar Committee of CIPS and holds strong ties into the Academic industry in Qatar and beyond for the same.",
      "In his spare time, Jitse enjoys playing rugby, spending time with his dog, and American muscle cars."
    ]
  },
  {
    name: "Muhammad Ibrahim",
    role: "CTO Upstream",
    image: "/our-team-images/Dr. Muhammad Ibrahim.jpg",
    bio: [
      "Muhammad Ibrahim is an upstream technology specialist with nearly 30 years of experience spanning field development planning, reservoir management, asset optimization, and digital oilfield implementation. His career bridges subsurface engineering, technology integration, and operational performance across producing and late life assets including of being the middle east Upstream Technology Transformation Director at SLB.",
      "Muhammad has advised operators on integrated field development strategies, brownfield life extension, and the deployment of digital technologies that enhance recovery, reliability, and decision quality. His ability to connect subsurface understanding with digital workflows allows him to translate advanced technology into practical, execution ready solutions.",
      "As CTO Upstream at MBK Global, Muhammad provides technical leadership across upstream digitalization and technology integration. He works closely with partners and operators to ensure that MBK Global’s platforms, architectures, and solutions are industrially sound, operationally adoptable, and capable of scaling across complex asset portfolios.",
      "Outside of his professional role, Muhammad is deeply interested in knowledge sharing and developing the next generation of technical leaders within the energy sector."
    ]
  },
  {
    name: "Calum Johnson",
    role: "Team Member",
    image: "/our-team-images/Calum Johnson.jpg",
  },
  {
    name: "James Mbuvi",
    role: "Team Member",
    image: "/our-team-images/James Mbuvi.jpg",
  },
];

const OurTeam: FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  return (
    <>
      <section className="w-full px-6 py-12 md:py-16 lg:px-24 bg-white relative">
        <div className="w-full max-w-[75rem] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight">
              Our Team
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={`${member.name}-${member.image}`}
                className={`group relative rounded-2xl overflow-hidden min-h-[23.75rem] md:min-h-[28.75rem] lg:min-h-[35rem] ${member.bio ? "cursor-pointer" : ""
                  }`}
                onClick={() => member.bio && setSelectedMember(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  priority={index < 3}
                />

                {/* Darker gradient overlay on hover for better readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#2E0E68]/90 via-[#2E0E68]/40 to-transparent transition-opacity duration-300 ${member.bio ? "opacity-70 group-hover:opacity-95" : "opacity-70"
                  }`} />

                <div className={`absolute inset-x-0 bottom-0 p-6 z-10 transition-transform duration-300 ${member.bio ? "translate-y-6 group-hover:translate-y-0" : ""
                  }`}>
                  <h3 className="text-white text-3xl md:text-2xl lg:text-3xl font-extrabold leading-tight drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-base mt-2 font-medium">{member.role}</p>

                  {member.bio && (
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mt-4">
                      <p className="text-white/80 text-sm line-clamp-3 mb-3">
                        {member.bio[0]}
                      </p>
                      <span className="inline-block text-white font-bold text-sm border-b-2 border-white/40 pb-0.5 group-hover:border-white transition-colors">
                        Read More
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 md:bg-black/5 md:hover:bg-black/10 backdrop-blur-md rounded-full transition-colors text-black"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Left Image Section */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 right-16 md:hidden">
                <h3 className="text-white text-2xl font-extrabold leading-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-white/90 text-sm mt-1">{selectedMember.role}</p>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 custom-scrollbar">
              <div className="hidden md:block mb-6">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#2E0E68] leading-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-lg text-gray-600 mt-2 font-medium">{selectedMember.role}</p>
                <div className="w-12 h-1 bg-[#2E0E68] mt-4 rounded-full" />
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                {selectedMember.bio?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurTeam;