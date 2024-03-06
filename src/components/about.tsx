"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 w-3/4 sm:w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About Me</SectionHeading>
      <p className="mb-3">
        Software Engineer with six years experience implementing backend systems
        in Node.js, led re- architecture of key platform that serves 100,000
        requests per month, increasing speed and efficiency of system, promoted
        from Software Developer to Senior Software Developer in a year.
      </p>
      <p>
        I have a strong understanding of the full software development lifecycle
        including requirements gathering, design, development, testing, and
        deployment. I have experience in working with Agile methodologies and
        have a strong understanding of object-oriented programming, data
        structures, and algorithms.
      </p>
    </motion.section>
  );
};

export default About;
