import React from "react";
import htmlLogo from "../assets/skill assets/HTML.png";
import cssLogo from "../assets/skill assets/CSS.png";
import bootstrapLogo from "../assets/skill assets/Bootstrap.svg";
import tailwindLogo from "../assets/skill assets/Tailwind.png";
import jsLogo from "../assets/skill assets/Javascript.svg";
import reactLogo from "../assets/skill assets/React.png";
import reduxLogo from "../assets/skill assets/redux.svg";
import nodejsLogo from "../assets/skill assets/NodeJs.svg";
import expressLogo from "../assets/skill assets/Express.png";
import mongodblogo from "../assets/skill assets/MongoDB.svg";
import mongooseLogo from "../assets/skill assets/Mongoose.png";
import gitLogo from "../assets/skill assets/Git.svg";
import githubLogo from "../assets/skill assets/Github.png";
import vercelLogo from "../assets/skill assets/Vercel.jpg";
import postmanLogo from "../assets/skill assets/Postman.png";

const Skills = () => {
  const frontendSkillsData = [
    {
      name: "HTML",
      logo: htmlLogo,
    },
    {
      name: "CSS",
      logo: cssLogo,
    },
    {
      name: "Bootstrap",
      logo: bootstrapLogo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindLogo,
    },
    {
      name: "Javascript",
      logo: jsLogo,
    },
    {
      name: "React JS",
      logo: reactLogo,
    },
    {
      name: "Redux",
      logo: reduxLogo,
    },
  ];

  const backendSkillsData = [
    {
      name: "Node Js",
      logo: nodejsLogo,
    },
    {
      name: "Express JS",
      logo: expressLogo,
    },
    {
      name: "Mongo DB",
      logo: mongodblogo,
    },
    {
      name: "Mongoose",
      logo: mongooseLogo,
    },
  ];

  const otherSkillsData = [
    {
      name: "Git",
      logo: gitLogo,
    },
    {
      name: "Github",
      logo: githubLogo,
    },
    {
      name: "Vercel",
      logo: vercelLogo,
    },
    {
      name: "Postman",
      logo: postmanLogo,
    },
  ];

  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] pt-24 pb-8"
      id="skills"
    >
      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto ">
        <div className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center">
          Skills
        </div>
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center
        py-3"
        >
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </div>
        <div className="flex flex-wrap gap-5 justify-center pt-4">
          <div
            className="flex flex-col items-center gap-y-2 border border-[#6d7ace] dark:border-[#6b92c9] rounded-lg p-2 sm:p-4 
          max-w-xl"
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-2xl font-bold -mt-2">
              Frontend
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontendSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 border border-[#6d7ace] dark:border-[#6b92c9] w-fit px-3 py-2 rounded-lg"
                >
                  <img src={skill.logo} alt="" className="w-10" />
                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-y-2 border border-[#6d7ace] dark:border-[#6b92c9] rounded-lg p-2 sm:p-4 
          max-w-xl "
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-2xl font-bold -mt-2">
              Backend
            </p>
            <div className="flex flex-wrap gap-3 justify-center ">
              {backendSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 border border-[#6d7ace] dark:border-[#6b92c9] w-fit px-3 py-2 rounded-lg"
                >
                  <img src={skill.logo} alt="" className="w-10" />
                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-y-2 border border-[#6d7ace] dark:border-[#6b92c9] rounded-lg p-2 sm:p-4 
          max-w-xl "
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-2xl font-bold -mt-2">
              Others
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 border border-[#6d7ace] dark:border-[#6b92c9] w-fit px-3 py-2 rounded-lg
                  "
                >
                  <img src={skill.logo} alt="" className="w-10 " />
                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
