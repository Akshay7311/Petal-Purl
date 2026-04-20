import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title brand-font">
            Luxury Crafted <br />
            <span className="title-gradient">Anime Dolls</span>
          </h1>
          <p className="hero-subtitle">
            Meticulously handcrafted amigurumi featuring intricate details, premium yarns, and delicate designs. The ultimate collectible for your aesthetic completely transformed.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Shop Collection</button>
            <button className="secondary-btn">Discover Details</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image floating-element pulse-glow">
            <img 
              src="/images/frieren.png" 
              alt="Luxury Anime Amigurumi" 
              className="main-amigurumi"
            />
          </div>
          {/* Decorative glass elements */}
          <div className="glass-panel decorative-element el-1">✨ Exquisite Detail</div>
          <div className="glass-panel decorative-element el-2">🌸 Premium Silk Blend</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
