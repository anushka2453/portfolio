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

      <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Project 1 - ChatNova */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg 
          border border-white/20 hover:scale-105 transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
            🤖 ChatNova
          </h3>

          <p className="text-white/90 text-base leading-relaxed mb-6">
            A full-stack{" "}
            <span className="font-semibold text-pink-200">AI-powered chatbot</span>{" "}
            🧠 built with a Cohere-driven backend and a clean, responsive chat
            interface. Built using{" "}
            <span className="text-blue-200 font-semibold">
              Next.js, Node.js & REST APIs
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/anushka2453/chatnova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
              bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 
              hover:from-blue-500 hover:via-purple-500 hover:to-pink-400 transition-all"
            >
              🌸 View on GitHub
            </a>
            <a
              href="https://chatnova-hi9lw1wig-anushka-srivastava-s-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
              hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all"
            >
              🚀 Live Demo
            </a>
          </div>
        </motion.div>

        {/* Project 2 - Emoji Maker (untouched) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg 
          border border-white/20 hover:scale-105 transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
            😀 Emoji Maker
          </h3>

          <p className="text-white/90 text-base leading-relaxed mb-6">
            A fun project where you can create and customize{" "}
            <span className="font-semibold text-pink-200">emojis</span> 🎨 with
            different shapes, eyes, mouths, and accessories. Built using{" "}
            <span className="text-blue-200 font-semibold">HTML, CSS & JS</span>.
          </p>

          {/* GitHub Button */}
          <a
            href="https://github.com/anushka2453/Emoji_maker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
            bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
            hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 transition-all"
          >
            😀 View on GitHub
          </a>
        </motion.div>

        {/* Project 3 - Voice Calculator (Calcula) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg 
          border border-white/20 hover:scale-105 transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
            🎤 Voice Calculator
          </h3>

          <p className="text-white/90 text-base leading-relaxed mb-6">
            A sleek calculator that understands{" "}
            <span className="font-semibold text-pink-200">voice commands</span> 💬
            and performs calculations in real time, with a clean and intuitive
            frontend built using{" "}
            <span className="text-blue-200 font-semibold">Python, React & Web Speech API</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/anushka2453/calcula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
              bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 
              hover:from-blue-500 hover:via-purple-500 hover:to-pink-400 transition-all"
            >
              🌸 View on GitHub
            </a>
            <a
              href=" https://calcula-1.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
              hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all"
            >
              🚀 Live Demo
            </a>
          </div>
        </motion.div>

        {/* Project 4 - Blush */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg 
          border border-white/20 hover:scale-105 transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
            👗 Blush
          </h3>

          <p className="text-white/90 text-base leading-relaxed mb-6">
            A stylish{" "}
            <span className="font-semibold text-pink-200">fashion e-commerce</span>{" "}
            🛍️ storefront with product browsing, cart functionality, and a
            polished, modern UI. Built using{" "}
            <span className="text-blue-200 font-semibold">Next.js & Tailwind CSS</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/anushka2453/blush-fashion-ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
              bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
              hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 transition-all"
            >
              😀 View on GitHub
            </a>
            <a
              href="https://blush-fashion-ecommerce-bqi7.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-medium text-white shadow-lg 
              bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 
              hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-all"
            >
              🚀 Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}