import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    totalPrice: ""
  },
  reducers: {
    buyItem: (state, action) => {
      state.carts.push({ ...action.payload, num: 1 });
    },
    plusCount: (state, action) => {
      state.carts[action.payload].num++;
      
    },
    minusCount: (state, action) => {
      state.carts[action.payload].num--;
      if (state.carts[action.payload].num == 0) {
        state.carts.splice(action.payload, 1);
      }
    }
  }
});

export default slice;
export const cartActions = slice.actions;
