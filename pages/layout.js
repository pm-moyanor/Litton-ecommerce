import products from "./data";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import CardGallery from "../components/CardGallery/CardGallery";
import Footer from "../components/Footer/Footer";
import SeamlessShoppingBanner from "../components/SeamlessShoppingBanner/SeamlessShoppingBanner";
import Newsletter from "../components/Newsletter/Newsletter";
import FooterHero from "../components/FooterHero/FooterHero";
import VideoHero from "../components/VideoHero/VideoHero";

export default function Layout() {
  return (
    <div className={styles["layout"]}>
      <header className="layout__header">
        <Navbar currentPage={"layout"} />
     
      </header>
      <main className={`layout__main ${styles["main-container"]}`}>
      <HeroBanner />
        <div className={styles["three-card-section"]}>
          <div className={styles["title-container"]}>
            <h2>Popular Now</h2>
          </div>
          <CardGallery cards={products} />
        </div>
        <VideoHero />
        <SeamlessShoppingBanner />

        <FooterHero />
        <Newsletter />
      </main>

     
    </div>
  );
}
