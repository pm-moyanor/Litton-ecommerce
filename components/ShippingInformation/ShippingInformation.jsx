import React, { useState } from "react";
import styles from "./ShippingInformation.module.css";


const ShippingOptions = ({ onShippingOptionChange }) => {
  // State to track the selected shipping option
  const [selectedOption, setSelectedOption] = useState("standard");


  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onShippingOptionChange(option); // Call the function with the selected option

  };

  return (
    <div>
      <h2 className={styles.shippingOptionsTitle}>Shipping Options</h2>
      <p className={styles.shippingOptionsDescription}>
        Delivery timing is estimated from the date your order is shipped. Orders
        are processed Monday through Friday, excluding local or national
        holidays.
      </p>
      <div className={styles.shippingOption}>
        <div>
          <label>
            <input
              type="radio"
              value="standard"
              checked={selectedOption === "standard"}
              onChange={() => handleOptionChange("standard")}
            />
            <span className={styles.shippingOptionText}>Standard Shipping</span>
          </label>
        </div>
        <div>
          <p className={styles.shippingOptionPrice}>Free</p>
        </div>
      </div>
      <div className={styles.shippingOption}>
        <div>
          <label>
            <input
              type="radio"
              value="express"
              checked={selectedOption === "express"}
              onChange={() => handleOptionChange("express")}
            />
            <span className={styles.shippingOptionText}>Express Shipping</span>
          </label>
        </div>
        <div>
          <p className={styles.shippingOptionPrice}>$12.95</p>
        </div>
      </div>
      <div className={styles.selectedOptionInfo}>
        <p>Selected Shipping Option: {selectedOption}</p>
     
      </div>
    </div>
  );
};

function ShippingInformation({ onShippingInfoChange }) {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={shippingInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={shippingInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="button"
          onClick={() => onShippingInfoChange(shippingInfo)}
        >
          Update Shipping Info
        </button>
      </form>
    </div>
  );
}

export { ShippingInformation, ShippingOptions };
