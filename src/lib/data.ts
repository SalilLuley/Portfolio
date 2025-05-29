import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    location: "Evolutio Ophthalmology, Sligo, Ireland",
    date: "Sept 2024 – Present",
    description: `We develop applications for our UK clinics, using Node.js, AWS services, NestJS and Oracle databases to streamline eye care management.`,
    stack: "Team Leadership, Node.JS, AWS, NestJS, Docker, Github Actions",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Developer",
    location: "Ergo Technology Group, Dublin, Ireland",
    date: "Sept 2024 – Present",
    description: `Developing ServiceNow-based ITIL solutions with a focus on customization and seamless integration. 
    Utilizing Test Management Framework to ensure robust testing and reliable application delivery.`,
    stack: "ServiceNow, Javascript, Databases, Notifications",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "MSc in Computer Science (Advanced Software Development)",
    location: "Technological University Dublin, Ireland",
    date: "Sept 2023 – Sept 2024",
    description: `Specialized in advanced software development, distributed systems, and multimodal LLMs. 
    Built an AI-driven recommendation platform utilizing FAISS and vector databases for scalable applications.`,
    stack: "Software Design, Systems Architectures, Advanced Databases, Secure Systems Development, User Experience Design",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Senior Software Developer",
    location: "Techspian, Pune, India",
    date: "March 2021 – May 2023",
    description: `Designed and implemented microservices for high-traffic platforms. 
    Focused on building scalable backend architectures and integrating third-party APIs with CI/CD pipelines.`,
    stack: "Node.JS, NestJS, Docker, AWS, MySQL, DynamoDB",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Senior Software Developer",
    location: "ThreePlus, Pune, India",
    date: "June 2019 – January 2021",
    description: `Developed backend systems for geospatial applications and API-driven services. 
    Emphasized scalability and modularity for seamless API integration and efficient data processing.`,
    stack: "Node.JS, AWS, MongoDB, iOS, Android, Flutter",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer",
    location: "e-Zest Solutions Pvt Ltd, Pune, India",
    date: "August 2017 – June 2019",
    description: `Created and maintained RESTful APIs for mobile applications using Spring Boot. 
    Delivered backend services for real-time applications with a focus on reliability and maintainability.`,
    stack: "Spring Boot, MySQL, iOS, Android",
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
      "Distributed Tracing"
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
      "Test Last Development"
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
      "PostgreSQL",
      "Azure",
      "Github Actions",
      "Redis",
      "Faiss Index",
      "LLM",
      "Test Last Development"
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
    tags: ["React", "Next.js", "Neon DB", "PostgreSQL", "Drizzle", "Pinecone"],
    imageUrl: paperConverse,
    link: "https://paper-converse.vercel.app/",
  },
] as const;

export const skillsData = [
  "Node.js",
  "NestJS",
  "AWS",
  "Docker",
  "GitHub Actions",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "DynamoDB",
  "TypeScript",
  "React",
  "Next.js",
  "Azure",
  "Git",
  "Tailwind",
  "JavaScript",
  "HTML",
  "CSS",
  "iOS",
  "Android",
  "Flutter",
  "Jira",
] as const;
