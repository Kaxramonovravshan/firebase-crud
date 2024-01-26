import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Admin from "./page/Admin";
import Cart from "./page/Cart";
import Home from "./page/Home";

const App = () => {
  return (
    <div>
      <div className="flex w-full items-center h-28 p-3 justify-between bg-slate-800 text-white">
        <Link to={"/"}>LOGO</Link>
        <Link
          to={"/cart"}
          className="w-36 no-underline text-xl rounded-lg bg-yellow-600 text-white flex justify-center items-center p-3"
        >
          Cart
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
