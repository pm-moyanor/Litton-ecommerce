import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SeamlessShoppingBanner.module.css";

import {
  faTruckFast,
  faShop,
  faCube,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";



const iconStyles = {
  color: "rgb(74, 74, 74)",
  height: 65,
};
const SeamlessShoppingBanner = () => {
  return (
    <div className={styles["shopping-banner"]}>
      <h2>Seamless Online Shopping</h2>
      <div className={styles["banner-features"]}>
        <div className={styles.feature}>
         
          <div className={styles["text-container"]}>
          <FontAwesomeIcon icon={faCube} style={iconStyles} />
            <h3>Fast, Free Delivery</h3>
            <p >Enjoy free two-day delivery on most in-stock items.</p>
          </div>
          <div className={styles["learn-more-container"]}>
            <a href="/pickup" className={styles["learn-more-link"]}>
              Learn More
            </a>
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles["text-container"]}>
          <FontAwesomeIcon icon={faShop} style={iconStyles} />

            <h3>In-Store Pickup</h3>
            <p>Pick up your online order at an Apple Store near you.</p>
          </div>
          <div className={styles["learn-more-container"]}>
            <a href="/pickup" className={styles["learn-more-link"]}>
              Learn More
            </a>
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles["text-container"]}>
          <FontAwesomeIcon icon={faTruckFast} style={iconStyles} />

            <h3>Easy Returns</h3>
            <p>Return eligible items to Apple within 14 days of receipt.</p>
          </div>
          <div className={styles["learn-more-container"]}>
            <a href="/pickup" className={styles["learn-more-link"]}>
              Learn More
            </a>
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamlessShoppingBanner;
