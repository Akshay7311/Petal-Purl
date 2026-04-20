import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-font">Petal <span className="title-gradient">&</span> Purl</h2>
          <p>Hand-crafted perfection. Elegant anime figures and cute companions crafted with the highest quality silk and cotton yarns.</p>
        </div>
        <div className="footer-links">
          <h3>Boutique</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#featured">Featured Dolls</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">Our Story</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>Aesthetic Updates</h3>
          <p>Join the list for exclusive drops and limited editions.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button className="primary-btn">Join</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Petal & Purl. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
