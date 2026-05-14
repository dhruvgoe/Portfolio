import React from "react";
import aboutBg from "../assets/aboutBg.svg";
import me from "../assets/Me.png";

const About = () => {
  return (
    <div className="w-full bg-white dark:bg-[#131516] pt-24" id="about">
      <div className="w-11/12 md:10/12 max-w-7xl mx-auto ">
        <div className="text-black dark:text-white text-3xl font-bold tracking-wider">
          About <span className="text-[#6674cc] dark:text-[#6e96cf]">Me</span>
        </div>

        <div className="h-0.5 w-full bg-[#777c85] my-6"></div>

        <div
          className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/4 aspect-square mx-auto "
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="text-black dark:text-white mx-auto text-center text-2xl font-bold tracking-wider 
        my-3"
          data-aos="fade-up"
        >
          Dhruv Goel
        </div>

        <div
          className="text-black dark:text-white text-center justify-content pb-8"
          data-aos="fade-up"
        >
          Hello, I'm{" "}
          <span className="font-semibold text-[#6674cc] dark:text-[#6e96cf]">
            Dhruv Goel
          </span>
          , a B.Tech graduate in CSE (AIML) from the USAR, GGSIPU, Delhi, with a growing passion for Cloud Computing and DevOps. I am an AWS Certified Cloud Practitioner and a Cloud & DevOps Enthusiast skilled in AWS, Docker, Kubernetes, Terraform, CI/CD, and Python. I enjoy building scalable, automated, and reliable systems while continuously exploring modern cloud technologies and DevOps practices.        </div>
      </div>
    </div>
  );
};

export default About;
