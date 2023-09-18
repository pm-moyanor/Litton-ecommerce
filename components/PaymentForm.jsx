import { useState } from "react";
import paymentSchema from "../paymentFormShema";
import ReviewAndConfirm from "./ReviewAndConfirm/ReviewAndConfirm";

export default function PaymentForm({ onPaymentInfoChange }) {
  const [isSameAddress, setIsSameAddress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: "",
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});



  const handlePaymentChange = (event) => {
    const selectedPaymentMethod = event.target.value;
    setPaymentMethod(selectedPaymentMethod);
    setPaymentInfo({
      ...paymentInfo,
      paymentMethod: selectedPaymentMethod, // Use the updated value here
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate paymentInfo against the schema
      await paymentSchema.validate(paymentInfo, { abortEarly: false });

      // Validation passed, invoke the callback
      onPaymentInfoChange(paymentInfo);
    } catch (validationErrors) {
      const errorsObj = {};
      validationErrors.inner.forEach((error) => {
        errorsObj[error.path] = error.message;
      });
      setErrors(errorsObj);
    }
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
              name="creditCard"
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
              name="paypal"
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
        <form className="payment-form" onSubmit={handleSubmit}>
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
              value={paymentInfo.cardNumber}
              name="cardNumber"
              onChange={handleChange}
            />
            {errors.cardNumber && (
              <p className="error-message">{errors.cardNumber}</p>
            )}
          </div>
          <div className="payment-form__field-group">
            <label htmlFor="cardHolder" className="payment-form__label">
              Card Holder Name
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              className="payment-form__input"
              placeholder="John Doe"
              onChange={handleChange}
              value={paymentInfo.cardHolder}
            />
               {errors.cardHolder && (
              <p className="error-message">{errors.cardHolder}</p>
            )}
          </div>
          <div className="payment-form__field-group payment-form__field-group--half">
            <label htmlFor="expirationDate" className="payment-form__label">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              className="payment-form__input"
              placeholder="MM/YY"
              onChange={handleChange}
              value={paymentInfo.expirationDate}
            />
               {errors.expirationDate && (
              <p className="error-message">{errors.expirationDate}</p>
            )}
          </div>
          <div className="payment-form__field-group payment-form__field-group--half">
            <label htmlFor="cvv" className="payment-form__label">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="payment-form__input"
              placeholder="***"
              onChange={handleChange}
              value={paymentInfo.cvv}
            />
               {errors.cvv && (
              <p className="error-message">{errors.cvv}</p>
            )}
          </div>
          <button
            type="submit"
            className="payment-form__submit-btn"
            // onClick={() => onPaymentInfoChange(paymentInfo)} // Pass paymentInfo as an argument
          >
            Next
          </button>
        </form>
      )}
    </>
  );
}
