import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 space-y-6 py-16 mt-[100px]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-snug text-white">
        Hellooo!!, I'm Atchaya Chandran
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl max-w-2xl mx-auto text-gray-600 font-medium">
        MERN Full-Stack Developer | Fresher | Open to Opportunities
      </p>

      {/*----------------Wrap button in Link----------------*/}
      <Link to="/projects">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-black rounded-full shadow-lg text-white text-sm sm:text-base md:text-lg lg:text-xl"
        >
          Explore My Work
        </motion.button>
      </Link>
    </motion.div>
  );
}
