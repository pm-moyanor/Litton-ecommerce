import styles from "./FooterHero.module.css";

const FooterHero = ({ id, alt, title, image, caption }) => {
  return (
    <div
      className={`${styles["footer-hero"]} 
  ${id === 2 ? styles["imageInLeft"] : ""} 
  ${id === 3 ? styles["quoteBanner"] : ""}  
  ${id === 4 ? styles["imageInBackground"] : ""}`}
    >
      {id === 1 ? (
        <>
         

          <div className={`${styles["videoHero"]} `}>
            <div className={`${styles["text"]} `}>
              <h1>{title}</h1>
              <p>{caption}</p>
            </div>

            <div className={styles["video"]}>
              <video autoPlay loop muted>
                <source
                  src="videos/production_id_4594932.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`${styles["overlay"]} `}> </div>
          </div>
        
        </>
      ) : (
        <>
          <div className={`${styles["image"]}  `}>
            <img src={image} alt={alt} />
          </div>

          <div className={`${styles["text"]} }`}>
            <h1>{title}</h1>
            <p>{caption}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FooterHero;
