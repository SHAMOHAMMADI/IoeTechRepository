import React from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import styled from "./ProductsCart.module.css";
import { ProductartsData, ProductsCartProps } from "./ProductCartData";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProductsCart(props: ProductsCartProps) {
  const [data, setData] = useState(ProductartsData);

  const [cart, setCart] = useState({});

  const BasketClick = () => {
   
  };
  return (
    <div className={styled.Carts}>
      <div className={styled.Products}>
        {data.map((res) => (
          <div className={styled.pro}>
            <div className={styled.img}>
              <img className={styled.pic} src={res.image} alt="" />

              <img className={styled.dis} src={res.discount} alt="" />
              <p className={styled.dis}>{res.discountAmount}%</p>
            </div>
            <div className={styled.TextProducts}>
              <p>{res.title}</p>
              <s style={{ color: "grey" }}>{res.oldPrice} </s>
              <p style={{ color: "red", marginBottom: "2em" }}>{res.price}</p>
              {/* <button className={styled.buttonStyle}>خرید</button> */}
              <div className={styled.BasketPlus}>
                <button onClick={BasketClick}>
                  <FaCartPlus />
                </button>
                <IoHeartOutline />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
