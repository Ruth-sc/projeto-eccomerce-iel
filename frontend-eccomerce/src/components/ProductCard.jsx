import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ image, name, typeProduct, price, priceDiscount }) => {
  const originalPrice = (price / (1 - priceDiscount / 100)).toFixed(2); // Calcula o preço original antes do desconto

  return (
    <div className="product-card">
      <div className="discount-badge">
        {priceDiscount}% OFF
      </div>
      <img src={image} alt={name} className="product-image" />
      <div className="product-type">
        {typeProduct}
      </div>
      <h3 className="product-name">
        {name}
      </h3>
      <div className="product-prices">
        <span className="product-price">R$ {price}</span>
        <span className="original-price">R$ {originalPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;
