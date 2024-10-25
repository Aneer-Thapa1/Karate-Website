import React from "react";
import backgroundImage from "../assets/images/background.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="relative z-10 flex flex-col h-screen">
        <Navbar />
        <div className="flex justify-left h-[90vh] items-center">
          <div className="ml-16">
            <p className="text-[68px] font-extrabold text-white uppercase">
              Empower Your Body, <br /> Master Your Mind
            </p>
            <button className="bg-yellow px-8 py-4 text-white text-xl flex items-center justify-center gap-3 rounded transition-all group">
              Explore More
              <span className="bg-white p-2 rounded-full transform group-hover:translate-x-1 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
