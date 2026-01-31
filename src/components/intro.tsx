"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";
import { useSectionInView } from "@/lib/hooks";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.75);

  return (
    <section ref={ref} id="home" className="relative mb-10 w-full max-w-5xl sm:mb-14">
      <div className="grid items-center gap-10 rounded-[2rem] border border-black/5 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-left">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Backend · Cloud Native · 8+ Years
          </motion.p>
          <motion.h1
            className={`${spaceGrotesk.className} mb-5 text-3xl font-semibold !leading-tight text-slate-900 sm:text-4xl lg:text-5xl`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I'm Salil.
            <br />
            <span className="text-slate-950">
              I build calm, reliable backend services for real-world traffic.
            </span>
          </motion.h1>
          <motion.p
            className="mb-6 text-base text-slate-700 sm:text-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Node.js · NestJS · TypeScript · AWS
          </motion.p>
          <motion.p
            className="mb-6 text-sm font-medium text-slate-500"
            initial={{ y: 40, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Currently learning AI agents — training my future teammates.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-950"
            >
              Let's talk
              <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>
            <a
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
              href="/Salil_Luley_CV.pdf"
              download={true}
            >
              Download CV
              <HiDownload className="opacity-60 transition group-hover:translate-y-0.5" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-900"
              href="https://www.linkedin.com/in/salil-luley/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-3 text-lg text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-900"
              href="https://github.com/SalilLuley"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              alt="Salil Luley"
              src={"/salil.jpg"}
              width={260}
              height={260}
              quality={95}
              priority={true}
              className="h-full w-full rounded-3xl object-cover shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
