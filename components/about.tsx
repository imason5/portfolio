"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4, duration: 1 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="text-gray-700">
        I am a web developer based in London, UK. A recent Ironhack Full-time
        Web Development Bootcamp graduate, I have a passion for building
        beautiful and accessible websites and applications.
      </p>
    </motion.section>
  );
}
