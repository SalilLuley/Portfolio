import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paperConverse from "../../public/corpcomment.png";
import travelBrands from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Paper Converse",
    description:
      "A PDF-oriented AI chatbot capable of text extraction from PDF documents and providing responses to queries related to the extracted content.",
    tags: ["React", "Next.js", "Neon DB", "PostgreSQL", "Drizzle", "Pinecone"],
    imageUrl: paperConverse,
  },
  {
    title: "TravelBrands",
    description:
      "An in-house project, a web platform that empowers TravelBrands agents to reserve air travel for their clients.",
    tags: [
      "React",
      "TypeScript",
      "DynamoDB",
      "Tailwind",
      "Node.js",
      "Express",
      "NextJS",
    ],
    imageUrl: travelBrands,
  },
  {
    title: "FITTR",
    description: "A hub that bridges fitness trainers and clients together.",
    tags: [
      "Node.js",
      "NextJS",
      "MySQL",
      "Clean Architecture",
      "Express",
      "TypeScript",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
