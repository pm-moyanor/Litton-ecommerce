// Shop.js
import products from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";

export default function Shop() {

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className={styles['card-container']}>
              <Card product={product}  inShop={true} />
            </li>
          );
        })}
        </ul>
       
      </div>
    </>
  );
}
