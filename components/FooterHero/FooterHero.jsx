import styles from "./FooterHero.module.css";

const FooterHero = () => {
  return (
    <div className={styles["footer-hero"]}>
      <div className={styles.text}>
        <h1>Create your best work</h1>
        <p>
          Real productivity is in Quiet Mode when you silence the background
          with the world’s best noise cancellation.
        </p>
      </div>
      <div className={styles.image}>
        <img
          src="/images/good-faces-yWTUg04EZU8-unsplash.jpg"
          alt="man-working"
        />
      </div>
    </div>
  );
};

export default FooterHero;
