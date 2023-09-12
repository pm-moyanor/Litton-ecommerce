import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";
import CategorySubmenu from "../CategorieSubmenu/CategorySubmenu";

export default function Navbar({ currentPage }) {
  const [isHovered, setIsHovered] = useState(false);

  const { cartState } = useCart();
  const isLayoutPage = currentPage === "layout"; // Check if the current page is "Layout"

  // How many items in cart
  const countItems = (list) => {
    return list.reduce((totalCount, item) => totalCount + item.quantity, 0);
  };

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${isHovered ? styles.active : ""} `}
      >
        <div className={styles.logoWrapper}>
          <Image
            src="./litton-3.svg"
            alt="Picture of the author"
            width={80}
            height={80}
          />
        </div>

        <div className={styles.nav}>
          <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
              <Link
                href="/layout"
                style={{ color: "black", textDecoration: "none" }}
              >
                DISCOVER
              </Link>
            </li>

            {/* SHOP LINK */}
            <li
              onMouseEnter={() => {
                if (isLayoutPage) setIsHovered(true);
              }}
              onMouseLeave={() => {
                if (isLayoutPage) setIsHovered(false);
              }}
              className={`${styles.navLinkItem} ${styles.shopLink} ${
                isHovered && isLayoutPage ? styles.open : ""
              } `}
            >
              <Link
                href="/shop"
                style={{ color: "black", textDecoration: "none" }}
              >
                SHOP
              </Link>
              {isHovered && (
                <CategorySubmenu
                  isShopPage={currentPage === "shop"}
                  isSubmenuHovered={isHovered}
                />
              )}
            </li>

            <li className={styles.navLinkItem}>
            <Link
                href="/contact"
                style={{ color: "black", textDecoration: "none" }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.cartIcon}>
          <Link href="/cart">
            <AiOutlineShopping className={styles.shoppingIcon} />
          </Link>
          {cartState.items.length > 0 ? (
            <p style={{ padding: "5px" }}>{countItems(cartState.items)}</p>
          ) : (
            <p>0</p>
          )}
        </div>
      </div>
      <div className={styles.freeDeliveryContainer}>
        <Link href="/pickup" className={styles.freeDeliveryLink}>
          FAST AND FREE DELIVERY
        </Link>
        <div className={styles.linkIconContainer}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </>
  );
}
