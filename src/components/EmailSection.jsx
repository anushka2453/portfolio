"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset(); // clears form after success
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 gap-12 items-center px-6 xl:px-20 py-20 my-16">
      {/* Left Side */}
      <div>
        <section id="contact" className="px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
          Let&apos;s Connect
        </h2>
        </section>
        <p className="text-white leading-relaxed mb-8 max-w-lg">
          I’m always excited to explore opportunities where I can apply my web
          development skills and grow as a CSE student. Whether it’s a project,
          collaboration, or a future opportunity, I’d love to connect and create
          something impactful together.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/anushka2453"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full shadow-lg shadow-pink-500/30 transition duration-300"
          >
            <span>🌸</span> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anushka-srivastava-12353b320/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full shadow-lg shadow-purple-500/30 transition duration-300"
          >
            <span>💼</span> LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-600/20 p-10 rounded-3xl border border-pink-500/30 shadow-xl shadow-pink-500/20 backdrop-blur-sm">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <label htmlFor="email" className="text-lg font-semibold text-pink-400">
            Drop your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-black/40 border border-pink-500/40 text-white 
                       text-sm rounded-lg w-full p-3 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter your email..."
          />

          {/* Message Input */}
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            className="bg-black/40 border border-pink-500/40 text-white 
                       text-sm rounded-lg w-full p-3 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Write your message..."
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                       hover:opacity-90 text-white font-semibold rounded-lg 
                       py-3 px-6 mt-2 transition-all duration-300 shadow-lg"
          >
            Send Message 🚀
          </button>

          {/* Success Message */}
          {emailSubmitted && (
            <p className="text-green-400 text-sm mt-3 animate-pulse">
              ✅ Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
