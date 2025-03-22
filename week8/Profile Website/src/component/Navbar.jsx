import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full text-[#570228] px-6 py-4 flex flex-wrap justify-between items-center bg-[#FFBCDA]">
      {/* Title */}
      <div className="text-2xl md:text-3xl font-bold">
        <Link to="/">Shayanis</Link>
      </div>

      {/* Menu */}
      <div className="flex flex-wrap gap-4 md:gap-15 font-semibold text-base md:text-lg">
        <NavLink to="/" className="hover:text-white">Home</NavLink>
        <NavLink to="/about" className="hover:text-white">About Me</NavLink>
        <NavLink to="/gallery" className="hover:text-white">Gallery</NavLink>
      </div>

      {/* Button */}
      <button className="bg-[#FA9EBC] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#ffc8d9] text-sm md:text-base cursor-pointer">
        Contact
      </button>
    </nav>
  );
}

export default Navbar;
