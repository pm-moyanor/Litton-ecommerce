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

        {/* First instance of FooterHero */}
        <FooterHero
          id={1}
          alt="dual-channel-headphones"
          title="Sound shaped just for you"
          caption="Made for every ear type, Lotus Comfort headphones use CustomTune technology to personalize your listening experience with a perfect fit and balanced sound."
          image="./images/headphones_a_3.webp"
          customStyle={{
            image: { width: "55%", margin: "50px" }, // Custom styles for the image
            text: {
              color: "black",
              position: "absolute",
              width: "50%",
              right: "70px",
              top: "20%",
            }, // Custom styles for the text
          }}
        />
        {/* Second instance of FooterHero */}
        <FooterHero
          id={2}
          alt="woman-dancing"
          title="Put rhythm in motion"
          color={`${styles.overlay} ${styles.fadeIn}`}
          image={`url("videos/production_id_4594932.mp4")`}
        />

        <SeamlessShoppingBanner />

        {/* Third instance of FooterHero with specific styles */}
        <FooterHero
          id={3}
          alt="man-working"
          caption="Love at first listen. That’s the power of our next-gen xtri-Gen headphones, with a best-in-class combination of noise cancelling performance and premium comfort."
          title="Create your best work"
          image="./images/good-faces-yWTUg04EZU8-unsplash.jpg"
          bgColor="#d6dee1"
          color="white"
          customStyle={{
            image: {
              width: "100%",
              objectFit: "cover",
            },
            text: { marginRight: "20%" },
          }}
        />

        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
