"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999] flex w-full items-center justify-center">
      <motion.div
        className="sm:px-10shadow-lg flex h-[5rem] w-full items-center justify-center  bg-[#131628] bg-opacity-90 px-4 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="mx-auto flex w-full max-w-6xl">
          <motion.nav
            className="flex w-full justify-between text-base font-medium text-[#d1d5e8]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* Render the Home link */}
            <Link
              href={links.find((link) => link.name === "Home")?.hash || "#"}
            >
              <Image
                src="/logo.png"
                alt="Ian Mason"
                height={125}
                width={125}
                quality={100}
                className="transition hover:scale-110 active:scale-95"
              />
            </Link>

            {/* Group the rest of the links */}
            <ul className="flex space-x-2 sm:space-x-8 ">
              {links
                .filter((link) => link.name !== "Home")
                .map((link) => (
                  <li
                    key={link.hash}
                    className=" transition hover:text-white hover:underline hover:decoration-[#fd4370] hover:decoration-2 hover:underline-offset-4 sm:text-lg"
                  >
                    <Link href={link.hash}>{link.name}</Link>
                  </li>
                ))}
            </ul>
          </motion.nav>
        </div>
      </motion.div>
    </header>
  );
}
