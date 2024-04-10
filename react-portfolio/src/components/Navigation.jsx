import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul className="flex-row">
        <li className='m1'>
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}> About </Link>
        </li>
        <li className='m1'>
          <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio </Link>
        </li>
        <li className='m1'>
          <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}> Contact </Link>
        </li>
        <li className='m1'>
          <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}> Resume </Link>
        </li>
      </ul>
    </nav>
   
  );
}

export default Navigation;
