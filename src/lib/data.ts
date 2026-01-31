import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import paperConverse from "../../public/paperConverse.png";
import travelBrands from "../../public/travelBrands.png";
import fittr from "../../public/fittr.png";
import dac from "../../public/dac.png";
import smartwardrobe from "../../public/smartwardrobe.png";

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
    title: "Senior Software Developer",
    location: "Evolutio Care Innovations, Sligo, Ireland",
    date: "Mar 2025 - Present",
    description:
      "Leading cloud-native microservices and reliability for UK eyecare clinics.",
    stack:
      "Team Leadership, Node.js, NestJS, AWS, Docker, GitHub Actions, Oracle",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer",
    location: "Ergo Technology Group, Dublin, Ireland",
    date: "Sep 2024 - Feb 2025",
    description:
      "Built backend integrations for IT service management with structured testing in ServiceNow.",
    stack: "ServiceNow, JavaScript, Databases, Notifications",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "MSc in Computer Science (Advanced Software Development)",
    location: "Technological University Dublin, Ireland",
    date: "Sep 2023 - Oct 2024",
    description:
      "Advanced software development with focus on distributed systems and scalable design.",
    stack:
      "Software Design, Systems Architecture, Advanced Databases, Secure Systems Development, UX Design",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Senior Software Developer",
    location: "Techspian, Pune, India",
    date: "Mar 2021 - May 2023",
    description:
      "Developed high-throughput microservices and observability with distributed logging.",
    stack: "Node.js, NestJS, AWS, Docker, MySQL, DynamoDB",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Senior Software Developer",
    location: "ThreePlus, Pune, India",
    date: "Jun 2019 - Jan 2021",
    description:
      "Led delivery of client applications and scalable location-based services.",
    stack: "Node.js, AWS, MongoDB, iOS, Android, Flutter",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer",
    location: "e-Zest Solutions Pvt Ltd, Pune, India",
    date: "Aug 2017 - Jun 2019",
    description:
      "Built backend services and supported production systems for client applications.",
    stack: "Node.js, Cloud, MySQL, REST APIs",
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "TravelBrands",
    description:
      "A web application that empowers TravelBrands agents to reserve air travel for their clients.",
    tags: [
      "Node.JS",
      "NestJS",
      "DynamoDB",
      "Typescript",
      "AWS",
      "Docker",
      "Redis",
      "Sabre",
      "Jenkins",
      "Distributed Tracing",
    ],
    imageUrl: travelBrands,
    link: "https://travelbrandsagent.com/Login.aspx",
  },
  {
    title: "FITTR",
    description: "A hub that bridges fitness trainers and clients together.",
    tags: [
      "Node.js",
      "NestJS",
      "MySQL",
      "Clean Architecture",
      "Docker",
      "AWS",
      "Redis",
      "Github Actions",
      "Test Last Development",
    ],
    imageUrl: fittr,
    link: "https://play.google.com/store/apps/details?id=com.squats.fittr&hl=en_IE",
  },
  {
    title: "Smartwardrobe",
    description:
      "An AI-driven fashion platform, utilizing multimodal LLMs and powered by vector databases.",
    tags: [
      "Node.JS",
      "NestJS",
      "Oracle",
      "Azure",
      "Github Actions",
      "Redis",
      "Faiss Index",
      "LLM",
      "Test Last Development",
    ],
    imageUrl: smartwardrobe,
    link: "https://smartwardrobe.store/",
  },
  {
    title: "DAC",
    description: "A mobile application for Detroit Athletic Club members.",
    tags: ["iOS", "Swift", "UiKit", "Clean Architecture", "Alamofire"],
    imageUrl: dac,
    link: "https://apps.apple.com/us/app/dac-mobile/id1393930924",
  },
  {
    title: "Paper Converse",
    description:
      "A PDF-oriented AI chatbot capable of text extraction from PDF documents and providing responses to queries related to the extracted content.",
    tags: ["React", "Next.js", "Neon DB", "Oracle", "Drizzle", "Pinecone"],
    imageUrl: paperConverse,
    link: "https://paper-converse.vercel.app/",
  },
] as const;

export const skillsData = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "Java",
  "AWS",
  "AWS CDK",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "DynamoDB",
  "Oracle",
  "Redis",
  "Jest",
  "Git",
] as const;
