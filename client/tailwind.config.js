/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Primary color - a deep red that represents energy and strength
        primary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e", // Main primary color
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        // Secondary color - a slate gray for contrast and sophistication
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b", // Main secondary color
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Accent color - a gold/amber for highlights and calls-to-action
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Main accent color
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        // Background colors for light and dark modes
        background: {
          light: "#ffffff",
          dark: "#121212", // Deeper dark for better contrast
          paper: {
            light: "#f8fafc", // Light gray for card backgrounds
            dark: "#1e1e1e", // Slightly lighter than main dark
          },
        },
        // Text colors
        text: {
          light: {
            primary: "#0f172a",
            secondary: "#475569",
            disabled: "#94a3b8",
          },
          dark: {
            primary: "#f8fafc",
            secondary: "#cbd5e1",
            disabled: "#64748b",
          },
        },
        // Success, warning, error states
        success: {
          light: "#10b981",
          dark: "#34d399",
        },
        warning: {
          light: "#f59e0b",
          dark: "#fbbf24",
        },
        error: {
          light: "#ef4444",
          dark: "#f87171",
        },
      },
      boxShadow: {
        "sm-light": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "sm-dark": "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
        "md-light":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "md-dark":
          "0 4px 6px -1px rgba(255, 255, 255, 0.07), 0 2px 4px -1px rgba(255, 255, 255, 0.04)",
        "lg-light":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "lg-dark":
          "0 10px 15px -3px rgba(255, 255, 255, 0.05), 0 4px 6px -2px rgba(255, 255, 255, 0.03)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in-right": "slideInRight 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
