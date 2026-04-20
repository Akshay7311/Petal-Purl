import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    title: 'Frieren - The Mage',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=600&auto=format&fit=crop', // proxy image
    isPopular: true
  },
  {
    id: 2,
    title: 'Maomao - Apothecary',
    price: 90.00,
    image: 'https://images.unsplash.com/photo-1582560416972-e1d1ebc3c6f0?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Anya - Telepath',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1594819047050-99defca82545?q=80&w=600&auto=format&fit=crop',
    isNew: true
  },
  {
    id: 4,
    title: 'Nezuko - Demon Sister',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1591543620767-582b2e76369e?q=80&w=600&auto=format&fit=crop',
  }
];

const ProductGrid = () => {
  return (
    <section className="product-grid-section" id="featured">
      <div className="section-header">
        <h2 className="brand-font">Featured <span className="title-gradient">Collections</span></h2>
        <p>Expertly woven details for the most elegant aesthetic.</p>
      </div>
      <div className="product-grid-container">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
