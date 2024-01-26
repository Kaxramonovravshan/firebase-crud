import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userReducer";
import ProductSlice from "./productReducer";
import cartSlice from "./CartReducer";

const store = configureStore({
  reducer: {
    userReducer: UserSlice.reducer,
    productReducer: ProductSlice.reducer,
    cartReducer: cartSlice.reducer
  }
});

export default store;
