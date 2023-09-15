import React from "react";
import { useCart } from "../CartContext";
import products from "./data";
import styles from "../styles/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";
import PaymentForm from "../components/PaymentForm";
import {
  ShippingInformation,
  ShippingOptions,
} from "../components/ShippingInformation/ShippingInformation";
import PaymentIcons from "../components/PaymentMethods/PaymentMethods";
import ReviewAndConfirm from "../components/ReviewAndConfirm/ReviewAndConfirm";

export default function Cart() {
  const { cartState, dispatch } = useCart();
  const threeCards = products.slice(6, 10);

  const data = {
    cartItems: [
      {
        id: 1,
        name: "Product 1",
        price: 19.99,
        quantity: 2,
      
      },
      {
        id: 2,
        name: "Product 2",
        price: 29.99,
        quantity: 1,
     
      },
    ],
    shippingInfo: {
      name: "John Doe",
      address: "123 Main Street",
      city: "Cityville",
      postalCode: "12345",
      country: "Countryland",
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
    paymentInfo: {
      paymentMethod: "creditCard",
      cardNumber: "**** **** **** 1234",
      cardHolder: "John Doe",
      expirationDate: "12/23",
      cvv: "123",
    },
    totalPrice: 79.97, // Total price of items
    shippingFee: 5.0, // Shipping fee
    orderTotal: 84.97, // Total cost including shipping
  };

  console.log(data);

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: item.id });
    }
  };

  const handleIncrease = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  };

  const calculateSubtotal = () => {
    const subtotal = cartState.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.08875; // 8.875% tax rate
    return { subtotal, tax };
  };

  const { subtotal, tax } = calculateSubtotal();

  const totalCount = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <h1 className={styles["title"]}>Your Cart</h1>

      <div>
        {cartState.items && cartState.items.length > 0 ? (
          <div className={styles["cart-container"]}>
            <div className={styles["item-list-container"]}>
              <div className={styles["acount-sign-in"]}>
                <h5>Do you have a My Bose Account?</h5>
                <p>Enjoy member benefits and faster checkout Sign-in</p>
              </div>
              <h2>Products ({totalCount})</h2>

              <ul className={styles.itemList}>
                {cartState.items.map((item) => (
                  <li style={{ listStyle: "none" }} key={item.id}>
                    <div className={styles["item-container"]}>
                      <img src={item.image} alt={item.title} />

                      <div className={styles["item-info"]}>
                        <div className={styles["item-description"]}>
                          <h3>{item.title}</h3>
                          <p>color: black</p>
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
                              +
                            </button>
                          </div>
                          <h4>${item.price}</h4>
                        </div>
                      </div>
                      <div
                        className={styles["delete-icon"]}
                        onClick={() => handleRemoveItem(item)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} size="lg" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles["summary-container"]}>
              <div>
                <h2>Order Summary</h2>
                <div className={styles["summary-detail"]}>
                  <h4>Subtotal</h4>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className={styles["summary-detail"]}>
                  <h4>Standard Shipping</h4>
                  <p>Free</p>
                </div>
                <div className={styles["summary-detail"]}>
                  <h4>Tax</h4>
                  <p>${tax.toFixed(2)}</p>
                </div>
                <div className={styles["summary-detail"]}>
                  <h4>Total</h4>
                  <p>${(subtotal + tax).toFixed(2)}</p>
                </div>
                <div className={styles.buttons}>
                  <button className={styles["continue-button"]}>
                    Continue shopping
                  </button>
                  <button className={styles["checkout-button"]}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
              <PaymentIcons />
            </div>
          </div>
        ) : (
          <div>
            <p>Cart is currently empty</p>
          </div>
        )}
        <div className={styles.suggested}>
          <h2 className={styles["title"]}>You may also like</h2>
          <ul className={styles["products"]}>
            {threeCards.map((product) => (
              <Card product={product} key={product.id} inShop={false} />
            ))}
          </ul>
        </div>

        <ShippingInformation />
        <ShippingOptions />
        <PaymentForm />
        <ReviewAndConfirm
        data={data}
        />
      </div>
      <Footer />
    </>
  );
}
