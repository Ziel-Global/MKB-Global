import { FC } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "H.E. Sheikh Mansoor Bin Khalifa Al-Thani",
    role: "Chairman",
    image: "/our-team-images/H.E. Sheikh Mansoor Bin Khalifa Al-Thani.jpg",
  },
  {
    name: "Nasser Al-Kuwari",
    role: "CEO",
    image: "/our-team-images/Nasser Al-Kuwari.jpg",
  },
  {
    name: "Adil Taj Mohammad",
    role: "Deputy CEO and Chief Strategy",
    image: "/our-team-images/Adil Taj Mohammad.jpg",
  },
  {
    name: "Dr. Muhammad Ibrahim",
    role: "CTO Upstream",
    image: "/our-team-images/Dr. Muhammad Ibrahim.jpg",
  },
  {
    name: "Nick Leissner",
    role: "CFO",
    image: "/our-team-images/Nick Leissner.jpg",
  },
  {
    name: "Jitse Munten",
    role: "COO",
    image: "/our-team-images/Jitse Munten.jpg",
  },
  {
    name: "Calum Johnson",
    role: "Team Member",
    image: "/our-team-images/Calum Johnson.jpg",
  },
  {
    name: "Majdi",
    role: "Team Member",
    image: "/our-team-images/Majdi.jpg",
  },
  {
    name: "Olivier Mathey",
    role: "Team Member",
    image: "/our-team-images/Olivier Mathey.jpg",
  },
  {
    name: "Paul McGreary",
    role: "Team Member",
    image: "/our-team-images/Paul McGreary.jpg",
  },
  {
    name: "James Mbuvi",
    role: "Team Member",
    image: "/our-team-images/James Mbuvi.jpg",
  },
];

const OurTeam: FC = () => {
  return (
    <section className="w-full px-6 py-12 md:py-16 lg:px-24 bg-white relative">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight">
            Our Team
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${member.image}`}
              className="relative rounded-2xl overflow-hidden min-h-[380px] md:min-h-[460px] lg:min-h-[560px]"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                priority={index < 3}
              />

              <div className="absolute inset-0 bg-[#2E0E68]/55" />

              <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                <h3 className="text-white text-3xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
                  {member.name}
                </h3>
                <p className="text-white text-base mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;