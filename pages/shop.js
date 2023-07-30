// Shop.js
import productsWithImgs from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";

export default function Shop() {

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <ul>
        {productsWithImgs.map((product) => {
          return (
            <li key={product.id} className={styles['card-container']}>
              <Card product={product} showDescription={true} inShop={true} />
            </li>
          );
        })}
        </ul>
       
      </div>
    </>
  );
}
