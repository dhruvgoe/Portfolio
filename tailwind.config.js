/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        space: ["Space Mono", "sans-serif"],
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};
