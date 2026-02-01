import React from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { FileCode, Monitor, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "EventHub",
    description: "A full-stack event management platform to address event coordination challenges faced by organizations in managing and streamlining events.",
    links: [
      {
        href: "https://github.com/mohanmeesala2005/EventHub.git",
        label: "GitHub Link",
      },
    ],
    Icons: [FileCode, Monitor],
  },
  {
    title: "Intelligent ChatBot",
    description: "AI-driven retrieval and generation (RAG) to build intelligent chat responses.",
    links: [
      { href: "https://github.com/mohanmeesala2005/RAG_Chatbot.git", label: "Github Link" },
    ],
    Icons: [FileCode, Monitor],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container-custom py-20 min-h-[calc(100vh-80px)]">
      <div className="text-center space-y-4 mb-20">
        <h2 className="section-title">Selected Projects</h2>
        <p className="text-sky-300 text-lg max-w-2xl mx-auto">
          A showcase of some of my technical work and software development journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            links={p.links}
            Icons={p.Icons}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
