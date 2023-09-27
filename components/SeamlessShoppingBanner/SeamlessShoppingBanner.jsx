import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SeamlessShoppingBanner.module.css";

import {
  faTruckFast,
  faShop,
  faCube,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";


const SeamlessShoppingBanner = () => {
  return (
    <div className={styles["shopping-banner"]}>
      <h2>Seamless Online Shopping</h2>
      <div className={styles["banner-features"]}>


        <div className={styles.feature}>
      
          <div className={styles.featureIconWrapper}>
           
            <FontAwesomeIcon icon={faCube} size="1x" />
            </div>
            <h3>Fast, Free Delivery</h3>
            <p>Enjoy free two-day delivery on most in-stock items, guaranteeing quick and convenient access to your favorite products. Additionally, our extensive selection ensures you'll find everything you need for your shopping needs, all with the benefit of fast, reliable shipping.</p>
        
          <div className={styles["learn-more-container"]}>
            <a href="/pickup" className={styles["learn-more-link"]}>
              Learn More
            </a>
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </div>
          </div>
        </div>


        <div className={styles.feature}>
         
            <div className={styles.featureIconWrapper}>
              <div></div>
             <div style={{width: "50px"}}>
             <FontAwesomeIcon icon={faShop} size="sm"/>
             </div>
              
            </div>

            <h3>In-Store Pickup</h3>
            <p>Experience the convenience of in-store pickup for your online orders, allowing you to grab your purchases at your preferred location in no time. Enjoy the flexibility of choosing when and where to collect your items, making shopping with us even more convenient and efficient.




</p>
        
          <div className={styles["learn-more-container"]}>
            <a href="/pickup" className={styles["learn-more-link"]}>
              Learn More
            </a>
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm"/>
            </div>
          </div>
        </div>



        <div className={styles.feature}>
         
            <div className={styles.featureIconWrapper}>
              <div></div>
              <FontAwesomeIcon
                icon={faTruckFast}
                size="xl"
                className={styles.featureIcon}
             
              />
            </div>
            <h3>Easy Returns</h3>
            <p>Simplify your shopping experience with our hassle-free and straightforward returns process. If you're not completely satisfied with your purchase, we make it easy to return items, ensuring your peace of mind and satisfaction with every order. Shop confidently knowing that your satisfaction is our top priority.</p>
         
          <div className={styles["learn-more-container"]}>
            <a href="/pickup" className={styles["learn-more-link"]}>
              Learn More
            </a>
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </div>
          </div>
        </div>



        
      </div>
    </div>
  );
};

export default SeamlessShoppingBanner;
