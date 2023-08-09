// CategorySubmenu.js
import Link from "next/link";
import styles from "./CategorySubmenu.module.css"; // Create a CSS module for styling

export default function CategorySubmenu() {
  return (
    <div className={styles.submenu}>
      <ul>
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
