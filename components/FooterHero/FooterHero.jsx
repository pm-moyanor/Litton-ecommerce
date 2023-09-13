import styles from "./FooterHero.module.css";

const FooterHero = ({
  id,
  alt,
  title,
  image,
  caption,

  color,
  customStyle
}) => {
  const containerStyle = {
   position:"relative",
    color: color,
    backgroundColor: "grey",
    overflow: "hidden",
    height: "100vh"

  };

  return (
    <div className={styles["footer-hero"]} style={containerStyle}>
      {id === 1 ? (
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
