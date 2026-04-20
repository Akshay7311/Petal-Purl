import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    title: 'Frieren - The Mage',
    price: 85.00,
    image: 'https://i.etsystatic.com/46294721/r/il/a76a59/5643446654/il_570xN.5643446654_b06s.jpg',
    isPopular: true
  },
  {
    id: 2,
    title: 'Maomao - Apothecary',
    price: 90.00,
    image: 'https://i.etsystatic.com/49685199/r/il/ab5b14/6859698947/il_1080xN.6859698947_4l00.jpg',
  },
  {
    id: 3,
    title: 'Anya - Telepath',
    price: 75.00,
    image: 'https://i.etsystatic.com/35753261/r/il/48f879/5787218177/il_fullxfull.5787218177_sntr.jpg',
    isNew: true
  },
  {
    id: 4,
    title: 'Nezuko - Demon Sister',
    price: 95.00,
    image: 'https://i.etsystatic.com/34608788/r/il/f04464/7854358892/il_fullxfull.7854358892_ln2z.jpg',
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
