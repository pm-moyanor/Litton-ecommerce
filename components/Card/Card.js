import styles from "./Card.module.css";

export default function Card({ product }) {
  const colors = product.colors;
  const randomNumberOfColors = Math.floor(Math.random() * 5) + 1;
  const randomColors = colors.slice(0, randomNumberOfColors);


  return (
    <div className={styles["main-container"]}>
      <div className={styles["product-info"]}>
        <h6 style={{ color: "red", fontSize: 16 }}>NEW</h6>
        <h4>{product.title}</h4>
        <h5 className={styles["product-price"]}>{`$${product.price}`}</h5>
      </div>

      <div className={styles["product-img"]}>
        <img src={product.image} alt="main-img" className={styles.image} />
      </div>
      <div className={styles["product-color-options"]}>
        <ul>
          {randomColors.map((color) => (
            <li
              className={styles["color-options-circles"]}
              style={{ backgroundColor: color }}
              key={color}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
