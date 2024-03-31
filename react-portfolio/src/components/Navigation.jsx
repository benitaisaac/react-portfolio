import React from "react";
// import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"><a href="#about">About me</a></li>
        <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
        <li className="nav-item"><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
