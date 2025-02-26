// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const isDark = theme === "dark";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".navbar-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Schedule", path: "/schedule" },
    { name: "Instructors", path: "/instructors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container fixed w-full top-0 z-50 font-poppins">
      {/* Main Navbar */}
      <div
        className={`flex items-center justify-between px-4 md:px-8 py-4 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? "bg-background-dark/95 shadow-md-dark backdrop-blur-sm"
              : "bg-background-light/95 shadow-md-light backdrop-blur-sm"
            : isDark
            ? "bg-background-dark"
            : "bg-background-light"
        } ${isDark ? "text-text-dark-primary" : "text-text-light-primary"}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-semibold tracking-wider relative group">
            <span className="text-primary-600 transition-all duration-300 group-hover:text-primary-500">
              VISION
            </span>
            <span
              className={`font-light transition-all duration-300 ${
                isDark ? "text-text-dark-primary" : "text-text-light-primary"
              }`}
            >
              {" "}
              MARTIAL ART
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name);
              }}
              className="relative group py-2 overflow-hidden"
            >
              <span
                className={`${
                  activeLink === link.name
                    ? "text-primary-500"
                    : isDark
                    ? "text-text-dark-secondary"
                    : "text-text-light-secondary"
                } font-medium transition-colors duration-300 hover:text-primary-500`}
              >
                {link.name}
              </span>

              {/* Active indicator - improved animation */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transition-all duration-300 transform ${
                  activeLink === link.name
                    ? "translate-x-0"
                    : "-translate-x-full group-hover:translate-x-0"
                }`}
              ></span>
            </a>
          ))}

          {/* Theme Toggle Button - Enhanced */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark
                ? "bg-secondary-800 hover:bg-secondary-700"
                : "bg-secondary-200 hover:bg-secondary-300"
            } overflow-hidden`}
            aria-label="Toggle dark mode"
          >
            <div
              className={`w-6 h-6 rounded-full transition-all duration-500 ${
                isDark
                  ? "bg-background-dark border-2 border-text-dark-primary shadow-md transform translate-x-1 -translate-y-1"
                  : "bg-accent-400 transform scale-75"
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu Button - Enhanced */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 rounded-full ${
              isDark ? "bg-text-dark-primary" : "bg-text-light-primary"
            } ${isMenuOpen ? "rotate-45 translate-y-2 bg-primary-500" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 rounded-full ${
              isDark ? "bg-text-dark-primary" : "bg-text-light-primary"
            } ${isMenuOpen ? "opacity-0 translate-x-3" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 rounded-full ${
              isDark ? "bg-text-dark-primary" : "bg-text-light-primary"
            } ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-primary-500" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Improved animation */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with improved opacity transition */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar with improved animation */}
        <div
          className={`absolute right-0 top-0 h-full w-72 shadow-lg-dark transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } ${
            isDark
              ? "bg-background-paper-dark border-l border-secondary-800"
              : "bg-background-paper-light border-l border-secondary-200"
          } animate-slide-in-right`}
        >
          <div className="flex flex-col items-center justify-center h-full py-8 px-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name);
                }}
                className={`w-full text-center py-4 my-1 font-medium relative overflow-hidden transition-all duration-300 ${
                  activeLink === link.name
                    ? isDark
                      ? "text-primary-400"
                      : "text-primary-600"
                    : isDark
                    ? "text-text-dark-secondary hover:text-text-dark-primary"
                    : "text-text-light-secondary hover:text-text-light-primary"
                } ${isMenuOpen ? "animate-fade-in" : ""}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="relative z-10">{link.name}</span>

                {/* Active background */}
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    activeLink === link.name
                      ? isDark
                        ? "bg-primary-900/20"
                        : "bg-primary-100/50"
                      : "bg-transparent hover:bg-secondary-100/10"
                  } rounded-md`}
                ></span>

                {/* Active indicator - left border */}
                {activeLink === link.name && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-primary-500"></span>
                )}
              </a>
            ))}

            {/* Theme Toggle Button (Mobile) - Enhanced */}
            <div
              className="mt-8 flex items-center justify-center w-full border-t border-b py-4 px-2 rounded-md transition-all duration-300 animate-fade-in"
              style={{
                animationDelay: `${navLinks.length * 0.05 + 0.1}s`,
                borderColor: isDark
                  ? "rgb(51, 65, 85, 0.5)"
                  : "rgb(203, 213, 225, 0.5)",
              }}
            >
              <span
                className={
                  isDark
                    ? "text-text-dark-secondary"
                    : "text-text-light-secondary"
                }
              >
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
              <button
                onClick={toggleTheme}
                className={`ml-auto w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                  isDark
                    ? "bg-secondary-700 justify-end"
                    : "bg-secondary-300 justify-start"
                }`}
                aria-label="Toggle dark mode"
              >
                <div
                  className={`w-5 h-5 rounded-full mx-0.5 transition-all duration-300 ${
                    isDark ? "bg-primary-500 shadow-md" : "bg-accent-500"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
