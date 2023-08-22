"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] flex items-center justify-center">
      <motion.div
        className="h-[5rem] w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] flex items-center justify-between px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.a
          href="#link1"
          className="hover:text-gray-500 transition"
          whileHover={{ scale: 1.1 }}
        >
          Home
        </motion.a>

        <div className="flex space-x-20">
          <motion.a
            href="#link2"
            className="hover:text-gray-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            Link 2
          </motion.a>

          <motion.a
            href="#link3"
            className="hover:text-gray-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            Link 3
          </motion.a>

          <motion.a
            href="#link4"
            className="hover:text-gray-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            Link 4
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}
