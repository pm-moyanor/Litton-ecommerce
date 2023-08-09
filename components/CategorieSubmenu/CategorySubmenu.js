// CategorySubmenu.js
import Link from "next/link";
import styles from "./CategorySubmenu.module.css"; // Create a CSS module for styling
import { useState } from "react";

export default function CategorySubmenu({ inShop }) {
  const [inShopMenu, setInShopMenu] = useState(inShop);
  return (
    <div  className={styles["subMenu-wrapper"]}>
      <ul
        className={`${styles["subMenu-ul"]} ${
          inShopMenu ? styles["shop-menu-mode"] : ""
        }`}
      >
        <li>
          <Link href="/category/headphones">Headphones</Link>
        </li>
        <li>
          <Link href="/category/earbuds">Earbuds</Link>
        </li>
      </ul>
    </div>
  );
}
