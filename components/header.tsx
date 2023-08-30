"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="sticky top-0 z-[999] flex w-full items-center justify-center">
      <motion.div
        className="sm:px-10shadow-lg flex h-[5rem] w-full items-center justify-center  bg-[#131628] bg-opacity-90 px-4 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="mx-auto flex w-full max-w-6xl">
          <motion.nav
            className="flex w-full items-center justify-between text-base font-medium text-[#d1d5e8]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href={links.find((link) => link.name === "Home")?.hash || "#"}
              className={clsx(
                "flex items-center transition-all duration-300 ease-in-out active:scale-95",
                {
                  "scale-110": activeSection === "Home",
                  "hover:scale-110": activeSection !== "Home",
                },
              )}
              onClick={() => {
                setActiveSection("Home");
                setTimeOfLastClick(Date.now());
              }}
            >
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <Image
                  src="/logo.png"
                  alt="Ian Mason"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            </Link>

            <ul className="flex flex-grow flex-wrap items-center justify-center space-x-2 text-sm sm:space-x-8 sm:text-base">
              {links
                .filter((link) => link.name !== "Home")
                .map((link) => (
                  <li
                    key={link.hash}
                    className={clsx(
                      "transition-all duration-300 ease-in-out sm:text-lg",
                      {
                        "text-white underline decoration-[#fd4370] decoration-2 underline-offset-4":
                          activeSection === link.name,
                        "hover:text-white hover:underline hover:decoration-[#fd4370] hover:decoration-2 hover:underline-offset-4":
                          activeSection !== link.name,
                      },
                    )}
                  >
                    <Link
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}{" "}
                    </Link>
                  </li>
                ))}
            </ul>
            <ThemeSwitch />
          </motion.nav>
        </div>
      </motion.div>
    </header>
  );
}
