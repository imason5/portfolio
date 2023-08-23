"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="mt-5">
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
      <div className="mt-8 items-center justify-center text-center text-2xl font-semibold !leading-[2] sm:text-4xl">
        <motion.h1
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
          I&rsquo;m <span className="font-bold text-[#fd4370]">Ian</span>.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 1 }}
        >
          A Full-Stack Web Developer
        </motion.h1>
      </div>
    </section>
  );
}

export default Intro;
