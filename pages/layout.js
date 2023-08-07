import products from "./data";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Cart from "../pages/cart";
import Footer from "../components/Footer/Footer";
import SeamlessShoppingBanner from "../components/SeamlessShoppingBanner/SeamlessShoppingBanner";
import Card from "../components/Card/Card";
import Newsletter from "../components/Newsletter/Newsletter";
import FooterHero from "../components/FooterHero/FooterHero";
import VideoHero from "../components/VideoHero/VideoHero";

export default function Layout() {
  const threeCards = products.slice(6, 10);

  return (
    <div className={styles["layout"]}>
      <header className="layout__header">
        <Navbar />
        <HeroBanner />
      </header>
      <main className={`layout__main ${styles["main-container"]}`}>
        <div className={styles["three-card-section"]}>
          <div className={styles["title-container"]}>
            <h2>Popular Now</h2>
          </div>
          <ul className={styles["products"]}>
            {threeCards.map((product) => (
              <Card product={product} key={product.id} inShop={false} />
            ))}
          </ul>
        </div>
        <VideoHero />
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
