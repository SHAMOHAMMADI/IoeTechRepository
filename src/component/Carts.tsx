import React from "react";
import styled from "./Carts.module.css";
import im from "../image/car1.jpg"

type CartsProps = {
  picture?: string;
  id?: number;
  title?: string;
  price?: React.ReactNode;
  discount?: number;
};

export default function Carts(props: CartsProps) {
  return (
    <div>
      {/* <div className={styled.Carts}
           
        </div> */}
      <div className={styled.Carts}>
        <img src={im} style={{width:"200px" , height:"150px" , borderRadius:"5px"}}alt="test" />
        <div className={styled.Picture}>{props.picture}</div>
        <div className={styled.Title}>{props.title}</div>
        <div className={styled.Price}>{props.price}</div>
        <div className={styled.Discount}>{props.discount}</div>
        <div className={styled.Id}>
          <p>this is a info {props.id} </p>
        </div>
      </div>
    </div>
  );
}
