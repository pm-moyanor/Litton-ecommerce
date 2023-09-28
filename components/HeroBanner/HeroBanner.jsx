import Link from "next/link";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles["banner"]}>
      <div className={styles["text"]}>
      <p>Litton Air-Pro 5</p>
      <h3>SUMMER</h3>
      <h1>FINAL</h1>
      <Link href="./shop" className={styles["button"]}>
      SHOP NOW
      </Link>
      </div>


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
