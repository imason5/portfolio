"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] flex items-center justify-center">
      <motion.div
        className="flex h-[5rem] w-full items-center justify-between border border-white border-opacity-40 bg-white bg-opacity-80 px-10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex w-full justify-between">
          {/* Render the Home link */}
          <Link href={links.find((link) => link.name === "Home")?.hash || "#"}>
            Home
          </Link>

          {/* Group the rest of the links */}
          <ul className="flex space-x-4">
            {links
              .filter((link) => link.name !== "Home")
              .map((link) => (
                <li key={link.hash}>
                  <Link href={link.hash}>{link.name}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
