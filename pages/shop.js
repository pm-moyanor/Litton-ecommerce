
import { useCart } from "../CartContext";

import products from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Cart from "../pages/cart";
import CategorySubmenu from "../components/CategorieSubmenu/CategorySubmenu";


export default function Shop() {

  const { dispatch} = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item.id });
  };
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <CategorySubmenu inShop={true}/>
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
