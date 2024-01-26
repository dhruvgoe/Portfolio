import React from "react";
import useTheme from "../contexts/ThemeContext";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const ThemeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  function clickHandler() {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  return (
    <button onClick={clickHandler} className="text-lg xs:text-2xl">
      {themeMode === "light" ? (
        <FaRegMoon className="text-[#6674cc]" />
      ) : (
        <FiSun className="text-white" />
      )}
    </button>
  );
};

export default ThemeButton;
