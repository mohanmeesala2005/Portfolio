import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "rgb(40, 103, 148)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: "white" }} to="/">
            Mohan Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" style={{ color: "white" }} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  style={{ color: "white" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ color: "white" }}
                  to="/projects"
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#foot" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
