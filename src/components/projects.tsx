"use client";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <motion.section
      ref={ref}
      className="mx-auto mb-16 max-w-5xl scroll-mt-28 sm:mb-24"
      id="projects"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
