import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.textBlock}>

        <h2>Litton Air-Pro 5</h2>
        <h3>SUMMER</h3>
        <h4>FINAL</h4>
        <button className={styles.button}>SHOP NOW</button>
      </div>

      <div>
        <img src="./images/headphones_a_4.webp" alt="Beats Solo img" />
      </div>
      <div className={styles.descriptionContainer}> 
        <h5 >Description</h5>
        <p>
          Praesentium, provident ex voluptatem numquam culpa sit aliquam fugit
          architecto nam unde dol
        </p>
      </div>
    </div>
  );
}
