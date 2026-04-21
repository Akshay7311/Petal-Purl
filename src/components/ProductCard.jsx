import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price, image, isNew, isPopular }) => {
  return (
    <div className="product-card glass-panel">
      <div className="card-image-container">
        {isNew && <span className="badge new-badge">NEW</span>}
        {isPopular && <span className="badge popular-badge">POPULAR</span>}
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">₹{price.toLocaleString('en-IN')}</p>
        <button className="primary-btn card-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
