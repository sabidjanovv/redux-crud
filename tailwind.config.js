import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rasm: "url('https://asiaplustj.info/sites/default/files/articles/295715/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2021-03-31_18-28-11.jpg')",
        rasm1: "url('assets/bg.webp')",
      },
    },
    colors: {
      ...colors,
      primary: "crimson",
      lorem: "#0f0",
    },
    fontFamily: {
      edu: ["Edu"],
      dancing: ["Dancing", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1180px",
      },
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [],
};
