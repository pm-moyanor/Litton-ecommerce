


import React from "react";
import styles from "./Footer.module.css";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <p>©2023 Litton Headphones |  All rights reserved   </p>
      <div className={styles["footer-icons"]}>
        <a
          href="https://www.instagram.com/official_instagram_account/"
          target="_blank"
          rel="noopener noreferrer"
        
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.twitter.com/official_twitter_account/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.facebook.com/official_facebook_page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
      </div>
    </div>
  );
}
