
import { Oswald_700Latin } from '@fontsource/oswald';
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCube, faHeart, faShoppingCart, faShop, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faTruckFast,faShop,faCube)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
