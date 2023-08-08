import React, { useState } from "react";
import styles from "./Card.module.css";
import { useCart } from "../../CartContext";

export default function Card({ product, inShop }) {
  const { dispatch } = useCart();
  const [inShopState, setInShopState] = useState(inShop);
  console.log(inShop);
  const { title, price, description, image, colors, id, inStock } = product;

  const descriptionLines = description.split("\n");

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div
      className={`${styles["main-container"]} ${
        inShopState ? styles["shop-mode"] : ""
      }`}
    >
      {inShopState ? (
        <>
          {/* Image comes first */}
          <div className={styles["img-colors-container"]}>
            <div className={styles["product-img"]}>
              <img src={image} alt="main-img" className={styles.image} />
            </div>
            <div className={styles["color-options-container"]}>
              {colors.map(
                (color, index) =>
                  color.inStock && (
                    <div
                      style={{ backgroundColor: color.hex }}
                      key={id + color.hex}
                    ></div>
                  )
              )}
            </div>
          </div>

          {/* Configuration and info */}
          <div className={styles["product-info"]}>
            <h6 style={{ color: "red", fontSize: 16 }}>NEW</h6>
            <h4>{title}</h4>
            <h5 className={styles["product-price"]}>{`$${price}`}</h5>
            <div className={styles["product-color-options"]}></div>

            <div className={styles["product-color-options"]}>
              <ul className={styles["description-container"]}>
                {descriptionLines.map((line, index) => (
                  <li key={id + "line" + index} className={styles["line"]}>
                    {line}
                  </li>
                ))}
              </ul>
              <button className={styles.button} onClick={handleAddToCart}>
                add to cart
              </button>
            </div>
          </div>
        </>
      ) : (
        // Default order for non-shop mode
        <>
          <div className={styles["product-info"]}>
            <h6 style={{ color: "red", fontSize: 16 }}>NEW</h6>
            <h4>{title}</h4>
            <h5 className={styles["product-price"]}>{`$${price}`}</h5>
          </div>

          <div className={styles["product-img"]}>
            <img src={image} alt="main-img" className={styles.image} />
          </div>
          <div className={styles["color-options-container"]}>
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

// return (
//   <div
//     className={`${styles["main-container"]} ${
//       inShopState ? styles["shop-mode"] : ""
//     }`}
//   >
//     {inShopState ? (
//       <>
//         {/* Image comes first */}
//         <div className={styles["img-colors-container"]}>
//           <div className={styles["product-img"]}>
//             <img src={image} alt="main-img" className={styles.image} />
//           </div>
//           <div className={styles["color-options-container"]}>
//             {colors.map(
//               (color, index) =>
//                 color.inStock && (
//                   <div
//                     style={{ backgroundColor: color.hex }}
//                     key={id + color.hex}
//                   ></div>
//                 )
//             )}
//           </div>
//         </div>

//         {/* Configuration and info */}
//         <div className={styles["product-info"]}>
//           <h6 style={{ color: "red", fontSize: 16 }}>NEW</h6>
//           <h4>{title}</h4>
//           <h5 className={styles["product-price"]}>{`$${price}`}</h5>
//         </div>
//       </>
//     ) : (
//       // Default order for non-shop mode
//       <>
//         <div className={styles["product-color-options"]}>
//           <ul className={styles["description-container"]}>
//             {descriptionLines.map((line, index) => (
//               <li key={id + "line" + index} className={styles["line"]}>
//                 {line}
//               </li>
//             ))}
//           </ul>
//           <button className={styles.button} onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </>
//     )}
//   </div>
// );
