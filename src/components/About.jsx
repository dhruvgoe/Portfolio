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
          className="text-black dark:text-white text-center pb-8"
          data-aos="fade-up"
        >
          Hello, I'm{" "}
          <span className="font-semibold text-[#6674cc] dark:text[#6e96cf]">
            Dhruv Goel
          </span>
          , a passionate 3rd year B.Tech student specializing in Artificial
          Intelligence and Machine Learning at the University School of
          Automation and Robotics in Delhi. Alongside my academic pursuits, I
          thrive as a Full Stack Developer, blending creativity with technical
          expertise. Proficient in languages such as C, C++, and Python, I
          embark on coding adventures to solve real-world problems. My journey
          extends beyond the classroom, fueled by an insatiable curiosity for
          machine learning. Leveraging this enthusiasm, I immerse myself in the
          dynamic realm of technology, constantly pushing boundaries and
          embracing challenges. Additionally, I am exploring the fields of Deep
          Learning and OpenCV, expanding my knowledge and skills in these
          cutting-edge areas.
        </div>
      </div>
    </div>
  );
};

export default About;
