import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Ian Mason | Personal Portfolio",
  description: "Ian Mason is a full-stack web developer based in London, UK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Pink Circle */}
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        {/* Violet Circle */}
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
