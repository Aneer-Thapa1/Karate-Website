import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-center bg-transparent h-[80px] items-center">
      <div className="flex w-[97%] justify-between text-white">
        <ul className="flex px-6 py-3 gap-9 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg text-xl">
          <li className="hover:text-yellow cursor-pointer transition-colors">
            About
          </li>
          <li className="hover:text-yellow cursor-pointer transition-colors">
            Memberships
          </li>
          <li className="hover:text-yellow cursor-pointer transition-colors">
            Blog
          </li>
          <li className="hover:text-yellow cursor-pointer transition-colors">
            Contact
          </li>
        </ul>
        <h4 className="font-extrabold text-5xl ">Vison Martial Art</h4>
        <div className="flex justify-center items-center  bg-white rounded py-1 px-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
