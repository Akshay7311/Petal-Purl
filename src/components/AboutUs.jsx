import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="brand-font">Our <span className="title-gradient">Story</span></h2>
          <h3 className="about-subtitle">Where Elegance Meets Anime</h3>
          <div className="about-text-container">
            <p className="about-text">
              Welcome to Petal & Purl, an exclusive luxury boutique specializing in the exquisite art of premium amigurumi. We believe that your favorite characters should be immortalized not just as toys, but as stunning centerpieces of art.
            </p>
            <p className="about-text">
              Each piece is meticulously handcrafted by master artisans using only the finest ethically sourced silk and Egyptian cotton yarns. Whether it is the flowing garments of Frieren or the delicate ribbons of Nilou, every stitch is an ode to the characters you love, woven with breathtaking detail and sophistication.
            </p>
          </div>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image-frame glass-panel">
            <img src="./images/nilou.png" alt="Crafting Amigurumi Detail" className="about-craft-img" />
            <div className="glass-panel decorative-element el-3">100% Hand Woven</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
