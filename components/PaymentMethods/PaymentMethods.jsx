import React from "react";
import styles from "./PaymentMethods.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcAmex,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";

const PaymentIcons = () => {
  const paymentMethods = [
    { icon: faCcVisa, label: "Visa" },
    { icon: faCcMastercard, label: "Mastercard" },
    { icon: faCcPaypal, label: "PayPal" },
    { icon: faCcAmex, label: "American Express (Amex)" },
    { icon: faCcDiscover, label: "Discover" },
  ];

  return (
    <div className={styles.mainContainer}>
      <h2>Payment Methods</h2>
      <p>Choose from various secure payment methods.</p>
      <ul className={styles.paymentIcons}>
        {paymentMethods.map((method, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <FontAwesomeIcon icon={method.icon} size="2x" />
            {/* <span>{method.label}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentIcons;
