import styles from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";
import CategorySubmenu from "../CategorieSubmenu/CategorySubmenu";

export default function Navbar({ currentPage, showSubmenu }) {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { cartState } = useCart();
  const isLayoutPage = currentPage === "layout"; // Check if the current page is "Layout"

  // How many items in cart
  const countItems = (list) => {
    return list.reduce((totalCount, item) => totalCount + item.quantity, 0);
  };

  const handleMouseEnter = () => {
    if (isLayoutPage) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                href="/shop"
                style={{ color: "black", textDecoration: "none" }}
              >
                SHOP
              </Link>
              {isHovered && isLayoutPage && (
                <CategorySubmenu isShopPage={currentPage === "shop"} isSubmenuHovered={isHovered} />
              )}
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
