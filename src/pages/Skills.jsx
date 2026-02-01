import React from "react";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";
import { Code, FileCode, Terminal, Monitor } from "lucide-react";

const SKILLS = [
  { title: "C", Icon: Code },
  { title: "C++", Icon: Terminal },
  { title: "HTML", Icon: FileCode },
  { title: "CSS", Icon: Monitor },
];

export default function Skills() {
  return (
    <section>
      <div className="skhead">
        <div className="skill-title">
          <div className="sktitle">Skills</div>
          <div className="skcontent">
            These are the languages I have been learning
          </div>
        </div>
      </div>

      <div className="skgrid">
        {SKILLS.map((s) => (
          <SkillCard key={s.title} title={s.title} Icon={s.Icon} />
        ))}
      </div>

      <Footer />
    </section>
  );
}
