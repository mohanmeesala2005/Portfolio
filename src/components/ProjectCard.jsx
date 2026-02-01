import React from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  links = [],
  Icons = [],
}) {
  return (
    <article className="glass-card overflow-hidden group hover:border-blue-500/50">
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-sky-400">
            {Icons.map((Icon, i) => (
              <Icon key={i} size={20} />
            ))}
          </div>
        </div>
        
        {description && (
          <p className="text-gray-400 leading-relaxed min-h-[4rem]">
            {description}
          </p>
        )}
        
        <div className="flex gap-4 pt-2">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-2 group/link"
            >
              <span className="border-b border-transparent group-hover/link:border-blue-400 transition-all">
                {l.label}
              </span>
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
