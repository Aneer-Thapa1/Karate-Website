import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <nav className="flex h-20 bg-transparent ">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Memberships</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
