import React from "react";
import SectionHeading from "./section-heading";
import { skillsIcons } from "@/lib/data";
import Image from "next/image";

type Skill = keyof typeof skillsIcons;

const generateSkillUrl = (skill: Skill) => {
  return `https://skillicons.dev/icons?i=${skillsIcons[skill]}`;
};

export default function Skills() {
  return (
    <section>
      <SectionHeading>My Skills</SectionHeading>
      <ul>
        {Object.keys(skillsIcons).map((skill, index) => (
          <li key={index}>
            <Image
              src={generateSkillUrl(skill as Skill)}
              alt={skill}
              title={skill}
              width={50} // You can adjust this based on your needs
              height={50} // You can adjust this based on your needs
            />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
