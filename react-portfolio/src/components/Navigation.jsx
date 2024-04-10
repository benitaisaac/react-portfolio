import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const [currentSection, setCurrentSection] = useState("about"); // Initialize current section state
  const currentPage = useLocation().pathname;

  // Function to handle click event on navigation items
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <nav>
      <ul className="flex-row">
        <li className='m1'>
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('about')}
          >
            About
          </Link>
        </li>
        <li className='m1'>
          <Link
            to="/portfolio"
            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('portfolio')}
          >
            Portfolio
          </Link>
        </li>
        <li className='m1'>
          <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('contact')}
          >
            Contact
          </Link>
        </li>
        <li className='m1'>
          <Link
            to="/resume"
            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('resume')}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
