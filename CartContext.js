import React, { createContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart ,setCartItems}}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
