import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import styles from "../Footer/Footer.module.css"


export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <p>©2023 Litton Headphones | All rights reserverd</p>
      <div className="footer-icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook/>
      </div>
    </div>
  );
}
