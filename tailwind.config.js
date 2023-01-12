/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Global
        black: "#000",
        white: "#fff",
        gray: "#ECEDEF",
        info: "#567EE5",
        // Main
        primary: "rgba(113,28,133,1)",
        secondary: "rgba(248,191,0,1)",
        // Text
        tblack: "#4A4A4A",
        tdanger: "#FA256A",
        tsuccess: "#19C941",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "Serif"],
      },
    },
  },
  plugins: [],
};
