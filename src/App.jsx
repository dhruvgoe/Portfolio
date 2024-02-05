import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "../src/components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import { FaRegCopyright } from "react-icons/fa6";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <About />
        <Education />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <div className="bg-white h-0.5 "></div>
        <div
          className="bg-[#6674cc] dark:bg-[#29347a] text-white
        flex justify-around items-center flex-col sm:flex-row "
        >
          <div className="flex justify-around items-center gap-x-2">
            All Rights Reserved <FaRegCopyright />
          </div>
          <div className="">Made with ❤️ by Dhruv</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
