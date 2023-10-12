import products from "../data";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import CardGallery from "../components/CardGallery/CardGallery";
import Footer from "../components/Footer/Footer";
import SeamlessShoppingBanner from "../components/SeamlessShoppingBanner/SeamlessShoppingBanner";
import Newsletter from "../components/Newsletter/Newsletter";
import FooterHero from "../components/FooterHero/FooterHero";

export default function Layout() {
  return (
    <div className={styles["layout"]}>
      <header className="layout__header">
        <Navbar currentPage={"layout"} />
      </header>
      <main className={`layout__main ${styles["main-container"]}`}>
        <HeroBanner />

        <CardGallery cards={products} />

        <FooterHero
          id={1}
          alt="woman-dancing"
          title="Put your rhythm in motion"
          caption="Wherever you go, the SoundLink Flex is the perfect musical sidekick for both days out and nights in"
          image={`url("videos/production_id_4594932.mp4")`}
        />

        <SeamlessShoppingBanner />

        <FooterHero
          id={2}
          alt="dual-channel-headphones"
          title="Sound shaped just for you"
          caption="Made for every ear type, Lotus Comfort headphones use CustomTune technology to personalize your listening experience with a perfect fit and balanced sound."
          image="./images/headphones_a_3.webp"
        />
        <FooterHero
          id={3}
          alt="quote-earphones"
          title="“Best Sounding Earbuds: Lotus SilentComfort Ultra Earbuds”"
          caption="- Power life magazine"
          image="./images/earphones_b_1.webp"
        />

        <FooterHero
          id={4}
          alt="man-working"
          caption="Love at first listen. That’s the power of our next-gen xtri-Gen headphones, with a best-in-class combination of noise cancelling performance and premium comfort."
          title="Create your best work"
          image="./images/good-faces-yWTUg04EZU8-unsplash.jpg"
        />

        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
