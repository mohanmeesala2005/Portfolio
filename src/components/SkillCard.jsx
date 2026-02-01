import React from "react";

export default function SkillCard({ title, Icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <Icon size={48} />
      </div>
      <div className="skill-name">{title}</div>
    </div>
  );
}
