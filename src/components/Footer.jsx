import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="foot">
      <p className="footer__title">Mohan Portfolio!</p>
      <div className="footer__social">
        <a
          href="https://github.com/mohanmeesala2005"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="footer__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohan-meesala-9b9936257/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="footer__icon" />
        </a>
        <a
          href="https://www.instagram.com/mohanmeesala.05/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}
