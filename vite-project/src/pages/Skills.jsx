import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "ReactJS", level: 85 },
  { name: "NodeJS", level: 80 },
  { name: "ExpressJS", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "SQL", level: 70 },
  { name: "Python", level: 80 },
  { name: "Git & GitHub", level: 85 },
  { name: "Vercel & Render", level: 70 },
];

export default function Skills() {
  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-16 py-12 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center md:text-left text-white">
        Skills & Tech Stack
      </h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-white text-sm sm:text-base md:text-lg font-medium">
                {skill.name}
              </span>
              <span className="text-white text-sm sm:text-base md:text-lg font-medium">
                {skill.level}%
              </span>
            </div>
            <motion.div
              className="w-full bg-gray-800 rounded-full h-4 sm:h-5 md:h-6"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 + index * 0.1, type: "spring", stiffness: 50 }}
            >
              <div className="h-4 sm:h-5 md:h-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
