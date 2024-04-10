import React from "react";
import { Link } from "react-router-dom";

function Navigation({currentPage}) {
  return (
    <nav>
      <ul className="flex-row">
        <li className='m1'>
          <Link to="/"> About </Link>
        </li>
        <li className='m1'>
          <Link to="/portfolio"> Portfolio </Link>
        </li>
        <li className='m1'>
          <Link to="/contact"> Contact </Link>
        </li>
        <li className='m1'>
          <Link to="/resume"> Resume </Link>
        </li>
      </ul>
    </nav>
   
  );
}

export default Navigation;

 // <nav className="navbar">
    //   <ul className="nav-menu">
    //     <li className="nav-item"><a href="#about">About me</a></li>
    //     <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
    //     <li className="nav-item"><a href="#contact">Contact</a></li>
    //     <li className="nav-item"><a href="#resume">Resume</a></li>
    //   </ul>
    // </nav>
