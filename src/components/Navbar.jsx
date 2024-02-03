import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import ThemeButton from "./ThemeButton";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [ismenuOpen, setIsMenuopen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuopen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (ismenuOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.remove("overflow-y-auto");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.add("overflow-y-auto");
    }
  }, [ismenuOpen]);

  function menuHandler() {
    setIsMenuopen((prev) => !prev);
  }

  const navItems = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Skills",
      path: "#skills",
    },
    {
      title: "Education",
      path: "#education",
    },
    {
      title: "Experience",
      path: "#experience",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-[#f7f8fc] dark:bg-[#131516] py-6 xs:py-3 shadow shadow-[#00000022] dark:shadow-[#ffffff65]">
        <div className="w-11/12 md:10/12 max-w-7xl mx-auto flex items-center justify-between">
          {/* Part 1 */}
          <div className="flex items-center gap-x-3 text-[#6674cc]">
            <div className="text-4xl xs:text-6xl">
              <FaCode />
            </div>
            <div className="text-xl xs:text-3xl font-semibold tracking-wider pb-1 select-none">
              <span className="text-black dark:text-white pr-2">DHRUV</span>GOEL
            </div>
          </div>

          {/* Part 2 */}
          <div
            className="text-black dark:text-white items-center gap-x-6 tracking-wide text-xl 
          hidden lg:flex"
          >
            {navItems.map((item, index) => (
              <a
                href={item.path}
                key={index}
                className="hover:font-bold transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Part 3 */}
          <div className="flex items-center gap-x-4">
            <button
              className="text-xl xs:text-3xl text-black dark:text-white block lg:hidden"
              onClick={menuHandler}
            >
              {ismenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
            <ThemeButton />
          </div>
        </div>
      </div>

      <div
        className={`w-full z-50 fixed bottom-0 top-[84px] flex justify-center items-center 
      backdrop-blur-sm bg-[#f7f8fc90] dark:bg-[#131516c6] ${
        ismenuOpen ? "translate-x-0" : "translate-x-full"
      }
      transition-all duration-300 z-50`}
      >
        <div
          className="flex flex-col items-center gap-y-1 tracking-wide text-xl font-semibold
        text-black dark:text-white "
        >
          {navItems.map((item, index) => (
            <a
              href={item.path}
              key={index}
              onClick={() => setIsMenuopen(false)}
              className="hover:bg-[#6674cc] hover:dark:bg-[#29347a] hover:text-white py-1 px-3 rounded-md transition-all duration-200"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
