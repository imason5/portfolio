import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import fitquestIMG from "@/public/fitquest.png";
import nourishmeIMG from "@/public/nourishme.png";
import invadersIMG from "@/public/invaders.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ironhack",
    location: "Remote, UK",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Nourish.Me",
    description: "",
    tags: ["React", "MongoDB"],
    imageUrl: nourishmeIMG,
  },
  {
    title: "FitQuest",
    description: "",
    tags: [],
    imageUrl: fitquestIMG,
  },
  {
    title: "Invaders!",
    description: "",
    tags: [""],
    imageUrl: invadersIMG,
  },
  {
    title: "Personal Portfolio",
    description: "",
    tags: ["NextJS", "TailwindCSS"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
