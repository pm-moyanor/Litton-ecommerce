import React, { useState, useEffect } from "react";
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

  const [formData, setFormData] = useState({
    cartItems: cartState.items,
    selectedShippingOption: "",
    shippingInfo: {
      name: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      email: "",
      phone: "",
    },

    paymentInfo: {
      paymentMethod: "",
      cardNumber: "",
      cardHolder: "",
      expirationDate: "",
      cvv: "",
    },
    totalPrice: "",
    shippingFee: 0,
    orderTotal: "",
  });

  const handleShippingOptionChange = (option) => {
    if (option === "express") {
      setFormData({
        ...formData,
        selectedShippingOption: option,
        shippingFee: 12.95,
      });
    } else {
      // Standard shipping option selected, remove the shippingFee
      const { shippingFee, ...formDataWithoutFee } = formData;
      setFormData({
        ...formDataWithoutFee,
        selectedShippingOption: option,
        shippingFee: 0,
      });
    }
  };

  // Function to update shipping information

  const handleShippingInfoChange = (newShippingInfo) => {
    // Update the formData state by merging the new shipping information
    console.log("New Shipping Info:", newShippingInfo);
    setFormData((prevData) => ({
      ...prevData,
      shippingInfo: { ...newShippingInfo },
    }));
  };

  const handlePaymentInfoChange = (newPaymentInfo) => {
    setFormData((prevData) => ({
      ...prevData,
      paymentInfo: { ...newPaymentInfo },
    }));
  };

  const [currentStep, setCurrentStep] = useState("shipping");

  const threeCards = products.slice(6, 10);

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
    const totalPrice = (subtotal + tax).toFixed(2);
    return { subtotal, tax, totalPrice };
  };

  const { subtotal, tax, totalPrice } = calculateSubtotal();

  const totalCount = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleFormSubmit = (updatedData, step) => {
    const totalPriceNum = parseFloat(totalPrice);
    const shippingFeeNum = parseFloat(formData.shippingFee);

    const orderTotal = totalPriceNum + shippingFeeNum;

    const updatedFormData = {
      ...formData,
      ...updatedData,
      totalPrice: totalPriceNum.toFixed(2),
      orderTotal: orderTotal.toFixed(2),
    };

    setFormData(updatedFormData);

    // Determine the next step
    switch (step) {
      case "shipping":
        setCurrentStep("payment");
        break;
      case "payment":
        setCurrentStep("confirmation");
        break;

      default:
        break;
    }
  };

  // Define separate functions or components for each step
  const renderShippingStep = () => (
    <>
      <ShippingInformation onShippingInfoChange={handleShippingInfoChange} />
      <ShippingOptions onShippingOptionChange={handleShippingOptionChange} />
      <div>
        {/* Shipping form and components */}
        <button onClick={() => setCurrentStep("payment")}>Next</button>
      </div>
    </>
  );

  const renderPaymentStep = () => (
    <>
      <PaymentForm onPaymentInfoChange={handlePaymentInfoChange} />
      <div>
        {/* Payment form and components */}
        <button onClick={() => setCurrentStep("confirmation")}>Next</button>
      </div>
    </>
  );

  const renderConfirmationStep = () => (
    <div>
      <button>confirm</button>
    </div>
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
                  <p>${totalPrice}</p>
                </div>
                <div className={styles.buttons}>
                  <button className={styles["continue-button"]}>
                    Continue shopping
                  </button>
                  <button
                    className={styles["checkout-button"]}
                    onClick={handleFormSubmit}
                  >
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

        {currentStep === "shipping" && renderShippingStep()}

        {currentStep === "payment" && renderPaymentStep()}

        {currentStep === "confirmation" && renderConfirmationStep()}

        {/* <ReviewAndConfirm
        data={formData}
        /> */}
      </div>

      <div className={styles.suggested}>
        <h2 className={styles["title"]}>You may also like</h2>
        <ul className={styles["products"]}>
          {threeCards.map((product) => (
            <Card product={product} key={product.id} inShop={false} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
