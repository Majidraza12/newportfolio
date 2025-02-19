"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-16 sticky top-0 shadow-md px-6 flex justify-between items-center transition-all duration-300 z-50 ${
        scrolled ? "bg-black/30 backdrop-blur-md" : "bg-black"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-zinc-100">Portfolio</h1>
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
                activeItem === item ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
