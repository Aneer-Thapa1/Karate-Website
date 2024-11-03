import React from "react";
import Navbar from "./Navbar";
import background from "../assets/images/background.jpg";

const Hero = () => {
  return (
    <div
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Navbar />
    </div>
  );
};

export default Hero;
