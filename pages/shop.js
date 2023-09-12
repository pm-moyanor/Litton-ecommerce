import { useCart } from "../CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import products from "./data";
import styles from "../styles/Shop.module.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import CategorySubmenu from "../components/CategorieSubmenu/CategorySubmenu";
import SeamlessShoppingBanner from "../components/SeamlessShoppingBanner/SeamlessShoppingBanner";

export default function Shop() {
  const { dispatch } = useCart();
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

  // Display all products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    }
    // render the category based on the product's image
    const category = product.image.includes("headphones")
      ? "headphones"
      : "earphones";
    return category === selectedCategory;
  });

  // Mix the 2 categories for better UX
  const shuffledProducts =
    selectedCategory === "all"
      ? [...filteredProducts].sort(() => Math.random() - 0.5)
      : filteredProducts;

  return (
    <>
      <Navbar currentPage={"shop"} />
      <div className={styles.banner}>
        <img src="./images/banner1.jpg.large.2x.jpg" />
      </div>
      <div className={styles.categoryMenu}>
        <CategorySubmenu
          isShopPage={true}
          onCategorySelect={handleCategorySelect}
          showAll={true}
        />
      </div>
      <div className={styles.container}>
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
      <SeamlessShoppingBanner/>
      <Footer/>
    </>
  );
}
