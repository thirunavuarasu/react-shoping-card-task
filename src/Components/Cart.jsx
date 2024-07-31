// src/components/Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <p>Total Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
