"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section className="mt-5 scroll-mt-[100rem]" id="home" ref={ref}>
      <div className="flex items-center justify-center">
        <motion.div
          className="relative h-48 w-48 rounded-full border-[0.35rem] border-white shadow-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Ian Mason"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <motion.span
            className="absolute bottom-0 right-0 text-5xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ⌨️
          </motion.span>
        </motion.div>
      </div>
      <div className="mt-8 text-center text-2xl font-medium !leading-[2] sm:text-4xl">
        <motion.h1
          className="font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          Hello!
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm <span className="font-bold text-[#fd4370]">Ian</span>.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 1 }}
        >
          A <span className="font-bold ">Full-Stack Web Developer</span>.
        </motion.h1>
      </div>

      <motion.div
        className="mt-5 flex flex-col items-center justify-center gap-4 text-lg font-medium sm:flex-row "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <Link
          href="#projects"
          className="group flex items-center rounded-full  bg-[#131628] px-7 py-3 text-white transition hover:scale-110 hover:bg-[#fd4370] active:scale-95"
        >
          See My Projects
          <BsArrowRight className="ml-1 text-xl opacity-70 transition group-hover:translate-x-2" />
        </Link>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-[#fd4370] active:scale-95"
          href="https://www.linkedin.com/in/imason5/"
        >
          <BsLinkedin size={24} />
        </a>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full border  border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-[#fd4370] active:scale-95"
          href="https://github.com/imason5"
        >
          <FaGithubSquare size={24} />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
