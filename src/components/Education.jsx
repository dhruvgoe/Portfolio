import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const Education = () => {
  return (
    <div className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-28" id="education">
      <div className="w-11/12 md:w-10/12 mx-auto max-w-7xl">
        <div
          className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center "
          data-aos="fade-up"
        >
          Education
        </div>

        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center
        py-6"
          data-aos="fade-up"
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>

        <VerticalTimeline lineColor={"#e9ecf7"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>2021-Present</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={<IoSchool />}
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              B.Tech (AIML)
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              USAR,GGSIPU
            </h4>
            <p>
              Embarked on a transformative journey, earning a Bachelor's in
              Technology, mastering the art of innovation and problem-solving.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>2019-2021</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={<IoSchool />}
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Senior Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              CBSE
            </h4>
            <p>
              Successfully completed Senior Secondary Education with
              distinction, laying the foundation for academic excellence
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#6674cc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6674cc" }}
            date={<div>2017-2019</div>}
            dateClassName={"xl:text-black dark:xl:text-white text-white"}
            icon={<IoSchool />}
            iconStyle={{ background: "#6674cc", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              CBSE
            </h4>
            <p>
              Successfully completed Secondary Education, laying the foundation
              for future endeavors.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#6674cc", color: "#fff" }}
            icon={<IoIosStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
