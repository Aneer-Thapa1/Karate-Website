/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "rgba(221, 202, 37, 0.8)",
        glass: "rgb(255, 255, 255, 0.3);",
      },
      fontFamily: {
        rubikWetPaint: ['"Rubik Wet Paint"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
