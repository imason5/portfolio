"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 block  h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-90"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4, duration: 1 }}
    ></motion.div>
  );
}
