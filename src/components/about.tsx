"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I embarked on a
        career driven by my passion for programming and problem-solving. Over
        the past <span className="font-medium">8 years</span>, I have
        specialized in{" "}
        <span className="font-medium">
          building scalable and secure backend systems
        </span>{" "}
        with a core stack that includes{" "}
        <span className="font-medium">
          Node.js, NestJS, MySQL, PostgreSQL, MongoDB, Redis, and DynamoDB
        </span>
        . I have extensive experience in{" "}
        <span className="font-medium">Docker</span> and{" "}
        <span className="font-medium">GitHub Actions</span>, enabling efficient
        CI/CD pipelines. Recently, during my MSc in{" "}
        <span className="font-medium">
          Computer Science (Advanced Software Development)
        </span>{" "}
        at Technological University Dublin, I have been focusing on the
        practical applications of{" "}
        <span className="font-medium">
          Multimodal Large Language Models (LLMs)
        </span>{" "}
        and integrating them with advanced tools like{" "}
        <span className="font-medium">Faiss</span> for building intelligent,
        AI-powered applications. I’m always eager to learn and adapt to new
        technologies and frameworks.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        cricket, watching movies, and exploring Dublin. I also love{" "}
        <span className="font-medium">learning new things</span>. Currently, I’m
        reading about{" "}
        <span className="font-medium">history and geopolitics</span> and honing
        my skills in playing the guitar.
      </p>
    </motion.section>
  );
}
