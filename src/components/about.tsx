"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mx-auto mb-16 max-w-[45rem] rounded-2xl border border-white/10 bg-white/90 p-6 text-center leading-8 shadow-sm backdrop-blur sm:mb-24 sm:p-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I build and scale{" "}
        <span className="font-medium">cloud-native backend systems</span> with a
        focus on reliability, clean architecture, and measurable impact. My
        core stack includes{" "}
        <span className="font-medium">
          Node.js, NestJS, TypeScript, AWS, and SQL/NoSQL databases
        </span>
        , with strong experience in troubleshooting and production support.
      </p>

      <p>
        I enjoy working in cross-functional, agile teams and mentoring
        engineers, with a focus on clear communication and operational
        excellence.
      </p>
      <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        Key strengths: cloud-native architecture, reliability, and mentorship.
      </p>
    </motion.section>
  );
}
