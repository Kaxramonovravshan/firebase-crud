import React from "react";
import { connect } from "react-redux";
import { cartActions } from "../utils/CartReducer";
import { productAction } from "../utils/productReducer";

const Home = (props) => {
  //   function filterItm(item) {
  //     let a = props.carts.filter((itm) => {
  //       return itm.name === item.name;
  //     });
  //   }

  return (
    <div className="flex justify-between">
      {props.products.map((itm, i) => {
        return (
          <div key={i} className="w-1/4 border rounded-lg p-3">
            <img src={itm.img} alt="" />
            <hr />
            <h3>{itm.name}</h3>
            <h4>{itm.desc}</h4>
            <div className="flex gap-2">
              <p>{itm.productPrice?.price}$</p>
              <p>{itm.productPrice?.totalCount} dona</p>
            </div>
            <button
              onClick={() => props.buyItem(itm)}
              className="1/2 btn btn-dark"
            >
              buy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  (state) => ({ ...state.productReducer, ...state.cartReducer }),
  {
    ...productAction,
    ...cartActions
  }
)(Home);
