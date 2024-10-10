/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-colour": "#020413",
        "secondary-colour": "#a0c9f8",
        "text-colour": "#dde9f1",
      },
      fontFamily: {
        inter: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
