"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  return (
    <section
      id="experience"
      ref={ref}
      className="mx-auto mb-16 max-w-5xl scroll-mt-28 sm:mb-24"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgba(255, 255, 255, 0.35)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.95)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-2 !font-normal text-gray-700">
                {item.description}
              </p>
              <p className="!mt-0 font-normal">Tech Stack: {item.stack}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
