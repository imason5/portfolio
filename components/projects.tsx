import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          return (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
