import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto py-12 border-t border-white/5 bg-black/20" id="foot">
      <div className="container-custom flex flex-col items-center gap-6">
        <h2 className="text-xl font-bold text-white tracking-widest uppercase">Mohan Portfolio</h2>
        <div className="flex gap-6">
          <a
            href="https://github.com/mohanmeesala2005"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-all text-white hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-meesala-9b9936257/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-all text-white hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/mohanmeesala.05/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-all text-white hover:scale-110"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mohan Meesala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
