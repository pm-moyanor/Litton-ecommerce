import React, { useState } from "react";
import styles from "./Card.module.css";
import { useCart } from "../../CartContext";

export default function Card({ product, inShop }) {
  const { dispatch } = useCart();
  const [inShopState, setInShopState] = useState(inShop);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState({});

  const { title, price, description, image, colors, id, inStock } = product;

  const descriptionLines = description.split("\n");

  const handleAddToCart = async () => {
    if (!selectedColor) {
      console.log("please select a color");
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
                    <>
                      <div
                        style={{
                          backgroundColor: color.hex,
                      
                        }}
                        key={id + color.hex}
                        onClick={() => {
                          setSelectedColor({
                            name: color.name,
                            hex: color.hex,
                          });
                        }}
                      >
                        <div
                          className={`${
                            selectedColor.name === color.name
                              ? styles["color"]
                              : ""
                          }`}
                        ></div>
                      </div>
                    </>
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
                <>
                  <p>Add to cart</p>
                  {showPopup && (
                    <div className={styles["popUpWrapper"]}>
                      <p>added to cart</p>
                    </div>
                  )}
                </>
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
                  >
                    {console.log(color.name)}
                  </div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}
