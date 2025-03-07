import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  itemsList: [],
  totalQuantity: 0,
  cartType: "NGN",
};
const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      //check item is already exits
      const exitsItem = state.itemsList.find((item) => item.id === newItem.id);

      if (exitsItem) {
        exitsItem.quantity++;
        exitsItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const exitstingItem = state.itemsList.find((item) => item.id === id);
      if (exitstingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        exitstingItem.quantity--;
        exitstingItem.totalPrice -= exitstingItem.price;
      }
    },
  },
});

export const cartTypeSlice = createSlice({
  name: "Currency",
  initialState,
  reducers: {
    setCartType(state, action) {
      const _cartType = action.payload;
      const IsCartAvailabe = state.cartType === _cartType.cartType;
      if (IsCartAvailabe) {
        return;
      } else {
        state.cartType = _cartType.title;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartTypeActions = cartTypeSlice.actions;
export default cartSlice;
