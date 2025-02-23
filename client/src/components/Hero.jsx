import React, { useEffect } from "react";
import images from "../constants/images";

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".hero-content")?.classList.add("animate-in");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden poppins">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slowZoom"
        style={{
          backgroundImage: `url(${images.hero})`,
          filter: "brightness(0.9)",
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-content opacity-0 translate-y-8">
        <div className="relative w-full max-w-4xl">
          {/* Main heading container with padding for strike lines */}
          <div className="relative px-32">
            {/* Strike lines with animation */}
            <div className="absolute left-0 top-1/2 w-16 h-[3px] bg-[#f29d38] -translate-y-1/2 animate-slideInLeft" />
            <div className="absolute right-0 top-1/2 w-16 h-[3px] bg-[#f29d38] -translate-y-1/2 animate-slideInRight" />

            {/* Main heading */}
            <h1
              className="text-5xl md:text-7xl font-black tracking-wider flex flex-wrap justify-center items-center gap-4 md:gap-6"
              style={{
                color: "white",
                WebkitTextStroke: "3px #000",
                textShadow: `
                  3px 3px 0 #000,
                  -2px -2px 0 #000,
                  2px -2px 0 #000,
                  -2px 2px 0 #000,
                  0 2px 0 #000,
                  2px 0 0 #000,
                  0 -2px 0 #000,
                  -2px 0 0 #000,
                  0 0 20px rgba(0,0,0,0.4)
                `,
              }}
            >
              <span className="hover:scale-105 transition-transform duration-300 animate-slideInLeft">
                VISION
              </span>
              <span
                className="text-[#f29d38] hover:scale-105 transition-transform duration-300 animate-slideInTop"
                style={{
                  WebkitTextStroke: "3px #000",
                  filter: "drop-shadow(0 0 15px rgba(242, 157, 56, 0.4))",
                }}
              >
                MARTIAL
              </span>
              <span className="hover:scale-105 transition-transform duration-300 animate-slideInRight">
                ART
              </span>
            </h1>

            {/* Corner accents */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f29d38] -translate-x-6 transform rotate-45 animate-pulse" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f29d38] translate-x-6 transform rotate-45 animate-pulse" />
          </div>
        </div>

        {/* Modern Button with hover effects */}
        <button
          className="mt-12 group relative px-8 py-4 bg-[#f29d38] text-white font-semibold rounded-lg
          overflow-hidden transition-all duration-300 ease-out
          hover:bg-[#f29d38]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#f29d38]/20
          focus:outline-none focus:ring-2 focus:ring-[#f29d38]/50 focus:ring-offset-2 focus:ring-offset-black/20
          animate-slideInBottom"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
          />
          <span className="relative inline-flex items-center gap-2">
            Explore More
            <svg
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
