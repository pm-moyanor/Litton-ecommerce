import styles from "./Navbar.module.css";
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
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
              <Link href="/layout">DISCOVER</Link>
            </li>
            <li>
              <Link href="/shop">SHOP</Link>
            </li>
            <li>SUPPORT</li>
          </ul>
        </div>
        <div className={styles.cartIcon}>
          <Link href="/cart">
          <AiOutlineShopping className="shopping-icon" />
          </Link>

          <span style={{ padding: "5px" }}>0</span>
        </div>
      </div>
      <div className={styles["free-delivery-container"]}>
        <Link href="/pickup" className={styles["free-delivery-link"]}>
          FAST AND FREE DELIVERY
        </Link>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </>
  );
}
