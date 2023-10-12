import { useCart } from "../CartContext";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import products from "../data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faSort } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import CategorySubmenu from "../components/CategorieSubmenu/CategorySubmenu";

export default function Shop() {
  const { dispatch } = useCart();
  const [sortCriteria, setSortCriteria] = useState("");
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayedProducts, setDisplayedProducts] = useState(3); // Number of products to display initially
  const [totalProducts, setTotalProducts] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false); // To control the visibility of the "Back to Top" button


  const router = useRouter();
  const queryCategory = router.query.category;

  useEffect(() => {
    if (queryCategory) {
      setSelectedCategory(queryCategory);
    }
  }, [queryCategory]);

  useEffect(() => {
    // Add an event listener to check the scroll position and show/hide the "Back to Top" button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    router.push(`/shop?category=${category}`);
  };

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item.id });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory === "all") {
        return true;
      }
      const category = product.image.includes("headphones")
        ? "headphones"
        : "earphones";
      return category === selectedCategory;
    });
  }, [selectedCategory]);

  useEffect(() => {
    // Initially set shuffledProducts to filteredProducts
    setShuffledProducts(filteredProducts);
    setTotalProducts(filteredProducts.length);
  }, [filteredProducts]);

  const sortProductsByPriceHighToLow = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setSortCriteria("priceHighToLow");
    setShuffledProducts(sorted);
  };

  const sortProductsByPriceLowToHigh = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setSortCriteria("priceLowToHigh");
    setShuffledProducts(sorted);
  };

  const sortProductsByRecommended = () => {
    const sorted = [...filteredProducts].sort(() => Math.random() - 0.5);
    setSortCriteria("recommended");
    setShuffledProducts(sorted);
  };
  const loadMoreProducts = () => {
 
    setDisplayedProducts(displayedProducts + 3);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const visibleProducts = shuffledProducts.slice(0, displayedProducts);

  return (
    <>
      <Navbar currentPage={"shop"} />
      <div className={styles["banner"]}>
        <img src="./images/banner1.jpg.large.2x.jpg" />
      </div>
      <div className={styles["navWrapper"]}>
        <CategorySubmenu
          isShopPage={true}
          onCategorySelect={handleCategorySelect}
          showAll={true}
        />

        <div className={styles["sortBlock"]}>
          <p className={styles["sortLabel"]}>
            Sort by
            <FontAwesomeIcon icon={faSort} style={{padding: "0px 10px"}}/>
          </p>

          <div className={styles["sortDropdown"]}>
            <button onClick={sortProductsByPriceHighToLow}>
              Highest price
            </button>
            <button onClick={sortProductsByPriceLowToHigh}>Lowest price</button>
            <button onClick={sortProductsByRecommended}>Recommended</button>
          </div>
          <p>
            {sortCriteria === "priceHighToLow" && "Highest price"}
            {sortCriteria === "priceLowToHigh" && "Lowest price"}
            {sortCriteria === "recommended" && "Recommended"}
          </p>
        </div>
      </div>

      <div className={styles["container"]}>
        <ul>
          {visibleProducts.map((product) => (
            <li key={product.id} className={styles["card-container"]}>
              <Card
                product={product}
                inShop={true}
                onAddToCart={handleAddToCart}
              />
            </li>
          ))}
        </ul>
        {displayedProducts < totalProducts ? (
          <button className={styles[`${"navButton"}`]} onClick={loadMoreProducts}>Load More</button>
        ) : (
          <button className={styles[`${"navButton"}`]} onClick={scrollToTop}>Back to top</button>
        )
      }

{showBackToTop && (
          <button className={styles["backToTop"]} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} style={{padding: "0px 10px"}}/>
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
