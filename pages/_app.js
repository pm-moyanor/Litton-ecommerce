import "../styles/globals.css";
import CartProvider from "../CartContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCube,
  faHeart,
  faShoppingCart,
  faShop,
  faTruckFast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


library.add(faTruckFast, faShop, faCube);

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
