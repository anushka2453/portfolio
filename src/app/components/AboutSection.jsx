"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-pink-100">
        <li>Programming Languages: C, C++, Java, Python, JavaScript</li>
        <li>Web Development: HTML, CSS, JavaScript, React.js, Next.js</li>
        <li>Databases: MySQL, MongoDB</li>
        <li>Data Structures & Algorithms (DSA)</li>
        <li>Version Control: Git, GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-pink-100">
        <li>Senior Secondary (12th Grade) – Jingle Bells Public School</li>
        <li>Secondary (10th Grade) – Jingle Bells Public School</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft skills",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-pink-100">
        <li>Team Collaboration</li>
        <li>Adaptability & Flexibility</li>
        <li>Time Management</li>
        <li>Effective Communication</li>
        <li>Leadership & Initiative</li>
        <li>Presentation Skills</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    // 👇 Added id="about" so navbar link works
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-12 items-center py-16 px-6 xl:px-20">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/about.jpeg"
            width={450}
            height={450}
            alt="About"
            className="rounded-2xl shadow-lg shadow-pink-500/30"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <h2 className="inline-block text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 text-transparent bg-clip-text mb-6">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-white leading-relaxed">
            A Computer Science student and Web Developer, exploring the world of
            modern frameworks, clean design, and programming languages to
            sharpen my skills and create impactful projects.
          </p>

          {/* Tabs */}
          <div className="flex flex-row gap-4 mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content with Animation */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-pink-500/40 shadow-md shadow-pink-500/20"
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
