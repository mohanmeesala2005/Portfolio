import React from "react";
import { Github, Linkedin, Twitter, User } from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container-custom" id="home">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="glass-card p-10 space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Hi, I am
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-200">
                Mohan Meesala
              </span>
            </h1>
            <h4 className="text-xl text-sky-300 font-medium">
              Student at NIT DURGAPUR
            </h4>
            <div className="flex items-center gap-6 pt-4">
              <a
                href="mailto:mohanmeesalawork@gmail.com"
                className="btn-primary"
                rel="noreferrer"
              >
                Reach Out
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/mohanmeesala2005"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohan-meesala-9b9936257/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/MohanMeesala05/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card p-8 rounded-full flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
              <User size={160} className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="section-title">About Me</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-2xl font-semibold leading-relaxed text-blue-100 border-l-4 border-blue-500 pl-6">
              <p>
                Hi, I'm Mohan,
                <br />
                <span className="text-white">nice to meet you.</span>
                <br />
                <span className="text-sm font-normal text-sky-300 mt-4 block uppercase tracking-widest">
                  Digital Craftsman
                </span>
              </p>
            </div>
            <div className="text-gray-300 leading-relaxed text-lg">
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
