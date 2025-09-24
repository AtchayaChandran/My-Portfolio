import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
      className="px-4 max-w-lg mx-auto bg-black/30 p-8 rounded-2xl space-y-6 mt-[80px]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
        Contact Me
      </h2>

      <div className="space-y-4 text-white">
        <div className="flex items-center gap-4">
          <FaEnvelope className="w-6 h-6 text-purple-400" />
          <span>achurama2003@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaLinkedin className="w-6 h-6 text-purple-400" />
          <a
            href="https://www.linkedin.com/in/atchaya--chandran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaGithub className="w-6 h-6 text-purple-400" />
          <a
            href="https://github.com/AtchayaChandran?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-300">
        I am actively seeking opportunities as a MERN Full-Stack Developer.  
        Feel free to reach out to discuss potential job openings.
      </p>
    </motion.div>
  );
}
