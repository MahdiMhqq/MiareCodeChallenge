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
        primary: "#711c85",
        secondary: "rgba(248,191,0,1)",
        // Text
        tblack: "#4A4A4A",
        tdanger: "#FA256A",
        tsuccess: "#19C941",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "Serif"],
      },
      fontSize: {
        //HEADINGS
        h1: ["2rem", "2.5rem"],
        h2: ["1.5rem", "2rem"],
        h3: ["1.25rem", "2rem"],
        h4: ["1.125rem", "1.5rem"],
        h5: ["1rem", "1.5rem"],
        h6: ["0.75rem", "1rem"],
        //SUBTITLE
        sub1: ["1.125rem", "1.5rem"],
        sub2: ["1rem", "1.5rem"],
        sub3: ["0.75rem", "1rem"],
        //PARAGRAPH
        par: ["0.875rem", "1.5rem"],
        //BUTTON
        button: ["0.875rem", "1.5rem"],
        //CAPTION
        caption: ["0.625rem", "1rem"],
        //OVERLINE
        overline: ["0.5rem", "1rem"],
      },
      screens: {
        xxs: "360px",
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
