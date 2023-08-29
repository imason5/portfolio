"use client";

import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 last:mb-0 "
    >
      <section className="relative  max-w-[42rem] overflow-hidden rounded-lg  border border-black/5 bg-gray-100 transition  hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8">
        <Link href={link}>
          <div className="flex h-full flex-col px-4 py-5 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18em]">
            <h3 className="text-2xl font-semibold text-[#fd4370]">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700  dark:text-white/90">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#1c1e31]/[0.7] px-3 py-1 text-sm uppercase tracking-wider text-white"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="group-even:-right-[initial] group absolute -right-40 top-8 hidden h-[25rem] w-[30rem] scale-100 transform overflow-hidden rounded-t-lg transition group-even:-left-40 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block">
              <Image
                src={imageUrl}
                alt="Project example"
                quality={95}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </div>
        </Link>
      </section>
    </motion.div>
  );
}
