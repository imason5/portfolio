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
    name: "About",
    hash: "#about",
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
    description:
      "Nourish.Me is a mobile-optimized web application that utilizes CRUD operations and an external API to help users manage their diet and nutrition goals. ",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    imageUrl: nourishmeIMG,
    link: "https://github.com/Clem0nt25/Nourish.Me_Frontend",
  },
  {
    title: "FitQuest",
    description:
      "FitQuest is a fitness tracking app that supports full CRUD operations, enabling users to create, track, edit, and delete daily workouts.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Bootstrap"],
    imageUrl: fitquestIMG,
    link: "https://github.com/imason5/FitQuest",
  },
  {
    title: "Invaders!",
    description:
      "A Space Invaders game made with HTML5 Canvas, CSS and JavaScript. Theme inspiration was taken from the classic arcade game and an episode of Futurama.",
    tags: ["JavaScript", "HTML5", "Canvas", "CSS"],
    imageUrl: invadersIMG,
    link: "https://github.com/imason5/Invaders-Possibly-From-Space-",
  },
  {
    title: "Personal Portfolio",
    description: "",
    tags: ["Next.JS", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://github.com/imason5/portfolio",
  },
] as const;

export const skillsIcons = {
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  TypeScript: "ts",
  React: "react",
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  Git: "git",
  Tailwind: "tailwind",
  MongoDB: "mongodb",
  Express: "express",
  // ... any additional mappings
};
