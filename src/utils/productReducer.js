import { user } from "@nextui-org/react";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    checkSelect: "",
    categories: [
      { id: 1, name: "lavash" },
      { id: 2, name: "buger" },
      { id: 3, name: "hot-dog" },
      { id: 4, name: "pizza" }
    ],
    products: [
      {
        name: "lavash mini",
        productPrice: {
          totalCount: 10,
          price: 100
        },
        desc: "alo",
        category: "lavash",
        img: ""
      },
      {
        name: "lavash big",
        productPrice: {
          totalCount: 10,
          price: 200
        },
        desc: "yaxshi",
        category: "lavash",
        img: ""
      },
      {
        name: "burger",
        productPrice: {
          totalCount: 10,
          price: 50
        },
        desc: "",
        category: "burger mini",
        img: ""
      }
    ]
  },
  reducers: {
    mySubmit: (state, action) => {
      let obj = {
        ...action.payload,
        productPrice: {
          totalCount: action.payload.totalCount,
          price: action.payload.price
        },
        category: state.checkSelect
      };

      delete obj.price;
      delete obj.totalCount;

      state.products.push(obj);
    },
    getValueSelect: (state, action) => {
      if (action.payload.__isNew__) {
        let newID = state.categories[state.categories.length - 1].id + 1;
        state.categories.push({ id: newID, name: action.payload.label });
      } else {
        state.checkSelect = action.payload.label;
      }
    }
  }
});

export default slice;

export const productAction = slice.actions;
