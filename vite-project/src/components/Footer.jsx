import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-black/30 backdrop-blur-md mt-10">
      <p>© {new Date().getFullYear()} My Portfolio | Built with React & Tailwind</p>
    </footer>
  );
}
