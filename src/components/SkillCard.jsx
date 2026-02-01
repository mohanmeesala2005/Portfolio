import React from "react";

export default function SkillCard({ title, image }) {
  return (
    <div className="glass-card group flex flex-col items-center gap-6 p-8 w-44 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all cursor-default">
      <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
        />
      </div>
      <div className="text-sm font-bold tracking-widest text-gray-400 group-hover:text-white uppercase transition-colors">
        {title}
      </div>
    </div>
  );
}
