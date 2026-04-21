import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'glass-panel scrolled' : ''}`}>
        <div className="navbar-container">
          <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          
          <div className="logo brand-font">
            <h2>Petal <span className="title-gradient">&</span> Purl</h2>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#featured">Boutique</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="primary-btn nav-btn desktop-cart">Cart (0)</button>
            <button className="mobile-search-btn">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`drawer-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      
      {/* Mobile Sidebar Navigation */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="logo brand-font">
            <h2>Petal <span className="title-gradient">&</span> Purl</h2>
          </div>
          <button className="close-drawer" onClick={() => setMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#featured" onClick={() => setMenuOpen(false)}>Shop All Collections</a></li>
          <li><a href="#featured" onClick={() => setMenuOpen(false)}>Anime Collectibles</a></li>
          <li><a href="#featured" onClick={() => setMenuOpen(false)}>Exclusive Deals</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
