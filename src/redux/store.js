import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice";
import { cartTypeSlice } from "./slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartType: cartTypeSlice.reducer,
  },
});
