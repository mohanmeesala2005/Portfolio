import React from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { FileCode, Monitor, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Virat Kholi Clone",
    description: "A static clone of Virat Kohli's page built with HTML/CSS.",
    links: [
      {
        href: "https://mohanmeesala2005.github.io/mohan-edc-2/",
        label: "Live",
      },
    ],
    Icons: [FileCode, Monitor],
  },
  {
    title: "EDC Website Home Page Clone",
    description: "Homepage clone for EDC site showcasing layout and styles.",
    links: [
      { href: "https://mohanmeesala2005.github.io/edcsite/", label: "Live" },
    ],
    Icons: [FileCode, Monitor],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects_section modern-page">
      <div className="projects_title_wrap">
        <p className="projects_title">Projects</p>
        <p className="projects_description">
          These are the Projects I've worked on
        </p>
      </div>

      <div className="projects_grid">
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
