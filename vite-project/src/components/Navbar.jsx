import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaTools /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white drop-shadow-md px-2 py-1 rounded">
          MyPortfolio
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-white px-3 py-1 rounded hover:bg-white/50 transition-colors flex items-center gap-2"
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </div>

        {/* Burger icon for mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            {/* Close button */}
            <button
              className="text-white text-2xl self-end m-4"
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>

            {/* Menu links */}
            <div className="flex flex-col space-y-4 mb-6 w-full items-center">
              {menuLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-white text-xl px-6 py-3 rounded hover:bg-black/50 transition-colors flex items-center gap-3 w-3/4 justify-start"
                  onClick={() => setOpen(false)}
                >
                  {link.icon} {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
