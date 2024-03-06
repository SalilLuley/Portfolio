"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Salil Luley"
              src={"/salil.jpg"}
              width={300}
              height={300}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏽
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <strong>Salil Luley</strong>. I'm a
        <strong> full-stack developer</strong> with <strong>6 years</strong> of
        experience. I specialize in{" "}
        <strong>
          React, Next.js, Node.js, Nest.js, TypeScript, Tailwind, Drizzle,
          MongoDB and MySQL.
        </strong>
        I'm open to full-time opportunities.
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7
           text-white outline-none transition hover:scale-110 hover:bg-gray-950
           focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          className="group flex items-center gap-2 rounded-full border
           border-black/10  bg-white px-7 outline-none
           transition hover:scale-110 focus:scale-110 active:scale-105"
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1"></HiDownload>
        </a>
        <a
          className="flex items-center gap-2 rounded-full border border-black/10
           bg-white p-4 text-gray-700 transition
           hover:scale-[1.15] hover:text-gray-950 focus:scale-110 active:scale-105"
          href="https://www.linkedin.com/in/salil-luley/"
          target="_blank"
        >
          <BsLinkedin></BsLinkedin>
        </a>
        <a
          className="flex items-center gap-2 rounded-full border border-black/10
           bg-white  p-4 text-[1.35rem] text-gray-700 transition
           hover:scale-[1.15] hover:text-gray-950 focus:scale-110 active:scale-105"
          href="https://github.com/SalilLuley"
          target="_blank"
        >
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
