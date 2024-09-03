import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";  // Correctly importing the reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
