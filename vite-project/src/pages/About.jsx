import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 md:mt-[70px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Container with background */}
      <div className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          About Me
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg leading-relaxed text-gray-600">
          Hi! I’m Atchaya Chandran, a passionate MERN Full-Stack Developer. 
          I recently completed a full-stack development course and am eager to apply my skills 
          in building dynamic and responsive web applications. I enjoy working with MongoDB,
          Express.js, React, and Node.js, and I’m a fresher, eager to start my journey as a developer
          and make a real impact in the tech world. I love transforming ideas into scalable, user-friendly projects.
          I’m a fast learner, a problem solver, and always excited to explore new technologies. I’m looking for 
          opportunities to grow as a developer and contribute to meaningful projects.
        </p>
      </div>
    </motion.div>
  );
}
