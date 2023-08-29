"use client";
import React from "react";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgb(240, 243, 248)",
                color: theme === "light" ? "#9ca3af" : "rgba(0, 0, 0, 0.5)",
                fontSize: "1.5rem",
              }}
            >
              <a
                className="group flex cursor-pointer items-center text-xl font-semibold capitalize text-[#131628] transition hover:text-[#fd4370] dark:text-white/90 dark:hover:text-[#fd4370] "
                href={item.link}
              >
                {item.title}
                <BsArrowRight className="ml-1  opacity-70 transition group-hover:translate-x-2" />
              </a>

              <p className="!mt-0 !text-sm !font-normal">{item.location}</p>
              <p className="!mt-2 !font-normal text-gray-700  dark:text-white/90">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
