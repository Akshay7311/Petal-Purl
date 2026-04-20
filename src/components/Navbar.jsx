import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass-panel scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo brand-font">
          <h2>Petal <span className="title-gradient">&</span> Purl</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Boutique</a></li>
          <li><a href="#featured">Featured Dolls</a></li>
          <li><a href="#collections">Collections</a></li>
        </ul>
        <button className="primary-btn nav-btn">Cart (0)</button>
      </div>
    </nav>
  );
};

export default Navbar;
