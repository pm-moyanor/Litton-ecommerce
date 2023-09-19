import { useState } from "react";
import paymentSchema from "../../paymentFormShema";
import styles from "./PaymentForm.module.css";
import ReviewAndConfirm from "../ReviewAndConfirm/ReviewAndConfirm";

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
      paymentMethod: selectedPaymentMethod,
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
        <h2 className={styles.title}>Payment Information</h2>
        <label>
          <input
            type="radio"
            defaultChecked={isSameAddress}
            onChange={() => setIsSameAddress(!isSameAddress)}
          />
          My billing address is not the same as my shipping address
        </label>
      </div>

      <div>
        <h3>Select Payment Method</h3>
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

        {paymentMethod === "creditCard" && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor="cardNumber" className={styles.label}>
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className={styles.input}
                placeholder="**** **** **** ****"
                value={paymentInfo.cardNumber}
                name="cardNumber"
                onChange={handleChange}
              />
              {errors.cardNumber && (
                <p className={styles.errorMessage}>{errors.cardNumber}</p>
              )}
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="cardHolder" className={styles.label}>
                Card Holder Name
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                className={styles.input}
                placeholder="John Doe"
                onChange={handleChange}
                value={paymentInfo.cardHolder}
              />
              {errors.cardHolder && (
                <p className={styles.errorMessage}>{errors.cardHolder}</p>
              )}
            </div>
            <div className={styles.fieldGroupHalfWrapper}>
            <div className={`${styles.fieldGroup} ${styles.fieldGroupHalf} ${styles.first}` }>
              <label htmlFor="expirationDate" className={styles.label}>
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                className={styles.input}
                placeholder="MM/YY"
                onChange={handleChange}
                value={paymentInfo.expirationDate}
              />
              {errors.expirationDate && (
                <p className={styles.errorMessage}>{errors.expirationDate}</p>
              )}
            </div>
   
            <div className={`${styles.fieldGroup} ${styles.fieldGroupHalf}`}>
              <label htmlFor="cvv" className={styles.label}>
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className={styles.input}
                placeholder="***"
                onChange={handleChange}
                value={paymentInfo.cvv}
              />
              {errors.cvv && (
                <p className={styles.errorMessage}>{errors.cvv}</p>
              )}
            </div>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Next
            </button>
          </form>
        )}

        <div className={styles.payPalWrapper}>
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
          {paymentMethod === "paypal" && (
            <>
              <p className={styles.payPalMessage}>
                You will pay directly through the Paypal website. You can still
                review and confirm your order details before payment.
              </p>
              <button className={styles.submitBtn} >Next</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
