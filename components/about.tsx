"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="max-w-[45rem] scroll-mt-28 text-center leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4, duration: 1 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="text-gray-700  dark:text-gray-50 dark:text-opacity-90 ">
        I am a full-stack web developer based in London, UK. A recent{" "}
        <a href={"https://www.ironhack.com/uk/en/web-development/remote"}>
          <span className="font-bold">
            Ironhack Full-time Web Development Bootcamp{" "}
          </span>
        </a>
        graduate, I have a passion for building beautiful and accessible
        websites and applications. My core tools are React, Node.js and MongoDB,
        and I am loving getting to grips with Next.js and Typescript.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy a history
        podcast or two, a hike in the Scottish Highlands, or a good pub quiz.{" "}
      </p>
    </motion.section>
  );
}
