import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="brand-font">About <span className="title-gradient">Petal & Purl</span></h2>
          <p>
            Welcome to Petal & Purl, your cozy corner for all things handmade with love and precision. 
            We specialize in creating high-quality, beautiful amigurumi inspired by your favorite 
            anime characters and cozy aesthetics.
          </p>
          <p>
            Every piece is carefully handcrafted using premium yarn, ensuring each doll is as durable 
            as it is adorable. Whether you are looking for a desk companion, a cute gift, or a collector's 
            item, our crochet dolls bring a touch of magic to your everyday life.
          </p>
        </div>
        <div className="about-image-wrapper">
          <div className="image-placeholder glass-panel">
            <span className="emoji">🧶</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
