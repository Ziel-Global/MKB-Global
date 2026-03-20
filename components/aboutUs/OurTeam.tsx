"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    role: "COO",
    image: "/our-team-images/Dr. Muhammad Ibrahim.jpg",
  },
  {
    name: "Nick Leissner",
    role: "CFO",
    image: "/our-team-images/Nick Leissner.jpg",
  },
   {
    name: "Jitse Munten",
    role: "Chief Partnerships & Sales Officer",
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

const teamGroups = teamMembers.reduce<typeof teamMembers[]>((groups, member, index) => {
  const groupIndex = Math.floor(index / 3);
  if (!groups[groupIndex]) {
    groups[groupIndex] = [];
  }
  groups[groupIndex].push(member);
  return groups;
}, []);

export default function OurTeam() {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isMobile) {
      groupRefs.current.forEach((group) => {
        if (group) {
          gsap.set(group, { clearProps: "all" });
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const groups = groupRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!groups.length) return;

      gsap.set(groups, {
        yPercent: 115,
        autoAlpha: 1,
        force3D: true,
        willChange: "transform, opacity",
      });
      gsap.set(groups[0], { yPercent: 0, autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          pin: stickyRef.current,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          snap:
            groups.length > 1
              ? {
                  snapTo: 1 / (groups.length - 1),
                  duration: { min: 0.18, max: 0.35 },
                  ease: "power2.out",
                }
              : undefined,
        },
      });

      for (let i = 1; i < groups.length; i += 1) {
        tl.to(
          groups[i - 1],
          {
            yPercent: -115,
            autoAlpha: 0.96,
            duration: 1,
            ease: "power2.inOut",
            force3D: true,
          },
          ">"
        ).to(
          groups[i],
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut",
            force3D: true,
          },
          "<"
        );
      }
    });

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="w-full px-6 py-12 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight">
              Our Team
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 gap-6">
            {teamMembers.map((member) => (
              <div
                key={`${member.name}-${member.image}`}
                className="relative rounded-2xl overflow-hidden min-h-[380px]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-[center_18%]"
                />

                <div className="absolute inset-0 bg-[#2E0E68]/55" />

                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
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
  }

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: `${Math.max(220, teamGroups.length * 120)}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 w-full flex items-center justify-center py-16 px-6 md:px-16 lg:px-24 bg-white overflow-hidden"
        style={{ height: "100vh" }}
      >
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] leading-tight">
              Our Team
            </h2>
          </div>

          <div className="relative w-full min-h-[560px]">
            {teamGroups.map((group, groupIndex) => (
              <div
                key={`team-group-${groupIndex}`}
                ref={(el) => {
                  groupRefs.current[groupIndex] = el;
                }}
                className="absolute inset-0 w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-start will-change-transform"
                style={{ zIndex: groupIndex + 1 }}
              >
                {group.map((member, memberIndex) => (
                  <div
                    key={`${member.name}-${member.image}-${groupIndex}-${memberIndex}`}
                    className="relative rounded-2xl overflow-hidden min-h-[560px]"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      priority={groupIndex === 0 && memberIndex < 3}
                    />

                    <div className="absolute inset-0 bg-[#2E0E68]/55" />

                    <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                      <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight max-w-[92%]">
                        {member.name}
                      </h3>
                      <p className="text-white text-base mt-2">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}