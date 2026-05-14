// import React, { useEffect, useState } from "react";

// import terraProject from "../assets/project assets/terraProject.png";
// import dockerWeb from "../assets/project assets/dockerProject.png";
// import stockProject from "../assets/project assets/stockProject.png";
// import driverProject from "../assets/project assets/driverProject.jpeg";
// import cicdProject from "../assets/project assets/cicdProject.png";

// const Projects = () => {
//   const projects = [
//     {
//       name: "Terraform Deployment on AWS",
//       repoLink: "https://github.com/dhruvgoe/Terraform-Deployment-Project",
//       pic: terraProject,
//       techs: ["AWS", "Terraform"],
//       desc: "This project demonstrates the deployment of a complete AWS infrastructure using Terraform, showcasing the power of Infrastructure as Code (IaC) for efficient and scalable cloud resource management.",
//     },
//     {
//       name: "Portfolio Hosting through CI/CD",
//       repoLink: "https://github.com/dhruvgoe/Resume-Hosting-CI-CD",
//       pic: cicdProject,
//       techs: ["AWS S3", "Github Actions", "Github"],
//       desc: "This project focuses on hosting a personal portfolio using AWS S3, with an automated CI/CD pipeline set up through Github Actions. It demonstrates how to seamlessly deploy updates to the portfolio whenever changes are pushed to the GitHub repository.",
//     },
//     {
//       name: "Dockerized Web Deployment",
//       repoLink: "https://github.com/dhruvgoe/docker-sample-web-app",
//       pic: dockerWeb,
//       techs: ["AWS", "Docker"],
//       desc: "Dockerized Web Deployment is a project that involves containerizing a web application using Docker and deploying it on AWS. This project showcases the benefits of containerization for consistent and scalable application deployment in cloud environments.",
//     },
//     {
//       name: "Stock Price Forecasting with Sentiment Analysis",
//       repoLink:
//         "https://github.com/dhruvgoe/Stock-Price-Forecasting-with-Sentiment",
//       pic: stockProject,
//       techs: ["Machine Learning", "Python"],
//       desc: "This project combines stock price forecasting with sentiment analysis, leveraging machine learning techniques to predict stock market trends based on historical data and sentiment from news and social media.",
//     },
//     {
//       name: "Distracted Driver Detection using Computer Vision",
//       repoLink:
//         "https://github.com/dhruvgoe/Distracted-Driver-Distraction",
//       pic: driverProject,
//       techs: ["Machine Learning", "OpenCV", "Python"],
//       desc: "This project focuses on detecting distracted drivers using computer vision techniques. By analyzing real-time image feeds, the system identifies various forms of driver distraction to enhance road safety and reduce accidents.",
//     },
//   ];

//   const [noOfProjectCard, setNoOfProjectCard] = useState(0);

//   useEffect(() => {
//     if (window.innerWidth > 768) {
//       setNoOfProjectCard(6);
//     } else if (window.innerWidth > 640) {
//       setNoOfProjectCard(4);
//     } else {
//       setNoOfProjectCard(2);
//     }
//   }, []);

//   function showMoreHandler() {
//     setNoOfProjectCard((prev) => {
//       if (prev * 2 >= projects.length) {
//         return projects.length;
//       } else {
//         return prev * 2;
//       }
//     });
//   }

//   return (
//     <div
//       className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-28"
//       id="projects"
//     >
//       <div className="w-11/12 md:w-10/12 mx-auto max-w-7xl">
        
//         {/* Heading */}
//         <div
//           className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center"
//           data-aos="fade-up"
//         >
//           PROJECTS
//         </div>

//         {/* Description */}
//         <div
//           className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center py-6"
//           data-aos="fade-up"
//         >
//           I have worked on a wide range of projects, from Machine Learning and
//           Computer Vision to DevOps and Cloud deployments.
//         </div>

//         {/* Project Cards */}
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           data-aos="fade-up"
//         >
//           {projects.slice(0, noOfProjectCard).map((item, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-black shadow-lg rounded-lg p-4 
//               hover:-translate-y-2 hover:scale-105 transition-all duration-300
//               flex flex-col justify-between items-center gap-y-3"
//             >
//               {/* Image */}
//               <img
//                 src={item.pic}
//                 alt={item.name}
//                 className="rounded-lg w-full aspect-[2/1] shadow-md object-cover"
//               />

//               {/* Title */}
//               <p className="text-lg text-black dark:text-white text-center font-semibold">
//                 {item.name}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap justify-center items-center gap-2">
//                 {item.techs.map((tech, ind) => (
//                   <div
//                     key={ind}
//                     className="bg-[#6674cc] text-xs dark:bg-[#29347a] text-white px-3 py-1 rounded-xl"
//                   >
//                     {tech}
//                   </div>
//                 ))}
//               </div>

//               {/* Description */}
//               <p className="text-sm text-black dark:text-white text-center">
//                 {item.desc}
//               </p>

