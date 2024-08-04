/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1600px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D1223F",
        },
        secand: {
          DEFAULT: "#231F20",
        },
        three: {
          DEFAULT: "#808184",
        },
      },
    },
  },
  fontFamily: {
    custom: ["Downlink", "sans-serif"],
  },

  plugins: [],
};
