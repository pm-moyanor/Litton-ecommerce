import React, { useState } from "react";
import styles from "./Card.module.css";
import { useCart } from "../../CartContext";

export default function Card({ product, inShop }) {
  const { dispatch } = useCart();
  const [inShopState, setInShopState] = useState(inShop);

  const { title, price, description, image, colors, id, inStock } = product;

  const descriptionLines = description.split("\n");

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div
      className={`${styles.mainContainer} ${
        inShopState ? styles.shopMode : ""
      }`}
    >
      {inShopState ? (
        <>
          <div className={styles.imgColorsContainer}>
            <div className={styles.productImg}>
              <img src={image} alt="main-img"  />
            </div>
            <div className={styles.colorOptionsContainer}>
              {colors.map(
                (color) =>
                  color.inStock && (
                    <div
                      style={{ backgroundColor: color.hex }}
                      key={id + color.hex}
                    ></div>
                  )
              )}
            </div>
          </div>
          <div className={styles.productInfo}>
            <h4>{title}</h4>
            <h5 className={styles.productPrice}>{`$${price}`}</h5>
            <ul className={styles.descriptionContainer}>
              {descriptionLines.map((line, index) => (
                <li key={id + "line" + index} className={styles.line}>
                  {line}
                </li>
              ))}
            </ul>
            <button className={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.productInfo}>
            <h6 className={styles.newLabel}>NEW</h6>
            <h4>{title}</h4>
            <h5 className={styles.productPrice}>{`$${price}`}</h5>
          </div>
          <div className={styles.productImg}>
            <img src={image} alt="main-img" className={styles.image} />
          </div>
          <div className={styles.colorOptionsContainer}>
            {colors.map(
              (color) =>
                color.inStock && (
                  <div
                    style={{ backgroundColor: color.hex }}
                    key={id + color.hex}
                  ></div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}
