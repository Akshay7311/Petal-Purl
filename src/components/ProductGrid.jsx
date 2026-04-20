import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    title: 'Frieren - The Mage',
    price: 85.00,
    image: '/images/frieren.png',
    isPopular: true
  },
  {
    id: 2,
    title: 'Maomao - Apothecary (Variant 1)',
    price: 90.00,
    image: 'https://i.etsystatic.com/49685199/r/il/ab5b14/6859698947/il_1080xN.6859698947_4l00.jpg',
  },
  {
    id: 3,
    title: 'Maomao - Apothecary (Variant 2)',
    price: 95.00,
    image: '/images/maomao.png',
    isNew: true
  },
  {
    id: 4,
    title: 'Howl - The Wizard',
    price: 110.00,
    image: '/images/howl.png',
  },
  {
    id: 5,
    title: 'Nilou - The Dancer',
    price: 105.00,
    image: '/images/nilou.png',
    isPopular: true
  },
  {
    id: 6,
    title: 'Anya - Telepath',
    price: 75.00,
    image: 'https://i.etsystatic.com/35753261/r/il/48f879/5787218177/il_fullxfull.5787218177_sntr.jpg',
    isPopular: true
  },
  {
    id: 7,
    title: 'Nezuko - Demon Sister',
    price: 95.00,
    image: 'https://i.etsystatic.com/34608788/r/il/f04464/7854358892/il_fullxfull.7854358892_ln2z.jpg',
    isNew: true
  }
];

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="product-grid-section" id="featured">
      <div className="section-header">
        <h2 className="brand-font">Our <span className="title-gradient">Collection</span></h2>
        <p>Explore all elegantly crafted dolls and search for your favorites.</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search characters (e.g., Frieren, Maomao, Anya)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="product-grid-container">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No dolls found for "{searchQuery}"</h3>
          <p>Please try a different enchanting character name.</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
