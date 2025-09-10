"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-7 text-center lg:text-left"
        >
          <h1 className="text-white mb-6 text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-600 drop-shadow-lg">
              Hey there, I&apos;m ANUSHKA SRIVASTAVA
            </span>

            {/* Typing animation */}
            <TypeAnimation
              sequence={[
                "Web Developer 💻",
                1500,
                "CSE Student 🎓",
                1500,
                "Creative & Innovative ",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block mt-3 text-2xl lg:text-4xl text-pink-400 drop-shadow-md"
            />
          </h1>

          {/* About text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-white text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20"
          >
            A passionate and creative developer who loves transforming ideas
            into interactive, user-friendly web experiences with a touch of
            innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5"
          >
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300">
              Hire Me 🚀
            </button>

            {/* CV Download Button */}
            {/* CV Download Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:opacity-90 transition duration-300"
            >
              <span className="block bg-[#121212] text-white rounded-full px-6 py-2">
                View My CV 📄
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-[260px] h-[260px] lg:w-[420px] lg:h-[420px]">
            {/* Glowing Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 animate-pulseGlow blur-md"></div>

            {/* Floating Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-pink-200 shadow-2xl animate-float">
              <Image
                src={"/images/profile.jpg"}
                alt="My Profile"
                width={500}
                height={500}
                // fill
                // style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background floating blobs */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-40 right-40 w-28 h-28 bg-blue-500/20 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
};

export default HeroSection;
