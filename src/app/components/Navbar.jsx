"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 backdrop-blur-lg bg-gradient-to-r from-pink-400/80 via-purple-500/80 to-fuchsia-600/80 shadow-lg">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl md:text-4xl font-extrabold text-white tracking-wide hover:tracking-widest transition-all duration-300"
        >
          LOGO
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-10 text-lg">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative">
                <a
                  href={link.path}
                  className="text-white font-medium hover:text-pink-200 transition"
                >
                  {link.title}
                </a>
                {/* Underline effect */}
                <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
