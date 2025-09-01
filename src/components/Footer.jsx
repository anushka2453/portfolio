import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-fuchsia-500 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white shadow-inner">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <span className="text-2xl font-bold tracking-widest animate-pulse">
          LOGO
        </span>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-125"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-125"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-transform transform hover:scale-125"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-sm text-white">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
