import React from "react";
import styles from "./CategorySubmenu.module.css";
import Link from "next/link";

export default function CategorySubmenu({ isShopPage, isSubmenuHovered, showAll }) {
  const categories = showAll
    ? ["headphones", "earphones", "all"]
    : ["headphones", "earphones"];

  return (
    <div className={`${styles["subMenu-wrapper"]} ${isSubmenuHovered ? styles["submenu-hovered"] : ""}`}>
      <ul
        className={`${styles["subMenu-ul"]} ${
          isShopPage ? styles["shop-menu-mode"] : ""
        }`}
      >
       {categories.map((category) => (
          <li key={category}>
            <Link href={`/shop?category=${category}`} passHref>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
