import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { cartActions } from "../utils/CartReducer";

const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  function totalPriceF() {
    setTotalPrice(0);
    props.carts.map((itm) => {
      setTotalPrice((p) => p + Number(itm.productPrice.price * itm.num));
    });
  }

  useEffect(() => {
    totalPriceF();
  }, [props.carts]);

  return (
    <>
      {props.carts.length === 0 ? (
        <h1 className="text-center text-red-700 ">Cart is Empty</h1>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Img</th>
                <th>name</th>
                <th>desc</th>
                <th>price</th>
                <th>count</th>
              </tr>
            </thead>
            <tbody>
              {props.carts.map((itm, i) => (
                <tr key={i}>
                  <td>
                    <img src={itm.img} alt="" />
                  </td>
                  <td>{itm.name}</td>
                  <td>{itm.desc}</td>
                  <td>{itm.num * itm.productPrice.price}</td>
                  <td>
                    <button
                      onClick={(e) => props.plusCount(i)}
                      className="btn btn-dark"
                    >
                      +
                    </button>
                    {itm.num}
                    <button
                      onClick={() => props.minusCount(i)}
                      className="btn btn-dark"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>total Price: {totalPrice}</h2>
          <button className="btn btn-success">purchase</button>
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => ({ ...state.cartReducer }),
  cartActions
)(Cart);
