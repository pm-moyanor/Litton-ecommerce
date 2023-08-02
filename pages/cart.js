import Footer from "../components/Footer/Footer";
// import Form from "../components/Form";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { CartContext } from "../CartContext";


export default function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <>
      <Navbar />
      {cartItems && cartItems.length > 0 ? (
        <div>
          <h1>Your Cart</h1>

          <h2>Products</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} style={{ width: "200px" }} />
                  {item.title} - color:{item.colors.name} ${item.price} -{" "}
                  <button> - </button>
                  {item.quantity}
                  <button> + </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary-container">
            <h3>Order Summary</h3>
            <div>
              <h4>Subtotal</h4>
              <p>$123</p>
            </div>
            <div>
              <h4>Standard Shipping</h4>
              <p>Free</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>$12</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>$135</p>
            </div>
            <button>Proceed to Checkout</button>
          </div>

          {/* <Form /> */}
        </div>
      ) : (
        <div>
          <p>Cart is currently empty</p>
        </div>
      )}
 
    </>
  );
}
