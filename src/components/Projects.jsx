import React, { useEffect, useState } from "react";
import notesApp from "../assets/project assets/notesApp.png";
import speechApp from "../assets/project assets/speechApp.png";
import foodieApp from "../assets/project assets/foodieApp.png";

const Projects = () => {
  const projects = [
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notesApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notesApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notesApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notesApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notesApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Notes App",
      link: "https://notes-app-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Notes-App-React",
      pic: notesApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Speech-To-Text App",
      link: "https://speech-to-text-react-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Speech-To-Text-React",
      pic: speechApp,
      techs: ["REACT JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Web App's",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
    },
    {
      name: "Project Foodie",
      link: "https://project-foodie-tailwind-by-dhruvgoe.vercel.app/",
      repoLink: "https://github.com/dhruvgoe/Project-Foodie-Tailwind",
      pic: foodieApp,
      techs: ["JS", "TAILWIND"],
      category: "Machine Learning",
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
  }, [activeFilter,noOfProjectCard]);

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
          {filteredProjects.slice(0,noOfProjectCard).map((item, index) => (
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
              <p className="text-sm text-black dark:text-white">
                The app allows users to create, edit, and delete notes using a
                user-friendly interface. The app also uses local storage to
                persist the notes data across sessions.
              </p>
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
