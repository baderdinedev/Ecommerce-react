// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  cartCount: 0,
  cartItems: [],
};

// Reducer function to handle actions
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const updatedCart = [...state.cartItems, newItem];
      return {
        ...state,
        cartCount: updatedCart.length,
        cartItems: updatedCart,
      };
    case 'REMOVE_FROM_CART':
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cartCount: filteredItems.length,
        cartItems: filteredItems,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(cartReducer);

export default store;
