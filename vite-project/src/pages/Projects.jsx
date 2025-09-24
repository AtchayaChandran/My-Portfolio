import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mana Ruchulu Website",
    desc: "Restaurant website built with React, Tailwind, and hosted on Render",
    link: "https://mana-ruchulu-frontend.onrender.com/login"
  },
  {
    title: "NYKAA-FASHION",
    desc: "E-commerce fashion website built with HTML, CSS, and JavaScript",
    link: "https://atchayachandran.github.io/NYKAA-FASHION/"
  },
  {
    title: "Netflix Clone",
    desc: "A Netflix clone built with React, Tailwind CSS, and hosted on Vercel",
    link: "https://netflix-q79j.vercel.app/"
  },
  {
    title: "Apple Clone",
    desc: "An Apple Store clone built with React and hosted on Vercel",
    link: "https://apple-clone-ebon-sigma.vercel.app/"
  }
];

export default function Projects() {
  return (
    <motion.div
      className="px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="bg-white/40 p-6 rounded-2xl shadow-lg cursor-pointer">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700">{proj.title}</h3>
              <p className="text-sm md:text-base text-gray-100">{proj.desc}</p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
