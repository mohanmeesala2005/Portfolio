import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="container-custom flex items-center justify-between">
        <Link className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors" to="/">
          Mohan <span className="text-blue-500">Portfolio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <NavLink 
                className={({ isActive }) => `text-gray-300 hover:text-white transition-colors ${isActive ? 'text-blue-400' : ''}`} 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white transition-colors" href="/#about">
                About
              </a>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => `text-gray-300 hover:text-white transition-colors ${isActive ? 'text-blue-400' : ''}`} 
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => `text-gray-300 hover:text-white transition-colors ${isActive ? 'text-blue-400' : ''}`} 
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <a className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all text-xs font-semibold" href="#foot">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu button should go here if needed */}
      </nav>
    </header>
  );
}
