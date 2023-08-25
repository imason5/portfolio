"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

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
            className="flex w-full justify-between text-base font-medium text-[#d1d5e8]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* Render the Home link */}
            <Link
              href={links.find((link) => link.name === "Home")?.hash || "#"}
              className={clsx(
                "transition-all duration-300 ease-in-out active:scale-95",
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
              <Image
                src="/logo.png"
                alt="Ian Mason"
                height={125}
                width={125}
                quality={100}
              />
            </Link>

            {/* Group the rest of the links */}
            <ul className="flex space-x-2 sm:space-x-8 ">
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
          </motion.nav>
        </div>
      </motion.div>
    </header>
  );
}
