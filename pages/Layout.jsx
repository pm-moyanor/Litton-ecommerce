import productsWithImgs from "./data";
import styles from "../styles/Layout.module.css"
import Navbar from "../components/Navbar/Navbar"
import HeroBanner from "../components/HeroBanner/HeroBanner";

import Footer from "../components/Footer/Footer";
import SeamlessShoppingBanner from "../components/SeamlessShoppingBanner/SeamlessShoppingBanner";
import Card from "../components/Card/Card";
import Newsletter from "../components/Newsletter/Newsletter";
import FooterHero from "../components/FooterHero/FooterHero";
import { useState, useEffect } from "react";

console.log(productsWithImgs[0]);

export default function Layout() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Shuffle the products to get random ones
    const shuffledProducts = shuffle(productsWithImgs);
    // Take the first 3 products as random ones
    const randomProducts = shuffledProducts.slice(0, 3);
    setRandomProducts(randomProducts);
  }, []);

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

 return (
    <div className={styles["layout"]}>
      <header className="layout__header">
        <Navbar />
        <HeroBanner />
      </header>
      <main className={`layout__main ${styles["main-container"]}`}>
        {/* <Shop /> */}
        <div className={styles["three-card-section"]}>
          <div className={styles["title-container"]}>
            <h2>Popular Now</h2>
          </div>

          <div className={styles["products"]}>
            {randomProducts.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </div>

        <SeamlessShoppingBanner />
        <FooterHero />
        <Newsletter />
      </main>
      <footer className="layout__footer footer-container">
        <Footer />
      </footer> 
    </div>
  );
}
