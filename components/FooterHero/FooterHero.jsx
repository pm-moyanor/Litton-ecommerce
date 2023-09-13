import styles from "./FooterHero.module.css";

const FooterHero = ({ id, alt, title, image, caption, color, customStyle }) => {
  const containerStyle = {
    position: "relative",
    color: color,
    backgroundColor: "grey",
    overflow: "hidden",
    height: "100vh",
  };

  return (
    <div className={styles["footer-hero"]} style={containerStyle}>
      {id !== 2 ? (
        <>
          <img
            className={styles.image}
            src={image}
            style={customStyle?.image}
            alt={alt}
          />
          <div className={styles.text} style={customStyle?.text}>
            <h1>{title}</h1>
            <p>{caption}</p>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${styles.text} ${styles.overlay} ${styles.fadeIn}`}
            style={customStyle?.text}
          >
            <h1>{title}</h1>
            <p>{caption}</p>
          </div>
          <div className={`${styles.videoHero} ${styles.video}`}>
            <video autoPlay loop muted>
              <source src="videos/production_id_4594932.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
        // <>
        //   <div className={styles.text}>
        //     <h1>{title}</h1>
        //     <p>{caption}</p>
        //   </div>
        //   <img
        //     className={styles.image}
        //     src={image}
        //     style={customStyle?.image}
        //     alt={alt}
        //   />
        // </>
      )}
    </div>
  );
};

export default FooterHero;
