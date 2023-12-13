import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import styled from "./Home.module.css";
import ControlledCarousel from "../component/ControlledCarousel";
import { useState, useEffect } from "react";
import Carts from "../component/Carts";
// import posts from "./json.json"
import image10 from "../image/car1.jpg";
import axios, { AxiosResponse } from "axios";
import { setConstantValue } from "typescript";
import ArticleCarts from "../component/ArticleCarts";
import imageSideBar from "../image/car1.jpg";
import { LIST_DATA, ListData } from "../component/Test2";
import ProductsCart from "../component/ProductsCart";
import LogoBanner from "../component/LogoBanner";
import LearningComponent from "../component/LearningComponent";
import { useContext } from "react";

import img1 from "../help.png";
import img2 from "../delivery.png";
import img3 from "../guid.png";
import img4 from "../orginal.png";
import img5 from "../back3.png";
import ras from "../hero.webp";
import rasLogo from "../rasLogo.png";
import banner3 from "../banner3.png";
import { AppContext } from "../../src/App";
export type websiteProps = {
  id?: number;
  company?: string;
  category?: string;
  price?: string;
  name?: string;
  URL?: string;
};

interface user {
  id?: number;
  company?: string;
  category?: string;
  price?: string;
  name?: string;
  URL?: string;
}

type loginProps = {
  isLogin?: boolean;
  setIsLogin?: () => void;
};

export default function Home({
  id,
  company,
  category,
  price,
  name,
  URL,
}: websiteProps) {
  const [ini, setIni] = useState(LIST_DATA);

  //  const {isLogin , setIsLogin} = useContext(AppContext)

  return (
    <div className={styled.Home}>
      <div className={styled.HomeNavBar}>
        <NavBar />
      </div>
      <div className={styled.caroHome}>
        <ControlledCarousel />
      </div>
      <div className={styled.LogoBanner}>
        <LogoBanner />
      </div>
      <div className={styled.rasberry}>
        <div className={styled.rasbannerText}>
          <img className={styled.rasLogo} src={rasLogo} alt="" />
          <button className={styled.button}>خرید</button>
        </div>
        <img src={ras} alt="" />
      </div>
      <div className={styled.Banner3}>
        <img src={banner3} alt="" />
        {/* <button>خرید</button> */}
      </div>
      <div className={styled.ProductsBanner}>
        <ProductsCart />
      </div>
      <div className={styled.secondBanner}>
        <div>
          <img src={img1} alt="no image" />
          <p>مشاوره تلفی</p>
        </div>

        <div>
          <img src={img2} alt="no image" />
          <p>ارسال سریع</p>
        </div>
        <div>
          <img src={img3} alt="no image" />
          <p>راهنمایی نصب</p>
        </div>
        <div>
          <img src={img4} alt="no image" />
          <p>ضمانت اصالت</p>
        </div>
        <div>
          <img src={img5} alt="no image" />
          <p>ضمانت برگشت</p>
        </div>
      </div>
      <div className={styled.LearningBanner}></div>

      <div className={styled.HomeMain}>
        <div className={styled.HomeBody}>
          <div className={styled.Cart}>
            <LearningComponent />
          </div>
        </div>
        <div className={styled.Sidebar2}>
          <ArticleCarts />
        </div>
      </div>

      <div className={styled.Footer}>
        <div className={styled.FooterUnder}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
