import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <div className="w-screen flex flex-col bg-background ">
      <div className="h-screen flex justify-center items-center">
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
