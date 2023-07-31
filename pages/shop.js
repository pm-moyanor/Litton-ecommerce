// Shop.js

import { useState } from "react";
import products from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart";

export default function Shop() {
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
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Wireless Headphones</h2>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id} className={styles["card-container"]}>
                <Card
                  product={product}
                  inShop={true}
                  onAddToCart={handleAddToCart}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Cart cartItems={cartItems} />
      <Footer />
    </>
  );
}
