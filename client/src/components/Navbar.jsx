import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Membership", "Blog", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex w-full h-20 items-center px-4 lg:px-12 bg-transparent">
        {/* Left Nav Items - Desktop Only */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item}
              className="text-white cursor-pointer font-light text-lg hover:text-gray-300 transition-colors"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-white text-2xl font-light mr-auto lg:mr-0">
          Vision Martial Art
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-white/10 rounded-full p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col px-4">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-white py-4 text-lg font-light border-b border-white/10 hover:text-gray-300 transition-colors text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
