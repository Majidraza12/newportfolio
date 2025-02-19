'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="h-16 bg-b text-zinc-100 sticky top-0 shadow-md px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="ml-1 h-2 w-2 bg-blue-500 rounded-full"></div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`relative px-1 py-2 transition-all duration-300 ${
              activeItem === item
                ? "text-white"
                : "text-zinc-400 hover:text-zinc-100"
            }`}
          >
            <span className="relative z-10">{item}</span>

            {/* Simple underline with transition */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out ${
                activeItem === item ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
