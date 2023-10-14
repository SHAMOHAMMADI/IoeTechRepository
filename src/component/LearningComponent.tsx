import React from "react";
import { LearningData, LearningProps } from "./LearningData";
import { useState } from "react";
import styled from "./LearningComponent.module.css";
import LogoBanner from "./LogoBanner";
import {Link} from 'react-router-dom'
import ProductsCart from "./ProductsCart";

export default function LearningComponent(props: LearningProps) {
  const [data, setData] = useState(LearningData);
  return (
     <div className={styled.LearningTotal}>
      {/* <div className={styled.SideBar}>
         <ProductsCart/>
       </div>  */}
        <div className={styled.carts}>
        {data.map((res) => (
          <div className={styled.cart}>
            <img src={res.image} alt="no image" />
            <img className={styled.logo} src={res.logo} alt="no image" />
            <div className={styled.cartBody}>
              <h3>{res.title}</h3>
              <p>{res.teacher}</p>
              <div className={styled.pricePart}>
                <s>{res.oldPrice}تومان </s>
                <p>{res.price}تومان</p>
              </div>
              <div className={styled.bottomCart}>
                <p className={styled.discount}>{res.discount}%</p>
          <Link to="/learningBody">
                <button>خرید دوره</button>
          </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
