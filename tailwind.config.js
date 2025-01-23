import { keyframes } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url('general-images/background-image.webp')",
      },
      colors: {
        "primary-colour": "#020413",
        "secondary-colour": "#a0c9f8",
        "text-colour": "#dde9f1",
      },
      fontFamily: {
        inter: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        blue: "0px 0px 40px 2px #000000",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translateY(0) translateX(-50px)" },
          "50%": { transform: "translateY(-10px) translateX(50px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
