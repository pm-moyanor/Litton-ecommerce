import styles from "./FooterHero.module.css";

const FooterHero = () => {
  return (
    <div className={styles["footer-hero"]}>
      <div className={styles["text-block"]}>
        <h4>Create your best work</h4>

        <p>
          Real productivity is in Quiet Mode when you silence the background
          with the world’s best noise cancellation.
        </p>
      </div>
    </div>
  );
};

export default FooterHero;
