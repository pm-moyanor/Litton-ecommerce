import React, { useState } from "react";
import styles from "./ReviewAndConfirm.module.css";

function ReviewAndConfirm({ data, onEditStep }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { cartItems, shippingInfo, paymentInfo, selectedShippingOption } = data;

  const handleConfirmation = () => {
    setIsConfirmed(true);
    console.log(isConfirmed);
  };

  function formatCardNumber(cardNumber) {
    const formattedCardNumber = "**** **** **** " + cardNumber.slice(-4); // Display the last 4 digits
    return formattedCardNumber;
  }

  return (
    <div>
      <div>
        <div>
          <h3 className={styles["section-title"]}>Shipping Information</h3>
        </div>
        <div className={styles["info-wrapper"]}>
          <p>{shippingInfo.name}</p>
          <p>{shippingInfo.address}</p>
          <p>{shippingInfo.city}</p>
          <p>{shippingInfo.postalCode}</p>
          <p>{shippingInfo.country}</p>
        </div>
      </div>

      <div>
        <p>
          Shipping Option:
          {selectedShippingOption === "standard"
            ? "Standard Shipping"
            : "Express Shipping"}
        </p>
      </div>

      <div>
        <h3 className={styles["section-title"]}>Payment Information</h3>
        <p>
          {paymentInfo.paymentMethod === "creditCard"
            ? "Credit Card"
            : "PayPal"}
        </p>
      </div>
      {paymentInfo.paymentMethod === "creditCard" && (
        <div className={styles["info-wrapper"]}>
          <p>AMEX: {formatCardNumber(paymentInfo.cardNumber)}</p>
          <p>name: {paymentInfo.cardHolder}</p>
          <p>expiration:{paymentInfo.expirationDate}</p>
        </div>
      )}

      {!isConfirmed && (
        <>
          <button onClick={handleConfirmation} className={styles["submitBtn"]}>
            Confirm Order
          </button>
          {/* <button onClick={() => onEditStep("payment")}>Edit Payment</button> */}
        </>
      )}

      {isConfirmed && (
        <div>
          <p>Order confirmed! Your items will be shipped soon.</p>
        </div>
      )}
    </div>
  );
}

export default ReviewAndConfirm;
