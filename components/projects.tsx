import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

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

function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  return (
    <section className="group relative mb-3 max-w-[42rem] overflow-hidden rounded-lg  border border-black/5 bg-gray-100 transition last:mb-0 hover:bg-gray-200 sm:mb-8 sm:h-[20rem] sm:pr-8">
      <Link href={link}>
        <div className="flex h-full flex-col px-4 py-5 group-even:ml-[18em] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className="text-2xl font-semibold text-[#fd4370]">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-[#1c1e31]/[0.7] px-3 py-1 text-sm uppercase tracking-wider text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="bg- group-even:-right-[initial] group absolute -right-40 top-8 h-[25rem] w-[30rem] scale-100 transform overflow-hidden rounded-t-lg transition group-even:-left-40 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2">
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
      </Link>
    </section>
  );
}
