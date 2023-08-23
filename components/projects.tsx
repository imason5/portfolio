import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="relative max-w-[42rem] overflow-hidden border border-black/5 bg-gray-100 sm:h-[20rem] sm:pr-8">
      <div className="px-4 py-5 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-[#1c1e31]/[0.7] px-3 py-1 text-sm uppercase tracking-wider text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="absolute -right-40 top-8 h-[25rem] w-[30rem] scale-90 transform overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt="Project example"
            quality={95}
            layout="fill"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
      </div>
    </section>
  );
}
