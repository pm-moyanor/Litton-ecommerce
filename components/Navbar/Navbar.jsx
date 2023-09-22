import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";
import CategorySubmenu from "../CategorieSubmenu/CategorySubmenu";

export default function Navbar({ currentPage }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const { cartState } = useCart();
  const isLayoutPage = currentPage === "layout";



  // How many items in cart
  const countItems = (list) => {
    return list.reduce((totalCount, item) => totalCount + item.quantity, 0);
  };

  const handleShopClick = () => {
    // Redirect to the shop page when SHOP is clicked
    router.push("/shop");
  };

  return (
    <>
      <div
        className={`${styles["navbarContainer"]} ${
          isHovered ? styles["active"] : ""
        } `}
      >
        <div className={styles["logoWrapper"]}>
          <Image
            src="./litton-3.svg"
            alt="Picture of the author"
            width={80}
            height={80}
          />
        </div>

        <div className={styles["nav"]}>
          <ul className={styles["navLinks"]}>
            <li className={styles["navLinkItem"]}>
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
        onClick={handleShopClick}
        className={`${styles["navLinkItem"]} ${styles["shopLink"]} ${
          isHovered && isLayoutPage ? styles["open"] : ""
        } `}
      >
        SHOP
        {isHovered && (
          <CategorySubmenu
            isShopPage={currentPage === "shop"}
            isSubmenuHovered={isHovered}
          />
        )}
      </li>

            <li className={styles["navLinkItem"]}>
              <Link
                href="/contact"
                style={{ color: "black", textDecoration: "none" }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles["cartIcon"]}>
          <Link href="/cart">
            <AiOutlineShopping className={styles["shoppingIcon"]} />
          </Link>
          {cartState.items.length > 0 ? (
            <p style={{ padding: "5px" }}>{countItems(cartState.items)}</p>
          ) : (
            <p>0</p>
          )}
        </div>
      </div>

      <div className={`${styles["freeDeliveryContainer"]} ${styles["blackRibbon"]}`}>
        <Link href="/pickup" className={styles["freeDeliveryLink"]}>
          FAST AND FREE DELIVERY
        </Link>
        <div className={styles["linkIconContainer"]}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </div>
      </div>
    </>
  );
}
