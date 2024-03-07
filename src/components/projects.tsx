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
    <motion.section ref={ref} className="mb-28 scroll-mt-28" id="projects">
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
