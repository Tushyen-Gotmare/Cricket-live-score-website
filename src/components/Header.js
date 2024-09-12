import React, { useState } from 'react';

import '../styles/Header.css';
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>XYZ Organization</h1>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </button>

      {/* Navigation Menu */}
      <nav className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/matches">Live Scores</Link></li>
          <li><Link to="/tournaments">Tournaments</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;