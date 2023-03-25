const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
        sans: ["var(--font-neueHass)", ...fontFamily.sans],
      },
    },
    screens: {
      mobile: { max: "479px" },

      tablet: { max: "767px" },

      laptop: { max: "1023px" },

      desktop: { max: "1279px" },
    },
  },
  plugins: [],
};
