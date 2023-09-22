import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles["banner"]}>
   
        <p>Litton Air-Pro 5</p>
        <h3>SUMMER</h3>
        <h1>FINAL</h1>
        <button className={styles["button"]}>SHOP NOW</button>


      <div className={styles["image"]}>
        <img src="./images/headphones_c_1.webp" alt="Beats Solo img" />
      </div>
      <div className={styles["desc"]}>
        <h5>Description</h5>
        <p>
          Praesentium, provident ex voluptatem numquam culpa sit aliquam fugit
          architecto nam unde dol
        </p>
      </div>
    </div>
  );
}
