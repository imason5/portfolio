"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsIcons } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type Skill = keyof typeof skillsIcons;

const generateSkillUrl = (skill: Skill): string | null => {
  return skillsIcons[skill]
    ? `https://skillicons.dev/icons?i=${skillsIcons[skill]}`
    : null;
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {Object.keys(skillsIcons).map((skill, index) => {
          const skillUrl = generateSkillUrl(skill as Skill);
          return (
            <li
              className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-xl border border-black/[0.1] bg-white "
              key={index}
            >
              {skillUrl && (
                <img
                  src={skillUrl}
                  alt={skill}
                  title={skill}
                  className="h-12 w-12"
                />
              )}
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
