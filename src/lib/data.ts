import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paperConverse from "../../public/paperConverse.png";
import travelBrands from "../../public/travelBrands.png";
import fittr from "../../public/fittr.png";
import dac from "../../public/dac.png";

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
    title: "MSc in Computer Science",
    location: "Technical University of Dublin, Ireland",
    description:
      "Currently in final semester of Msc. I am open to fulltime job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "SENIOR SOFTWARE DEVELOPER",
    location: "Techspian, Pune, India",
    description: `Directed APIs development within a Microservices architecture, resulting in a 40% reduction in system response time at FITTR & TravelBrands. Leveraged NestJS and Typescript to architect and implement robust backend systems, seamlessly integrating with MySQL and Amazon services; optimized database queries, resulting in faster data retrieval and improved overall system performance. 
    Orchestrated and directed a team of 4-5 developers in executing complex projects with tight deadlines. Championed team engagement in product releases, facilitating thorough code reviews and implementing best practices, resulting in a decrease in post-release defects and an improvement in overall product quality. 
    Streamlined team workflow by implementing scrum methodology in an agile environment, resulting in an increase in team productivity and an improvement in project delivery timelines.
`,
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "SENIOR SOFTWARE DEVELOPER",
    location: "Threeplus, Pune, India",
    description: `Developed and implemented innovative backend applications for Deutsche Gesellschaft fur Internationale; optimized data processing speed and reduced server response time, resulting in enhanced user experience and increased customer satisfaction.
      Created over 10 projects employing Node.js and Typescript for backend applications using Clean Code Architecture. 
      Spearheaded a mentorship initiative for junior team members, providing guidance and support in goal setting and professional development, resulting in 100% achievement of individual performance goals.
      Implemented a data-driven approach to web product development, leveraging user research and analytics to drive decision-making.
      `,
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "SOFTWARE ENGINEER",
    location: "e-Zest Solutions, Pune, India",
    description: `Gathered and validated requirements as a part of collaboration for a mobile and web application for a Detroit Club based out in Detroit that servers members for fortune 500 companies. 
      Led daily stand-up calls with customer to articulate the progress, risks and issues.
      Took part in architecting a highly efficient iOS mobile application developed using Swift and UIKit and released it to app store. 
      `,
    icon: React.createElement(CgWorkAlt),
    date: "2017-2019",
  },
] as const;

export const projectsData = [
  {
    title: "Paper Converse",
    description:
      "A PDF-oriented AI chatbot capable of text extraction from PDF documents and providing responses to queries related to the extracted content.",
    tags: ["React", "Next.js", "Neon DB", "PostgreSQL", "Drizzle", "Pinecone"],
    imageUrl: paperConverse,
    link: "https://paper-converse.vercel.app/",
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
    link: "https://travelbrandsagent.com/Login.aspx",
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
    imageUrl: fittr,
    link: "https://www.fittr.com/",
  },
  {
    title: "DAC",
    description: "A mobile application for Detroit Athletic Club members.",
    tags: ["iOS", "Swift", "UiKit", "Clean Architecture", "Alamofire"],
    imageUrl: dac,
    link: "https://apps.apple.com/us/app/dac-mobile/id1393930924",
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
  "NestJS",
  "Git",
  "Tailwind",
  "Drizzle",
  "MongoDB",
  "MySQL",
  "DynamoDB",
  "iOS",
  "Android",
  "Flutter",
  "GoLang",
  "Framer Motion",
] as const;
