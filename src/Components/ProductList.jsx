// src/components/ProductList.js
import React, { useState } from 'react';
import { products } from '../Data';

const ProductList = ({ cart, updateCart }) => {
  const handleAddToCart = (product) => {
    updateCart(product);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {cart.some((item) => item.id === product.id) ? (
              <button onClick={() => handleAddToCart(product)}>
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
