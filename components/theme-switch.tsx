"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className=" rounded-lg bg-[#d1d5e8] p-[0.3rem] text-[#131628] transition-all hover:bg-white "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={22} /> : <BsMoon size={22} />}
    </button>
  );
}
