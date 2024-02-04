import React, { useEffect, useState } from "react";
import notes from "../assets/project assets/notes.png";
import speech from "../assets/project assets/speech.png";
import foodie from "../assets/project assets/foodie.png";
import razor from "../assets/project assets/razor.png";
import discord from "../assets/project assets/discord.png";
import portfolio from "../assets/project assets/portfolio.png";
import gitdev from "../assets/project assets/gitdev.png";
import pass from "../assets/project assets/pass.png";
import weather from "../assets/project assets/weather.png";
import spotify from "../assets/project assets/spotify.png";

const Projects = () => {
  const projects = [
    {
      name: "Razorpay Clone Website",
      link: "https://razorpay-clone-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Razorpay-Clone-Tailwind",
      pic: razor,
      techs: ["HTML", "CSS"],
      category: "Web App's",
      desc: "A Razorpay website clone featuring seamless payment solutions, meticulously crafted using HTML and CSS for a polished and intuitive frontend experience.",
    },
    {
      name: "Discord Clone Website",
      link: "https://discord-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Discord-Tailwind",
      pic: discord,
      techs: ["HTML", "CSS"],
      category: "Web App's",
      desc: "Discord website clone featuring a sleek and responsive design, crafted with HTML and CSS for a seamless frontend experience.",
    },
    {
      name: "Foodie Website",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodie,
      techs: ["JavaScript", "Tailwind"],
      category: "Web App's",
      desc: "Savor the symphony of flavors with our culinary creations, where JavaScript magic meets Tailwind elegance on our frontend feast!",
    },
    {
      name: "Random Portfolio Website",
      link: "https://random-portfolio-website.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Random-Portfolio-Website",
      pic: portfolio,
      techs: ["HTML", "CSS", "JavaScript"],
      category: "Web App's",
      desc: "Elevating user experiences through seamlessly crafted websites with HTML, CSS, and JS magic.",
    },
    {
      name: "Github DevDetective",
      link: "https://github-dev-detective.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Github-DevDetective",
      pic: gitdev,
      techs: ["HTML", "CSS", "JavaScript"],
      category: "Web App's",
      desc: "GitHub Dev Detective: Uncover hidden coding gems with our sleek HTML, CSS, and JS-powered frontend and intuitive API integration.",
    },
    {
      name: "Password Generator",
      link: "https://password-generator-phi-sage-12.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Password_Generator",
      pic: pass,
      techs: ["HTML", "CSS", "JavaScript"],
      category: "Web App's",
      desc: "An interactive password generator app, crafted with HTML, CSS, and JS, ensuring robust security and user-friendly experience.",
    },
    {
      name: "Weather App",
      link: "https://weather-app-blond-sigma.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Weather-App",
      pic: weather,
      techs: ["HTML", "CSS", "JavaScript"],
      category: "Web App's",
      desc: "An intuitive weather app, crafted with HTML, CSS, and JavaScript, seamlessly integrates real-time weather data through an API, offering a visually appealing and user-friendly frontend experience.",
    },
    {
      name: "Spotify Clone Website",
      link: "https://spotify-clone-phi-pearl.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Spotify-Clone",
      pic: spotify,
      techs: ["HTML", "CSS", "JavaScript"],
      category: "Web App's",
      desc: "Immerse yourself in a seamless music experience with this Spotify clone, crafted using HTML, CSS, and JS, featuring an intuitive frontend design and a curated collection of pre-added songs.",
    },
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notes,
      techs: ["ReactJS", "Tailwind"],
      category: "Web App's",
      desc: "Built a stylish Notes Memo app with React and Tailwind for seamless functionality and a modern, responsive design, creating an efficient platform for organizing tasks.",
    },
    {
      name: "Speech-to-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speech,
      techs: ["ReactJS", "Tailwind", "NPM"],
      category: "Web App's",
      desc: "Empowering seamless voice-to-text conversion with a React and Tailwind CSS interface, enhanced by a robust npm package for unparalleled accuracy and efficiency.",
    },
  ];

  const filters = ["All", "Web App's", "Machine Learning"];

  const [activeFilter, setActiveFilter] = useState("All");

  const [filteredProjects, setFilteredProjects] = useState([]);

  const [noOfProjectCard, setNoOfProjectCard] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setNoOfProjectCard(6);
    } else if (window.innerWidth > 640 && window.innerWidth < 768) {
      setNoOfProjectCard(4);
    } else {
      setNoOfProjectCard(2);
    }
  }, [activeFilter]);

  const clickHandler = (item) => {
    setActiveFilter(item);
  };

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
      return;
    }
    const temp = projects.filter(
      (project) => project.category === activeFilter
    );
    setFilteredProjects(temp);
  }, [activeFilter, noOfProjectCard]);

  function showMoreHandler() {
    setNoOfProjectCard((prev) => {
      if (prev * 2 >= filteredProjects.length) {
        return filteredProjects.length;
      } else {
        return prev * 2;
      }
    });
  }

  return (
    <div className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-28" id="projects">
      <div className="w-11/12 md:w-10/12 mx-auto max-w-7xl">
        <div
          className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center"
          data-aos="fade-up"
        >
          PROJECTS
        </div>
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center
        py-6"
          data-aos="fade-up"
        >
          I have worked on a wide range of projects. From Web apps to Machine
          Learning Algorithms. Here are some of my projects.
        </div>

        <div
          className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center flex-wrap gap-4 mx-auto pb-8"
          data-aos="fade-up"
        >
          {filters.map((item, index) => (
            <button
              key={index}
              className={`text-xl ${
                activeFilter === item
                  ? "bg-[#6674cc] text-white dark:bg-[#29347a]"
                  : "bg-white text-black"
              } border-2 border-[#6674cc] dark:border-[#29347a] transition-all duration-300 rounded-md px-3 py-1`}
              onClick={() => clickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {filteredProjects.slice(0, noOfProjectCard).map((item, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-black shadow-lg rounded-lg p-4 
              hover:-translate-y-2 hover:scale-105 transition-all duration-300
              flex flex-col items-center gap-y-2"
            >
              <img
                src={item.pic}
                alt=""
                className=" rounded-lg w-full aspect-[2/1] shadow-md"
              />
              <p className="text-lg text-black dark:text-white text-center font-semibold">
                {item.name}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2">
                {item.techs.map((i, ind) => (
                  <div
                    key={ind}
                    className="bg-[#6674cc] text-xs dark:bg-[#29347a] text-white px-3 py-1 w-fit rounded-xl"
                  >{`${i}`}</div>
                ))}
              </div>
              <p className="text-sm text-black dark:text-white">{item.desc}</p>
              <div className="flex items-center gap-x-4">
                <a
                  href={item.link}
                  target="_blank"
                  className="border border-[#6674cc] dark:border-[#29347a] rounded-md 
                text-xs sm:text-base px-3 py-1 text-black dark:text-white"
                >
                  Veiw Live App
                </a>
                <a
                  href={item.repoLink}
                  target="_blank"
                  className="bg-[#6674cc] dark:bg-[#29347a] border border-[#6674cc] 
                dark:border-[#29347a] rounded-md text-xs sm:text-base px-3 py-1 text-white"
                >
                  Veiw Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        {noOfProjectCard >= filteredProjects.length ? (
          <></>
        ) : (
          <div className="w-fit mx-auto pt-8">
            <button
              className="bg-[#6674cc] dark:bg-[#29347a] text-white py-1.5 px-4 rounded-lg"
              onClick={showMoreHandler}
            >
              Show More...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
