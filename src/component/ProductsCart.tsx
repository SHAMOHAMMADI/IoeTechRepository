import React, { useContext } from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import styled from "./ProductsCart.module.css";
import { ProductartsData, ProductsCartProps } from "./ProductCartData";
import { useState, useEffect, useCallback } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { createContext } from "react";
import { NumericLiteral } from "typescript";
import { useShoppingCart } from "./Context/ShoppingCartContext";

// type storeItemprops = {
//   id : number
//   name : string
//   price : number
//   imgUrl : string
// }

type storeItemprops = {
  id: number;
  name: string;
  price: number;
  image: string;
  title: string;
  oldPrice: number;
  discount: string;
  discountAmount: number;
};

// export default function ProductsCart(props: ProductsCartProps) {
export default function ProductsCart({
  id,
  image,
  price,
  title,
  discountAmount,
  discount,
  oldPrice,
}: ProductsCartProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  // const [data, setData] = useState(ProductartsData);

  const [data, setData] = useState(ProductartsData);
  const [cart, setCart] = useState(0);

  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  // } = useShoppingCart();

  // const quantity =0

  // const AppContext = createContext(null);

  // const test = useContext(AppContext);
  // const BasketClick = useCallback(() => setCart((v) => v + 1), []);

  const quantity = getItemQuantity(id);

  const { openCart, cartQuantity } = useShoppingCart();

  // const quantity = 0;
  return (
    <div className={styled.Carts}>
      <div className={styled.Products}>
        {data.map((res) => (
          <div className={styled.pro}>
            <Link to={`/subproducts/${res.id}`}>
              <div className={styled.img}>
                <img className={styled.pic} src={res.image} alt="" />

                <img className={styled.dis} src={res.discount} alt="" />
                <p className={styled.dis}>{res.discountAmount}%</p>
              </div>
            </Link>
            <div className={styled.TextProducts}>
              <p>{res.title}</p>
              <s style={{ color: "grey" }}>{res.oldPrice} </s>
              <p style={{ color: "red", marginBottom: "2em" }}>{res.price}</p>
              {/* <button className={styled.buttonStyle}>خرید</button> */}
              <div className={styled.BasketPlus}>
                {quantity === 0 ? (
                  <div>
                    <button
                      onClick={() => increaseCartQuantity(id)}
                      className="bg-blue-600 text-white w-32 rounded-md p-2"
                    >
                      خرید
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center w-36 ">
                    <div className="flex w-full h-full justify-center gap-4 py-6">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() => increaseCartQuantity(id)}
                      >
                        +
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() => decreaseCartQuantity(id)}
                      >
                        -
                      </button>
                    </div>

                    <div>
                      <div className="inline ">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                          onClick={() => removeFromCart(id)}
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* <IoHeartOutline /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
