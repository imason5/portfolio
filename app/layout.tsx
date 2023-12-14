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
        className={`${inter.className} relative overflow-x-hidden bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute left-1/2 top-0 z-[-10] flex w-full max-w-6xl -translate-x-1/2 transform justify-between">
          {/* Violet Circle - Hidden on smaller screens */}
          <div className="z-[-1] ml-[-6rem] mt-[-1rem] hidden h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:block"></div>
          {/* Pink Circle - Hidden on smaller screens */}
          <div className="z-[-1] mr-[-6rem] mt-[-1rem] hidden h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:block"></div>
        </div>

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
