import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container glass-panel">
        <div className="contact-info">
          <h2 className="brand-font">Get in <span className="title-gradient">Touch</span></h2>
          <p className="contact-desc">Have a custom character request or inquiry about our current stock? Reach out to our boutique directly.</p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Atelier</span>
              <span className="detail-value">concierge@petalandpurl.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Instagram</span>
              <span className="detail-value">@PetalAndPurl</span>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Elegant Name" className="contact-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email Address" className="contact-input" required />
            </div>
            <div className="form-group">
              <textarea rows="4" placeholder="Tell us about the custom doll of your dreams..." className="contact-input" required></textarea>
            </div>
            <button type="submit" className="primary-btn submit-btn">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
