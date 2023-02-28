/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: "#1D1B1B",
          100: "#2E2A2A",
          200: "#3F3A3A",
          300: "#504A4A",
          400: "#615959",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#EDEDED",
          200: "#DBDBDB",
          300: "#C8C8C8",
          400: "#B6B6B6",
        },
      },
    },
  },
  plugins: [],
};
