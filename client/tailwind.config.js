/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: "#f39c12",
        secondary: {
          light: "#ffffff",
          dark: "#000000",
        },
        background: {
          light: "#ffffff",
          dark: "#212121",
        },
      },
    },
  },
  plugins: [],
};