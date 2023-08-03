import styles from "../styles/Cart.module.css";

import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { NodeNextResponse } from "next/dist/server/base-http/node";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    }
  };

  const handleIncrease = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  return (
    <>
      <Navbar />
      <h1 className={styles["main-title"]}>Your Cart</h1>
      <div>
        {cartItems && cartItems.length > 0 ? (
          <div className={styles["cart-container"]}>
            <div className={styles["item-list-container"]}>
              <h2>Products</h2>
              <ul>
                {cartItems.map((item) => (
                  <li style={{ listStyle: "none" }} key={item.id}>
                    <div className={styles["item-container"]}>
                      <img src={item.image} style={{ width: "200px" }} />

                      <div className={styles["item-info"]}>
                        <div className={styles["item-description"]}>
                          <h3> {item.title} </h3>
                          <p>
                            color:{item.colors.name} this is the description{" "}
                          </p>
                        </div>

                        <div className={styles["price-quantity-container"]}>
                          <div className={styles["quantity-container"]}>
                            <button onClick={() => handleDecrease(item)}>
                              -
                            </button>
                            <p style={{ fontWeight: "bold" }}>
                              {item.quantity}
                            </p>
                            <button onClick={() => handleIncrease(item)}>
                              {" "}
                              +{" "}
                            </button>
                          </div>
                          <h4> ${item.price}</h4>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles["summary-container"]}>
              <h2>Order Summary</h2>
              <div className={styles["summary-detail"]}>
                <h4>Subtotal</h4>
                <p>$123</p>
              </div>
              <div className={styles["summary-detail"]}>
                <h4>Standard Shipping</h4>
                <p>Free</p>
              </div>
              <div className={styles["summary-detail"]}>
                <h4>Tax</h4>
                <p>$12</p>
              </div>
              <div className={styles["summary-detail"]}>
                <h4>Total</h4>
                <p>$135</p>
              </div>
              <button className={styles["checkout-button"]}>
                Proceed to Checkout
              </button>
            </div>

            {/* <Form /> */}
          </div>
        ) : (
          <div>
            <p>Cart is currently empty</p>
          </div>
        )}
      </div>
    </>
  );
}
