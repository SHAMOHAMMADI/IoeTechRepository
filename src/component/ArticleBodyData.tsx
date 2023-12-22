import React from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import styled from "./ProductsCart.module.css";
export type ArticleBodyDataProps = {
  id?: number;
  image?: string;
  title?: string;
  oldPrice?: number;
  price?: number;
  discount?: string;
  discountAmount?: number;
  someDescription?: string;
  description?: string;
  starNumber?: number;
  property?: string;
  quantity?: number;
};

export const ArticleBodyData: ArticleBodyDataProps[] = [
  {
    id: 1,
    image: "./images/alexa.webp",
    title: "دستیار صوتی الکسا",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 2,
    image: "./images/cleanMachine3.jpg",
    title: "جارو برقی هوشمند",
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 10,
    someDescription: "",
  },
  {
    id: 3,
    image: "./images/mirror.jpg",
    title: "آینه هوشمند",
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 10,
    someDescription: "",
  },
  {
    id: 4,
    image: "./images/26.png",
    title: "کنترلر مرکزی 10 اینچ ",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  // {
  //   image: "./images/57.png",
  //   title: " 7 پنل تصویری هوشمند",
  //   oldPrice: 4500000,
  //   price: 4200000,
  //   discount: "./images/red.jpg",
  //   discountAmount: 5,
  // },
  {
    id: 5,
    image: "./images/rasp.webp",
    title: "رزبری پای",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 6,
    image: "./images/59.png",
    title: "مکنت هوشمند اعلام سرقت",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 7,
    image: "./images/60.png",
    title: "سنسور اعلام نشتی آب",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  // {
  //   image: "./images/61.png",
  //   title: " 7 پنل تصویری هوشمند",
  //   oldPrice: 4500000,
  //   price: 4200000,
  //   discount: "./images/red.jpg",
  //   discountAmount: 5,
  // },
  {
    id: 8,
    image: "./images/68.png",
    title: "سنسور اعلام حضور",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 9,
    image: "./images/69.png",
    title: "پریز هوشمند",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 10,
    image: "./images/76.png",
    title: "مکنت پنجره",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 11,
    image: "./images/77.png",
    title: "ترمستات هوشمند",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 12,
    image: "./images/78.png",
    title: "شیربرقی",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 13,
    image: "./images/79.png",
    title: "دیتکتور اعلام حریق",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 14,
    image: "./images/86.png",
    title: "ترموستات هوشمند",
    oldPrice: 4500000,
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 5,
    someDescription: "",
  },
  {
    id: 15,
    image: "./images/49.png",
    title: "هاب مرکزی تجهیزات هوشند",
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 15,
    someDescription: "",
  },
  {
    id: 16,
    image: "./images/53.jpg",
    title: "کنترلر مرکزی 7 اینچ",
    price: 4200000,
    discount: "./images/red.jpg",
    discountAmount: 20,
    someDescription: "",
  },
];
