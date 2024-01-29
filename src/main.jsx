import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "rodal/lib/rodal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./utils/redux/redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
