import styles from "./Navbar.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <>
      <div className={styles.navbarContainer}>
        <Image
          src="./litton-3.svg"
          alt="Picture of the author"
          width={80}
          height={80}
        />

        <div className="nav">
          <ul className={`${styles.navLinks}`}>
            <li>
              {" "}
              <a href="/layout">DISCOVER</a>
            </li>
            <li>
              <a href="/shop">SHOP</a>
            </li>
            <li>SUPPORT</li>
          </ul>
        </div>
        <div className={styles.cartIcon}>
          <AiOutlineShopping className="shopping-icon" />

          <span style={{ padding: "5px" }}>0</span>
        </div>
      </div>
      <div className={styles["free-delivery-container"]}>
        <a href="/pickup" className={styles["free-delivery-link"]}>
          FAST AND FREE DELIVERY
        </a>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </>
  );
}
