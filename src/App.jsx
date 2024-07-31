// src/App.js
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.some((item) => item.id === product.id);
      if (isInCart) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return [...prevCart, product];
      }
    });
  };

  return (
    <div>
      <ProductList cart={cart} updateCart={updateCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
