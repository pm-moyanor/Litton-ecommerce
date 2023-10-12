import React, { useState } from "react";
import styles from "./Card.module.css";
import { useCart } from "../../CartContext";

export default function Card({ product, inShop }) {
  const { dispatch } = useCart();
  const [inShopState, setInShopState] = useState(inShop);
  const [showPopup, setShowPopup] = useState(false);
  const [showSelectColor, setShowSelectColor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const { title, price, description, image, colors, id, inStock } = product;

  const descriptionLines = description.split("\n");

  const handleAddToCart = async () => {
    if (!selectedColor) {
      setShowSelectColor(true);
      return;
    }

    setIsLoading(true);

    try {
      await dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, selectedColor },
      });
      setTimeout(() => {
        setIsLoading(false);
        setShowPopup(true);
      }, 2000);

      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div
      className={`${styles["mainContainer"]} ${
        inShopState ? styles["shopMode"] : ""
      }`}
    >
      {inShopState ? (
        <>
          <div className={styles["imgColorsContainer"]}>
            <div className={styles["productImg"]}>
              <img src={image} alt="main-img" />
            </div>
            <div className={styles["colorOptionsContainer"]}>
              {colors.map(
                (color) =>
                  color.inStock && (
                    <div
                      style={{
                        backgroundColor: color.hex,
                        boxShadow:
                          selectedColor === color
                            ? "#1431ef 0px 0px 0px 1px"
                            : "none",
                      }}
                      key={id + color.hex}
                      onClick={() => {
                        setSelectedColor(color);
                        setShowSelectColor(false);
                        console.log(selectedColor, color);
                      }}
                      className={`${styles["color"]} ${
                        selectedColor === color ? styles["selectedColor"] : ""
                      }`}
                    ></div>
                  )
              )}
            </div>
          </div>
          <div className={styles["productInfo"]}>
            <h4>{title}</h4>

            <h5 className={styles["productPrice"]}>{`$${price}`}</h5>
            <ul className={styles["descriptionContainer"]}>
              {descriptionLines.map((line, index) => (
                <li key={id + "line" + index} className={styles["line"]}>
                  {line}
                </li>
              ))}
            </ul>
            <button className={styles["button"]} onClick={handleAddToCart}>
              {isLoading ? (
                <span className={styles["loader"]}></span>
              ) : (
                <div>
                  <p>Add to cart</p>
                  {showPopup && (
                    <div className={styles["popUpWrapper"]}>
                      <p>added to cart</p>
                    </div>
                  )}
                  {showSelectColor ? (
                    <div className={styles["popUpWrapper"]}>
                      <p>* please select a color</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles["productInfo"]}>
            <h6 className={styles["newLabel"]}>NEW</h6>
            <h4>{title}</h4>
            <h5 className={styles["productPrice"]}>{`$${price}`}</h5>
          </div>
          <div className={styles["productImg"]}>
            <img src={image} alt="main-img" className={styles["image"]} />
          </div>
          <div className={styles["colorOptionsContainer"]}>
            {colors.map(
              (color) =>
                color.inStock && (
                  <div
                    style={{
                      backgroundColor: color.hex,
                    }}
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
