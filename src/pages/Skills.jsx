import React from "react";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";
const SKILLS = [
  { 
    title: "C", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
  },
  { 
    title: "C++", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
  },
  { 
    title: "HTML", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
  },
  { 
    title: "CSS", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
  },
  { 
    title: "React", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  { 
    title: "Tailwind", 
    image: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" 
  },{
    title:"MongoDB",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },{
    title:"Node.js",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },{
    title:"Express.js",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },{
    title:"Git",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },{
    title:"GitHub",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },{
    title:"Python",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },{
    title:"JavaScript",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },{
    title:"Figma",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },{
    title:"Numpy",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },{
    title:"Pandas",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },{
    title:"Matplotlib",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
  },{
    title:"TensorFlow",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },{
    title:"PyTorch",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
  },{
    title:"Keras",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
  }
];

export default function Skills() {
  return (
    <section className="container-custom py-20 min-h-[calc(100vh-80px)]">
      <div className="text-center space-y-4 mb-20">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="text-sky-300 text-lg max-w-2xl mx-auto italic">
          "The beautiful thing about learning is that no one can take it away from you."
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {SKILLS.map((s) => (
          <SkillCard key={s.title} title={s.title} image={s.image} />
        ))}
      </div>

      <Footer />
    </section>
  );
}
