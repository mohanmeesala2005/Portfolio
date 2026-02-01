import React from "react";
import { Github, Linkedin, Instagram, User } from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container-fluid" id="home">
      <div className="row align-items-center" style={{ paddingTop: 32 }}>
        <div className="col-lg-6">
          <div className="card justify-content-center align-content-center">
            <h1 className="text">
              Hi, I am
              <br />
              Mohan Meesala
            </h1>
            <h4 style={{ color: "#cbe6ff", fontWeight: 500 }}>
              Student at NIT DURGAPUR
            </h4>
            <a
              href="mailto:mohan@example.com"
              className="button"
              rel="noreferrer"
            >
              Contact
            </a>
            <div className="social" style={{ marginTop: 16 }}>
              <a
                href="https://github.com/mohanmeesala2005"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="social_t" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-meesala-9b9936257/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="social_t" />
              </a>
              <a
                href="https://www.instagram.com/mohanmeesala.05/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="social_t" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "320px",
            }}
          >
            <User size={180} />
          </div>
        </div>
      </div>

      <section id="about" className="about_section">
        <div className="about_wrap">
          <div className="about_title_wrap">
            <div className="about_title_wrap2">
              <p className="about_title">About</p>
            </div>
          </div>
          <div className="about_content_wrap">
            <div className="about_intro">
              <p>
                Hi, I'm Mohan,
                <br /> nice to meet you. <br /> Please take a look around
              </p>
            </div>
            <div>
              <p>
                I am passionate about building excellent software that improves
                the lifes of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
