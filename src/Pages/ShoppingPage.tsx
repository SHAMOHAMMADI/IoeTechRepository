import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import ProductsCart from "../component/ProductsCart";
import { stringify } from "querystring";
import LogoBanner from "../component/LogoBanner";

type Props = {
  shoppingItems?: [
    {
      id?: null | string;
      name?: null | string;
      isComplete?: null | boolean;
    }
  ];
  toggleItem?: any;
};
export default function ShoppingPage({ shoppingItems }: Props) {
  return (
    <>
      <NavBar />
      <LogoBanner />
      <div>
        <ProductsCart id={0}/>
      </div>
      <Footer />
    </>
  );
}