//               {/* Buttons */}
//               <div className="flex items-center gap-x-4 pt-2">
//                 <a
//                   href={item.repoLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-[#6674cc] dark:bg-[#29347a] border border-[#6674cc] 
//                   dark:border-[#29347a] rounded-md text-xs sm:text-base px-4 py-2 text-white"
//                 >
//                   View Source Code
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show More Button */}
//         {noOfProjectCard < projects.length && (
//           <div className="w-fit mx-auto pt-8">
//             <button
//               className="bg-[#6674cc] dark:bg-[#29347a] text-white py-2 px-5 rounded-lg hover:scale-105 transition-all duration-300"
//               onClick={showMoreHandler}
//             >
//               Show More...
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;






import React, { useState } from "react";

import terraProject from "../assets/project assets/terraProject.png";
import dockerWeb from "../assets/project assets/dockerProject.png";
import stockProject from "../assets/project assets/stockProject.png";
import driverProject from "../assets/project assets/driverProject.jpeg";
import cicdProject from "../assets/project assets/cicdProject.png";

const Projects = () => {
  const projects = [
    {
      name: "Terraform Deployment on AWS",
      repoLink: "https://github.com/dhruvgoe/Terraform-Deployment-Project",
      pic: terraProject,
      techs: ["AWS", "Terraform"],
      desc: "This project demonstrates the deployment of a complete AWS infrastructure using Terraform.",
    },
    {
      name: "Portfolio Hosting through CI/CD",
      repoLink: "https://github.com/dhruvgoe/Resume-Hosting-CI-CD",
      pic: cicdProject,
      techs: ["AWS S3", "Github Actions", "Github"],
      desc: "Sample portfolio hosting using AWS S3 with automated CI/CD through GitHub Actions.",
    },
    {
      name: "Dockerized Web Deployment",
      repoLink: "https://github.com/dhruvgoe/docker-sample-web-app",
      pic: dockerWeb,
      techs: ["AWS", "Docker"],
      desc: "Containerized web application deployment using Docker and AWS cloud services.",
    },
    {
      name: "Stock Price Forecasting with Sentiment Analysis",
      repoLink:
        "https://github.com/dhruvgoe/Stock-Price-Forecasting-with-Sentiment",
      pic: stockProject,
      techs: ["Machine Learning", "Python"],
      desc: "Machine learning based stock price forecasting with sentiment analysis.",
    },
    {
      name: "Distracted Driver Detection using Computer Vision",
      repoLink:
        "https://github.com/dhruvgoe/Distracted-Driver-Distraction",
      pic: driverProject,
      techs: ["Machine Learning", "OpenCV", "Python"],
      desc: "Computer vision based system for detecting distracted drivers.",
    },
  ];

  // Initially show 4 projects
  const [visibleProjects, setVisibleProjects] = useState(4);

  // Show all projects
  const showMoreHandler = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-28"
      id="projects"
    >
      <div className="w-11/12 md:w-10/12 mx-auto max-w-6xl">

        {/* Heading */}
        <div
          className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center"
          data-aos="fade-up"
        >
          PROJECTS
        </div>

        {/* Description */}
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center py-6"
          data-aos="fade-up"
        >
          I have worked on a wide range of projects, from Machine Learning and
          Computer Vision to DevOps and Cloud deployments.
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {projects.slice(0, visibleProjects).map((item, index, arr) => {
            
            // If total visible projects are odd and this is the last card
            const isLastOddCard =
              arr.length % 2 !== 0 && index === arr.length - 1;

            return (
              <div
                key={index}
                className={`bg-white dark:bg-black shadow-lg rounded-xl p-5
                hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300
                flex flex-col justify-between items-center gap-y-4
                ${
                  isLastOddCard
                    ? "md:col-span-2 md:w-[50%] md:mx-auto"
                    : "w-full"
                }`}
              >
                {/* Project Image */}
                <img
                  src={item.pic}
                  alt={item.name}
                  className="rounded-lg w-full h-[220px] object-cover shadow-md"
                />

                {/* Project Title */}
                <p className="text-xl text-black dark:text-white text-center font-semibold">
                  {item.name}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {item.techs.map((tech, ind) => (
                    <div
                      key={ind}
                      className="bg-[#6674cc] text-xs dark:bg-[#29347a]
                      text-white px-3 py-1 rounded-xl"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-black dark:text-white text-center leading-relaxed">
                  {item.desc}
                </p>

                {/* Button */}
                <a
                  href={item.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#6674cc] dark:bg-[#29347a]
                  border border-[#6674cc] dark:border-[#29347a]
                  rounded-md text-sm px-5 py-2 text-white
                  hover:scale-105 transition-all duration-300"
                >
                  View Source Code
                </a>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMoreHandler}
              className="bg-[#6674cc] dark:bg-[#29347a]
              text-white px-6 py-3 rounded-lg shadow-md
              hover:scale-105 transition-all duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;