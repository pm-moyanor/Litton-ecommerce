import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import products from "../data";
import styles from "../styles/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar/Navbar";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import { ShippingInformation } from "../components/ShippingInformation/ShippingInformation";
import PaymentIcons from "../components/PaymentMethods/PaymentMethods";
import ReviewAndConfirm from "../components/ReviewAndConfirm/ReviewAndConfirm";
import Link from "next/link";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cartState, dispatch } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    cartItems: cartState.items,
    selectedShippingOption: "standard",
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
    setCurrentStep("confirmation");
  };

  const [currentStep, setCurrentStep] = useState("shipping");
;

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: item.id });
    }
  };

  const handleIncrease = (item) => {
    console.log(item);
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

  const handleNextStep = () => {
    setCurrentStep("payment");
  };
  const handleEditStep = (step) => {
    setCurrentStep(step);
  };

  // Define separate functions or components for each step
  const renderShippingStep = () => (
    <div>
      <ShippingInformation
        onShippingInfoChange={handleShippingInfoChange}
        onNextStep={handleNextStep}
        onShippingOptionChange={handleShippingOptionChange}
      />
    </div>
  );

  const renderPaymentStep = () => (
    <div>
      <PaymentForm onPaymentInfoChange={handlePaymentInfoChange} />
    </div>
  );

  const renderConfirmationStep = () => (
    <div>
      <ReviewAndConfirm data={formData} onEditStep={handleEditStep} />
    </div>
  );

  const renderCartItems = () => (
    <div
      className={`${styles["item-list-container"]} ${
        isCheckout ? styles["checkout"] : ""
      }`}
    >
      {isCheckout || (
        <>
          <div className={styles["account-sign-in"]}>
            <h5>Do you have a My Bose Account?</h5>
            <p>Enjoy member benefits and faster checkout Sign-in</p>
          </div>
          <h3>Products ({totalCount})</h3>
        </>
      )}

      <ul className={styles["itemList"]}>
        {cartState.items.map((item) => (
          <li style={{ listStyle: "none" }} key={item.id}>
            <div
              className={`${styles["item-container"]} ${
                isCheckout ? styles["checkout"] : ""
              }`}
            >
              <img src={item.image} alt={item.title} />

              <div className={styles["item-info"]}>
                <div className={styles["item-description"]}>
                  <h3>{item.title}</h3>
                  <div className={styles["selected-color-wrapper"]}>
                    <div
                      style={{ backgroundColor: item.selectedColor.hex }}
                    ></div>
                    <p>{item.selectedColor.name}</p>
                  </div>
                </div>

                {isCheckout ? (
                  <div className={styles["price-quantity-container"]}>
                    <h4>${item.price}</h4>
                  </div>
                ) : (
                  <div className={styles["price-quantity-container"]}>
                    <div className={styles["quantity-container"]}>
                      <button onClick={() => handleDecrease(item)}>-</button>
                      <p style={{ fontWeight: "bold" }}>{item.quantity}</p>
                      <button onClick={() => handleIncrease(item)}>+</button>
                    </div>
                    <h4>${item.price * item.quantity}</h4>
                  </div>
                )}
              </div>

              <div
                className={styles["delete-icon"]}
                onClick={() => handleRemoveItem(item)}
              >
                <FontAwesomeIcon icon={faTrashCan} size="md" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderOrderSummary = () => (
    <div
      className={`${styles["summary-container"]} ${
        isCheckout ? styles["checkout"] : ""
      }`}
    >
      <div className={styles["title-edit-link_wrapper"]}>
        <h2>
          {isCheckout ? `Order Summary (${totalCount})` : "Order Summary"}
        </h2>
        {isCheckout && (
          <div
            className={styles["edit-link-wrapper"]}
            onClick={() => setIsCheckout(!isCheckout)}
          >
            <p>edit cart</p>
            <div style={{width:"20px"}}>
                      <FontAwesomeIcon icon={faPenToSquare} size="xs" />
                      </div>
          </div>
        )}
      </div>

      {isCheckout && renderCartItems()}

      <div className={styles["details-container"]}>
        <div className={styles["summary-detail"]}>
          <h4>Subtotal</h4>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        
        {isCheckout ? (
        formData.selectedShippingOption === "standard" ? (
          <div className={styles["summary-detail"]}>
            <h4>Standard Shipping</h4>
            <p>Free</p>
          </div>
        ) : (
          <div className={styles["summary-detail"]}>
            <h4>Express Shipping</h4>
            <p>$12.95</p>
          </div>
        )
      ) : (
        <div className={styles["summary-detail"]}>
          <h4>Shipping</h4>
          <p>--</p>
        </div>
      )}
        <div className={styles["summary-detail"]}>
          <h4>Tax</h4>
          <p>${tax.toFixed(2)}</p>
        </div>
        <div className={styles["summary-detail"]}>
          <h4>Total</h4>
          <p>${(parseFloat(totalPrice) + parseFloat(formData.shippingFee)).toFixed(2)}</p>

        </div>
      </div>
      {!isCheckout && (
        <>
          <div className={styles["buttons"]}>
            <button className={styles["continue-button"]}>
              <Link
                href="/shop"
                style={{ color: "black", textDecoration: "none" }}
              >
                continue shopping
              </Link>
            </button>
            <button
              className={styles["checkout-button"]}
              onClick={() => {
                console.log(formData);
                handleFormSubmit();
                setIsCheckout(!isCheckout);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
          <PaymentIcons />
        </>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <h1 className={styles["title"]}>Your Cart</h1>
      <div
        className={`${styles["cart-container"]} ${
          isCheckout ? styles["checkout"] : ""
        }`}
      >
        {cartState.items && cartState.items.length > 0 ? (
          <>
            {isCheckout ? (
              <>
                <div className={styles["steps-wrapper"]}>
                  <div
                    className={`${styles["title-edit-link_wrapper"]} ${
                      currentStep !== "shipping" ? styles["collapsed"] : ""
                    }`}
                  >
                    <h2>1/3 Shipping</h2>
                    {currentStep === ""}
                    <div
                      onClick={() => setCurrentStep("shipping")}
                      className={styles["edit-link-wrapper"]}
                    >
                      <p>edit</p>
                      <div style={{width:"20px"}}>
                      <FontAwesomeIcon icon={faPenToSquare} size="xs" />
                      </div>
               
                    </div>
                  </div>
                  {currentStep === "shipping" && renderShippingStep()}
                  <div
                    className={`${styles["title-edit-link_wrapper"]} ${
                      currentStep !== "payment" ? styles["collapsed"] : ""
                    }`}
                  >
                    <h2>2/3 Payment</h2>

                    <div
                      onClick={() => setCurrentStep("payment")}
                      className={styles["edit-link-wrapper"]}
                    >
                      <p>edit</p>
                      <div style={{width:"20px"}}>
                      <FontAwesomeIcon icon={faPenToSquare} size="xs" />
                      </div>
                    </div>
                  </div>
                  {currentStep === "payment" && renderPaymentStep()}

                  <div
                    className={`${styles["title-edit-link_wrapper"]} ${
                      currentStep !== "confirmation" ? styles["collapsed"] : ""
                    }`}
                  >
                    <h2>3/3 Review and confirm</h2>
                  </div>
                  {currentStep === "confirmation" && renderConfirmationStep()}
                </div>

                {renderOrderSummary()}
              </>
            ) : (
              <>
                {renderCartItems()}
                {renderOrderSummary()}
              </>
            )}
          </>
        ) : (
          <div>
            <p>Cart is currently empty</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
