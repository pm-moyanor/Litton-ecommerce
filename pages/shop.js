import { useContext } from "react";
import { CartContext } from "../CartContext";

import products from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Cart from "../pages/cart";


export default function Shop() {

  const { cartItems, handleAddToCart } = useContext(CartContext);
  
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
   
      <Footer />
    </>
  );
}
