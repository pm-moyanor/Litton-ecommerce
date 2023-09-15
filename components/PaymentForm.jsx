import { useState } from "react";
import ReviewAndConfirm from "./ReviewAndConfirm/ReviewAndConfirm";

export default function PaymentForm() {
  const [isSameAddress, setIsSameAddress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            defaultChecked={isSameAddress} // Use defaultChecked instead of checked
            onChange={() => setIsSameAddress(!isSameAddress)} // Use onChange
          />
          My billing address is not the same as my shipping address
        </label>
      </div>

      <div>
        <h2>Select Payment Method</h2>
        <div>
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={handlePaymentChange}
            />
            Pay with Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentChange}
            />
            Pay with PayPal
          </label>
        </div>
      </div>
      {paymentMethod === "paypal" && (
        <p>
          You will pay directly through the Paypal website. You can still review
          and confirm your order details before payment
        </p>
      )}

      {paymentMethod === "creditCard" && ( // Render the form only when creditCard is selected
        <form className="payment-form">
          <h2 className="payment-form__title">Payment Information</h2>
          <div className="payment-form__field-group">
            <label htmlFor="cardNumber" className="payment-form__label">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="payment-form__input"
              placeholder="**** **** **** ****"
            />
          </div>
          <div className="payment-form__field-group">
            <label htmlFor="cardHolder" className="payment-form__label">
              Card Holder Name
            </label>
            <input
              type="text"
              id="cardHolder"
              className="payment-form__input"
              placeholder="John Doe"
            />
          </div>
          <div className="payment-form__field-group payment-form__field-group--half">
            <label htmlFor="expirationDate" className="payment-form__label">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              className="payment-form__input"
              placeholder="MM/YY"
            />
          </div>
          <div className="payment-form__field-group payment-form__field-group--half">
            <label htmlFor="cvv" className="payment-form__label">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="payment-form__input"
              placeholder="***"
            />
          </div>
          <button type="submit" className="payment-form__submit-btn">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
