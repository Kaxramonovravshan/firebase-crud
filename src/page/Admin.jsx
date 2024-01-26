import React, { useState } from "react";
import { connect } from "react-redux";
import Creatable from "react-select/creatable";
import { productAction } from "../utils/productReducer";
import { useForm } from "react-hook-form";
import Sm from "../img/sm.jpg";

const Admin = (props) => {
  const { handleSubmit, reset, register } = useForm();
  const [img, setImg] = useState("");

  function imgString(e) {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result);
    };
  }

  return (
    <>
      <button
        onClick={() => {
          console.log(props);
        }}
      >
        {" "}
        test
      </button>
      <form
        onSubmit={handleSubmit((data) => props.mySubmit({ ...data, img }))}
        className=" mx-auto w-1/2"
      >
        <label>
          {img === "" ? (
            <img className="w-14" src={Sm} alt="" />
          ) : (
            <img className="w-24" src={img} alt="" />
          )}
          <input
            onChange={imgString}
            className="form-control mb-2 d-none"
            type="file"
          />
        </label>
        <input
          {...register("name")}
          className="form-control mb-2"
          placeholder="name...."
          type="text"
        />
        <input
          {...register("desc")}
          className="form-control mb-2"
          placeholder="desc...."
          type="text"
        />
        <input
          {...register("price")}
          className="form-control mb-2"
          placeholder="price...."
          type="text"
        />

        <input
          {...register("totalCount")}
          className="form-control mb-2"
          placeholder="count...."
          type="text"
        />
        <Creatable
          onChange={(newValue) => props.getValueSelect(newValue)}
          options={props.categories.map((itm) => {
            return { value: itm.id, label: itm.name };
          })}
        />
        <button className="btn btn-dark">save Product</button>
      </form>
    </>
  );
};

export default connect(
  (state) => ({ ...state.productReducer }),
  productAction
)(Admin);
