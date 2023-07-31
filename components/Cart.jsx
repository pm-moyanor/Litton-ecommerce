import Form from "./Form";

export default function Cart({cartItems}) {

  console.log(cartItems)
  return (

    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} - {item.quantity}
          </li>
        ))}
      </ul>

      {/* <Form /> */}
    </div>
  );
}
