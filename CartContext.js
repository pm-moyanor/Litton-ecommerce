import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemInCart = state.items.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalCount: state.totalCount + 1
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalCount: state.totalCount + 1
        };
      }

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
        totalCount: state.totalCount - 1
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
        totalCount: state.totalCount + 1
      };

    case "REMOVE_ITEM":
      const removedItem = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter((cartItem) => cartItem.id !== action.payload),
        totalCount: state.totalCount - removedItem.quantity
      };

    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const initialState = {
    items: [],
    totalCount: 0
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <CartContext.Provider value={{ cartState, dispatch, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
