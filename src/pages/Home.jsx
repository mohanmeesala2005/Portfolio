import React from "react";
import {
  Github,
  Linkedin,
  FileText,
  Folder,
  Mail,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container-custom min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <header
        id="home"
        className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
        aria-label="Home hero"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative w-full max-w-5xl text-center space-y-8 sm:space-y-10">

          {/* Main heading */}
          <div className="space-y-4">
            <span className="text-lg sm:text-xl md:text-2xl text-sky-300/90 font-medium max-w-2xl mx-auto">Hi I'm</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 animate-gradient">
                Mohan Meesala
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-sky-300/90 font-medium max-w-2xl mx-auto">
              Full-Stack Developer & Student at{" "}
              <span className="text-blue-400 font-semibold">NIT Durgapur</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Crafting elegant solutions to complex problems. Passionate about
            building scalable applications and exploring emerging technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:mohanmeesalawork@gmail.com"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 w-full sm:w-auto justify-center"
              rel="noreferrer"
            >
              <Mail size={20} />
              Get In Touch
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="/projects"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center"
              aria-label="View Projects"
            >
              <Code2 size={20} />
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <nav className="pt-8" aria-label="Social links">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/5 backdrop-blur-md p-2.5 rounded-2xl border border-white/10">
              <a
                href="https://github.com/mohanmeesala2005"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github
                  size={20}
                  className="text-blue-300 group-hover:text-blue-200 transition-colors"
                />
                <span className="text-sm font-medium text-gray-100 group-hover:text-white transition-colors">
                  GitHub
                </span>
              </a>

              <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

              <a
                href="https://www.linkedin.com/in/mohan-meesala-9b9936257/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={20}
                  className="text-blue-300 group-hover:text-blue-200 transition-colors"
                />
                <span className="text-sm font-medium text-gray-100 group-hover:text-white transition-colors">
                  LinkedIn
                </span>
              </a>

              <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

              <a
                href="https://drive.google.com/file/d/1yzYxl6jdvj0UWXY5gYsvqAAwJvQqsGzb/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
                aria-label="Download Resume"
              >
                <FileText
                  size={20}
                  className="text-blue-300 group-hover:text-blue-200 transition-colors"
                />
                <span className="text-sm font-medium text-gray-100 group-hover:text-white transition-colors">
                  Resume
                </span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Introduction */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-sky-500 rounded-full"></div>
                <div className="pl-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-100 leading-relaxed mb-4">
                    Hi, I'm Mohan — nice to meet you.
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    I build thoughtful, maintainable software that solves real
                    problems. I enjoy working across the stack and focus on
                    creating fast, accessible, and delightful user experiences.
                  </p>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  What I Bring
                </h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Clean, maintainable code with strong engineering
                      fundamentals
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed">
                      User-centered design with emphasis on performance and
                      accessibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Collaborative mindset with continuous learning and growth
                    </span>
                  </li>
                </ul>
                <a
                  href="mailto:mohanmeesalawork@gmail.com"
                  className="inline-flex items-center justify-center gap-2 my-6 px-6 py-3.5 border border-white/20 text-gray-100 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              {/* Recent Work Card */}
              <div className="group bg-gradient-to-br from-blue-500/10 via-white/5 to-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Code2 size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Recent Work
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Built several web applications and developer tools for
                      learning and small businesses — focused on React, Node.js,
                      and modern web technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  <Folder size={20} />
                  View Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
                  </div>
                </div>
              </div>
              {/*Achivement Card*/}
              <div className="group bg-gradient-to-br from-blue-500/10 via-white/5 to-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Code2 size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Achivements
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Secured All India Rank 18 in Amazon Machine Learning Challenge 2025.
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Solved 350+ algorithmic problems on LeetCode demonstrating proficiency in DSA and competitive programming.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
