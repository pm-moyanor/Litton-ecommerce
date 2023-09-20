import React, { useState } from "react";

function ReviewAndConfirm({ data, onEditStep }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { cartItems, shippingInfo, paymentInfo, selectedShippingOption } = data;

  const handleConfirmation = () => {
    setIsConfirmed(true);
    console.log(isConfirmed);
  };

  return (
    <div>


      <div>
        <h3>Cart Items</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <h3>Shipping Information</h3>
          <button onClick={() => onEditStep("shipping")}>Edit</button>
        </div>

        <p>{shippingInfo.name}</p>
        <p>{shippingInfo.address}</p>
        <p>{shippingInfo.city}</p>
        <p>{shippingInfo.postalCode}</p>
        <p> {shippingInfo.country}</p>
      </div>

      <div>
        <h3>Selected Shipping Option</h3>
        <p>
          {selectedShippingOption === "standard"
            ? "Standard Shipping"
            : "Express Shipping"}
        </p>
      </div>

      <div>
        <div>
          <h3>Selected Payment Method</h3>
          <button onClick={() => onEditStep("payment")}>Edit</button>
        </div>
        <p>
          {paymentInfo.paymentMethod === "creditCard"
            ? "Credit Card"
            : "PayPal"}
        </p>
      </div>

      <h3>card information</h3>
      <p>number: {paymentInfo.cardNumber}</p>
      <p>name: {paymentInfo.cardHolder}</p>
      <p>expiration:{paymentInfo.expirationDate}</p>
      <p>{paymentInfo.cvv}</p>

      {!isConfirmed && (
        <>
          <button onClick={handleConfirmation}>Confirm Order</button>
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
