import styles from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";
import CategorySubmenu from "../CategorieSubmenu/CategorySubmenu";

export default function Navbar() {
  const { cartState } = useCart();
  const [showSubmenu, setShowSubmenu] = useState(false); // State to control submenu visibility


  const countItems = (list) => {
    return list.reduce((totalCount, item) => totalCount + item.quantity, 0);
  };

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
            <Link
              href="/layout"
              style={{ color: "black", textDecoration: "none" }}
            >
              DISCOVER
            </Link>
          </li>
          <li
            onMouseEnter={() => setShowSubmenu(true)} // Show submenu on mouse enter
            onMouseLeave={() => setShowSubmenu(false)} // Hide submenu on mouse leave
          >
            <Link
              href="/shop"
              style={{ color: "black", textDecoration: "none" }}
            >
              SHOP
            </Link>
            {/* Conditionally render submenu */}
            {showSubmenu && <CategorySubmenu />}
          </li>
          <li>SUPPORT</li>
        </ul>
        </div>
        <div className={styles.cartIcon}>
          <Link href="/cart">
            <AiOutlineShopping className="shopping-icon" />
          </Link>
          {cartState.items.length > 0 ? (
            <p style={{ padding: "5px" }}>{countItems(cartState.items)}</p>
          ) : (
            <p>0</p>
          )}
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
