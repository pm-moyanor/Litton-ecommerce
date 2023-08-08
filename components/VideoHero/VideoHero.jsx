import React from "react";
import styles from "./VideoHero.module.css";

const VideoHero = () => {
  return (
    <div className={styles.videoHero}>
      <video autoPlay loop muted>
        <source src="videos/production_id_4594932.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`${styles.overlay} ${styles.fadeIn}`}>
        <h1>Sound shaped just for you</h1>

        <p>
          Made for every ear type, Bose QuietComfort Earbuds II use CustomTune
          technology to personalize your listening experience with a perfect fit
          and balanced sound.
        </p>
      </div>
    </div>
  );
};

export default VideoHero;
