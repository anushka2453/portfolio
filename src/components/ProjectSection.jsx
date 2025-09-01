"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="px-6 py-20 lg:py-28 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-14 text-white drop-shadow-lg">
        🌸 My Projects
      </h2>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg 
        border border-white/20 hover:scale-105 transition-transform"
      >
        <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
          🎤 Voice Calculator
        </h3>

        <p className="text-white/90 text-base leading-relaxed mb-6">
          A magical calculator that understands{" "}
          <span className="font-semibold text-pink-200">voice commands</span> 💬
          and performs arithmetic operations. Built with{" "}
          <span className="text-blue-200 font-semibold">JavaScript</span>.
        </p>

        {/* GitHub Button */}
        <a
          href="https://github.com/anushka2453/voicecalculator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
          bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 
          hover:from-blue-500 hover:via-purple-500 hover:to-pink-400 transition-all"
        >
          🌸 View on GitHub
        </a>
      </motion.div>
    </section>
  );
}
