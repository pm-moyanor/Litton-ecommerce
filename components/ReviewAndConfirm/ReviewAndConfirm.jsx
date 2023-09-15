import React, { useState } from "react";

function ReviewAndConfirm({ data }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { cartItems, shippingInfo, paymentInfo } = data;
  console.log("Cart Items:", cartItems);
  console.log("Shipping Info:", shippingInfo);
  const handleConfirmation = () => {
    setIsConfirmed(true);
    console.log(isConfirmed);
  };

  return (
    <div>
      <h2>Review and Confirm</h2>

      <div>
        <h3>Cart Items</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Shipping Information</h3>
        <p>Name: {shippingInfo.name}</p>
        <p>Address: {shippingInfo.address}</p>
        <p>City: {shippingInfo.city}</p>
        <p>Postal Code: {shippingInfo.postalCode}</p>
        <p>Country: {shippingInfo.country}</p>
      </div>

      {/* <div>
        <h3>Selected Shipping Option</h3>
        <p>
          {selectedShippingOption === "standard"
            ? "Standard Shipping"
            : "Express Shipping"}
        </p>
      </div>

      <div>
        <h3>Selected Payment Method</h3>
        <p>
          {selectedPaymentMethod === "creditCard" ? "Credit Card" : "PayPal"}
        </p>
      </div> */}

      {!isConfirmed && (
        <button onClick={handleConfirmation}>Confirm Order</button>
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
