// Card.js
import styles from "./Card.module.css";
import { useState } from "react";

export default function Card({ product, showDescription, inShop }) {
  const [showDescriptionState, setShowDescriptionState] =
    useState(showDescription);
  const [inShopState, setInShopState] = useState(inShop);
  console.log(inShopState, inShop);
  const threeCards = product.colors.slice(0, 3);
  const descriptionLines = product.description.split("\n");

  return (
    <div
      className={`${styles["main-container"]} ${
        inShopState ? styles["shop-mode"] : ""
      }`}
    >
      <div className={styles["product-info"]}>
        <h6 style={{ color: "red", fontSize: 16 }}>NEW</h6>
        <h4>{product.title}</h4>
        <h5 className={styles["product-price"]}>{`$${product.price}`}</h5>
      </div>
      <div className={styles["product-img"]}>
        <img src={product.image} alt="main-img" className={styles.image} />
      </div>
      <div className={styles["product-color-options"]}>
        <div>
          {threeCards.map((color) => (
            <div
              className={styles["color-options-circles"]}
              style={{ backgroundColor: color }}
              key={color}
            ></div>
          ))}
        </div>
      </div>
      {showDescriptionState && inShopState && (
        <div className={styles["product-description"]}>
          <div>
            {descriptionLines.map((line, index) => (
              <div key={index} className={styles.line}>
                {line}
              </div>
            ))}
          </div>
          <button className={styles.button}>add to cart</button>
        </div>
      )}
    </div>
  );
}
