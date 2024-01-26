import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "../src/components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
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
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
