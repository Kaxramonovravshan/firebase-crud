import { Tuple, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import slice from "./userReducer/userReducer";

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === "apiCall") {
    const { url, method, data, onSuccess } = action.payload;
    axios({
      baseURL: "http://localhost:3001",
      url,
      method,
      data
    }).then((res) => {
      store.dispatch(onSuccess(res.data));
    });
  } else {
    next(action);
  }
};

const store = configureStore({
  reducer: {
    user: slice.reducer
  },
  middleware: () => [apiMiddleware]
});

export default store;
