import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { IoIosStar } from "react-icons/io";

import capgeminiLogo from "../assets/capgeminiLogo.png";
import prodigalLogo from "../assets/prodigalLogo.jpeg";
import monitorLogo from "../assets/monitorLogo.jpeg";

const Experiences = () => {
  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-28"
      id="experience"
    >
      <div className="w-11/12 md:w-10/12 mx-auto max-w-7xl">

        {/* Heading */}
        <div
          className="text-3xl text-[#6d7ace] dark:text-[#6b92c9]
          font-bold tracking-wider text-center"
          data-aos="fade-up"
        >
          Experiences
        </div>

        {/* Subtitle */}
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg
          text-black dark:text-white text-center py-6"
          data-aos="fade-up"
        >
          Dedicated Internships and Real Life Professional Experience so far.
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor={"#d7dcf5"}>

          {/* Capgemini */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#6674cc",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #6674cc",
            }}
            date={<span>Aug 2025 - Mar 2026</span>}
            dateClassName="xl:text-black dark:xl:text-white text-white"
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={capgeminiLogo}
                  alt="Capgemini"
                  className="w-8 h-8 object-contain rounded-full"
                />
              </div>
            }
            iconStyle={{
              background: "#6674cc",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-2xl">
              Software Engineer
            </h1>

            <h4 className="vertical-timeline-element-subtitle font-semibold mt-1">
              Capgemini India Pvt. Ltd.
            </h4>

            <div className="flex flex-col items-start">
              As a Software Engineer, I worked on Cloud concepts and enhanced my
              understanding of modern cloud technologies and DevOps practices.

              <a
                href="https://drive.google.com/file/d/1TGXqtYcY-g31VOsBFtrsZk5XnEQL5OC2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-bold px-3 py-2 mt-4 border border-white
                hover:bg-white hover:text-[#6674cc]
                transition-all duration-300 rounded-md"
              >
                Experience Letter
              </a>
            </div>
          </VerticalTimelineElement>

          {/* Prodigal AI */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#6674cc",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #6674cc",
            }}
            date={<span>Dec 2024 - Mar 2025</span>}
            dateClassName="xl:text-black dark:xl:text-white text-white"
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={prodigalLogo}
                  alt="Prodigal AI"
                  className="w-8 h-8 object-contain rounded-full"
                />
              </div>
            }
            iconStyle={{
              background: "#6674cc",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-2xl">
              AIML Intern
            </h1>

            <h4 className="vertical-timeline-element-subtitle font-semibold mt-1">
              Prodigal AI
            </h4>

            <div className="flex flex-col items-start">
              Worked on a Multi-Agent Author System using LLMs and AIML to
              generate meaningful insights from web applications.

              <div className="flex flex-wrap gap-3 mt-4">

                <a
                  href="https://github.com/dhruvgoe/Prodigal-AI-Internship-Minor"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold px-3 py-2 border border-white
                  hover:bg-white hover:text-[#6674cc]
                  transition-all duration-300 rounded-md"
                >
                  View Project
                </a>

                <a
                  href="https://drive.google.com/file/d/1AeoxjK26ZludaqC-AQtUywzcmC2nZGOX/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold px-3 py-2 border border-white
                  hover:bg-white hover:text-[#6674cc]
                  transition-all duration-300 rounded-md"
                >
                  Certificate
                </a>

              </div>
            </div>
          </VerticalTimelineElement>

          {/* Monitorexam */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#6674cc",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #6674cc",
            }}
            date={<span>Jul 2024 - Aug 2024</span>}
            dateClassName="xl:text-black dark:xl:text-white text-white"
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={monitorLogo}
                  alt="Monitorexam"
                  className="w-8 h-8 object-contain rounded-full"
                />
              </div>
            }
            iconStyle={{
              background: "#6674cc",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="vertical-timeline-element-title font-bold text-2xl">
              ML Intern
            </h1>

            <h4 className="vertical-timeline-element-subtitle font-semibold mt-1">
              Monitorexam.com
            </h4>

            <div className="flex flex-col items-start">
              Worked on ASR and Speaker Diarization systems to improve the
              accuracy of AI-based examination monitoring.

              <a
                href="https://drive.google.com/file/d/1fuuGYcxrASXfCv4IV4JTx__s4gV3IZ6_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-bold px-3 py-2 mt-4 border border-white
                hover:bg-white hover:text-[#6674cc]
                transition-all duration-300 rounded-md"
              >
                Certificate
              </a>
            </div>
          </VerticalTimelineElement>

          {/* End Star */}
          <VerticalTimelineElement
            iconStyle={{ background: "#6674cc", color: "#fff" }}
            icon={<IoIosStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;