// Hero.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after mount
  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-black/60" : "bg-black/40"
          }`}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3"
          alt="Martial arts"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Welcome text */}
          <div
            className={`transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-red-500 font-medium text-sm uppercase border-b border-red-500 inline-block pb-1 mb-4">
              WELCOME TO VISION MARTIAL ART
            </p>
          </div>

          {/* Main headline */}
          <div className="relative h-40">
            <div
              className={`absolute transition-all duration-500 ${
                currentSlide === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-5xl font-bold text-white mb-2">
                Discover Your Inner{" "}
                <span className="text-red-500">Strength</span>
              </h1>
              <p className="text-gray-300 text-xl">
                From beginner to advanced training programs
              </p>
            </div>

            <div
              className={`absolute transition-all duration-500 ${
                currentSlide === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-5xl font-bold text-white mb-2">
                Learn From Elite <span className="text-red-500">Masters</span>
              </h1>
              <p className="text-gray-300 text-xl">
                Train with internationally certified instructors
              </p>
            </div>

            <div
              className={`absolute transition-all duration-500 ${
                currentSlide === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-5xl font-bold text-white mb-2">
                Build Discipline & <span className="text-red-500">Focus</span>
              </h1>
              <p className="text-gray-300 text-xl">
                Transform your mind and body through martial arts
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 mt-8 transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-medium transition-all duration-300">
              Start Training Today
            </button>

            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded font-medium transition-all duration-300 flex items-center gap-2 group">
              <span>View Programs</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Slide indicators */}
          <div
            className={`flex gap-2 mt-8 transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <button
              onClick={() => setCurrentSlide(0)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === 0 ? "w-8 bg-red-500" : "w-2 bg-gray-400"
              }`}
              aria-label="Slide 1"
            ></button>
            <button
              onClick={() => setCurrentSlide(1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === 1 ? "w-8 bg-red-500" : "w-2 bg-gray-400"
              }`}
              aria-label="Slide 2"
            ></button>
            <button
              onClick={() => setCurrentSlide(2)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === 2 ? "w-8 bg-red-500" : "w-2 bg-gray-400"
              }`}
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>

      {/* Bottom feature section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div
              className={`flex items-center gap-4 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-10 h-10 flex items-center justify-center text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Expert Instructors</h3>
                <p className="text-gray-300 text-sm">
                  Learn from certified martial arts masters
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className={`flex items-center gap-4 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="w-10 h-10 flex items-center justify-center text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  Championship Training
                </h3>
                <p className="text-gray-300 text-sm">
                  Programs designed for all skill levels
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className={`flex items-center gap-4 transition-all duration-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="w-10 h-10 flex items-center justify-center text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  15+ Years Experience
                </h3>
                <p className="text-gray-300 text-sm">
                  Trusted training center since 2008
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
