import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-gray-300 hover:text-white transition-colors ${isActive ? "text-blue-400" : ""}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="container-custom flex items-center justify-between">
        <Link
          className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
          to="/"
          onClick={() => setOpen(false)}
        >
          Mohan <span className="text-blue-500">Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <NavLink className={linkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClass} to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClass} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <a
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all text-xs font-semibold"
                href="#foot"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-gray-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-black/80 backdrop-blur-md border-b border-white/10 transform origin-top transition-transform duration-200 ease-out ${
            open ? "scale-y-100" : "scale-y-0 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <a
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all text-xs font-semibold"
                  href="#foot"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
