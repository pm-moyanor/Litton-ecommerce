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
        <h1>Put rhythm in motion</h1>

        <p>
          Wherever you go, the
          SoundLink Flex is the perfect musical sidekick for both days out and
          nights in.
        </p>
      </div>
    </div>
  );
};

export default VideoHero;
