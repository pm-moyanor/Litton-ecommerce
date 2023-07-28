export default function Form(){
    return(
        <form className="payment-form">
  <h2 className="payment-form__title">Payment Information</h2>
  <div className="payment-form__field-group">
    <label htmlFor="cardNumber" className="payment-form__label">Card Number</label>
    <input type="text" id="cardNumber" className="payment-form__input" placeholder="**** **** **** ****" />
  </div>
  <div className="payment-form__field-group">
    <label htmlFor="cardHolder" className="payment-form__label">Card Holder Name</label>
    <input type="text" id="cardHolder" className="payment-form__input" placeholder="John Doe" />
  </div>
  <div className="payment-form__field-group payment-form__field-group--half">
    <label htmlFor="expirationDate" className="payment-form__label">Expiration Date</label>
    <input type="text" id="expirationDate" className="payment-form__input" placeholder="MM/YY" />
  </div>
  <div className="payment-form__field-group payment-form__field-group--half">
    <label htmlFor="cvv" className="payment-form__label">CVV</label>
    <input type="text" id="cvv" className="payment-form__input" placeholder="***" />
  </div>
  <button type="submit" className="payment-form__submit-btn">Submit</button>
</form>

    )
}