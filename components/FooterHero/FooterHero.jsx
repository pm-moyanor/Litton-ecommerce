import styles from "./FooterHero.module.css";

const FooterHero = () => {
  return (
    <div className={styles["footer-hero"]}>
        <div className={styles['text-block']}>
      <h4>REGISTER YOUR BEATS</h4>
      <button className={styles.button}>REGISTER NOW</button>
      </div>
    </div>
  );
};

export default FooterHero;
