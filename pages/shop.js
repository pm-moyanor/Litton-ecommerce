import { useCart } from "../CartContext";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import products from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import CategorySubmenu from "../components/CategorieSubmenu/CategorySubmenu";

export default function Shop() {
  const { dispatch } = useCart();
  const [sortCriteria, setSortCriteria] = useState("");
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const router = useRouter();
  const queryCategory = router.query.category;

  useEffect(() => {
    if (queryCategory) {
      setSelectedCategory(queryCategory);
    }
  }, [queryCategory]);

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
          {shuffledProducts.map((product) => (
            <li key={product.id} className={styles["card-container"]}>
              <Card
                product={product}
                inShop={true}
                onAddToCart={handleAddToCart}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
