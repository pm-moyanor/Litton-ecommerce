import React from "react";
import styles from "./CategorySubmenu.module.css";
import Link from "next/link";

export default function CategorySubmenu({
  isShopPage,
  showAll,
  isSubmenuHovered,
}) {
  const categories = showAll
    ? ["headphones", "earphones", "all"]
    : ["headphones", "earphones"];

  return (
    <div
      className={`${styles.submenuWrapper} 
    ${isSubmenuHovered ? styles.submenuOpen : ""}`}
    >
      <ul
        className={`${styles.submenuUl} ${
          isShopPage ? styles.shopMenuMode : ""
        }`}
      >
        {categories.map((category) => (
          <li key={category} className={styles.submenuLi}>
            <Link
              href={`/shop?category=${category}`}
              passHref
              className={styles.submenuLink}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
