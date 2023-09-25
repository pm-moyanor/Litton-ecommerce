import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";
import CategorySubmenu from "../CategorieSubmenu/CategorySubmenu";

export default function Navbar({ currentPage }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
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

  // Function to handle window resize
  const handleWindowResize = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const renderMobileMenu = () => {
    return (
      <ul className={styles["mobileMenu"]}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          className={styles["x-mark"]}
        />
        <li className={styles["navLinkItem"]}>
          <Link
            href="/layout"
            style={{ color: "black", textDecoration: "none" }}
          >
            DISCOVER
          </Link>
        </li>
        <li className={styles["navLinkItem"]}>
          <Link
            href="/layout"
            style={{ color: "black", textDecoration: "none" }}
          >
            SHOP
          </Link>
        </li>
        <li className={styles["navLinkItem"]}>
          <Link
            href="/layout"
            style={{ color: "black", textDecoration: "none" }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    );
  };

  // Add an event listener to handle window resize
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
            width={100}
            height={80}
          />
        </div>

        <div className={`${styles["nav"]} `}>
          {isMenuOpen ? (
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className={`${styles["nav"]} ${toggleMenu ? "open" : ""}`}
            >
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className={styles["hamburguer"]}
              />
              {toggleMenu && renderMobileMenu()}
            </div>
          ) : null}
          <ul
            className={`${styles["navLinks"]} ${
              isMenuOpen ? styles["open"] : ""
            }
          
              `}
          >
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

        <div
          className={`${styles["cartIcon"]} ${
            isMenuOpen ? styles["open"] : ""
          }`}
        >
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

      <div
        className={`${styles["freeDeliveryContainer"]} ${styles["blackRibbon"]}`}
      >
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
