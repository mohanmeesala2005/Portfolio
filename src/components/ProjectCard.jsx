import React from "react";

export default function ProjectCard({
  title,
  description,
  links = [],
  Icons = [],
}) {
  return (
    <article className="card__project modern">
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
        <div className="project_techstack">
          {Icons.map((Icon, i) => (
            <Icon key={i} size={20} style={{ marginRight: 12 }} />
          ))}
        </div>
        <div className="project_links">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
