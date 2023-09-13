import React from "react";
import styles from "./Newsletter.module.css"; // Import the CSS module for styling
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles["envelope-icon"]}>
        <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </div>

      <h2 className={styles.title}>Join our List</h2>
      <p className={styles.description}>
        Sign up to receive updates and news straight to your inbox
        <br/>Get 10 % off on your first order. Coupon shared through email
      </p>
      <form className={styles.form}>
        <input
          type="email"
          className={styles.emailInput}
          placeholder="Your Email Address"
        />
        <button type="submit" className={styles.joinButton}>
          Join
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
