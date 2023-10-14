import React from 'react'
import { CgBorderStyleDashed } from 'react-icons/cg'
import styled from "./ProductsCart.module.css"


export type ProductsCartProps ={
  image ?: string;
  title ?: string;
  oldPrice ?: string;
  price ?: string;
  discount ?:string;
  discountAmount ?: number;

}

export const ProductartsData : ProductsCartProps[]= [
  {
    image : "./images/alexa.webp",
    title : "پنل ورودی هوشمند",
    oldPrice : "78,000,000 تومان",
    price : "67,800,000 تومان",
    discount : "./images/red.jpg",
    discountAmount:5

  },
  {
    image : "./images/cleanMachine3.jpg",
    title : " 10 پنل تصویری هوشمند",
    oldPrice : "43,000,000",
    price : "37,300,000 ",
    discount : "./images/red.jpg",
    discountAmount:10



  },
  {
    image : "./images/mirror.jpg",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:10



  },
  {
    image : "./images/26.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5


  },
  {
    image : "./images/57.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/58.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/59.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/60.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/61.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/68.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/69.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/76.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/77.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5


  },
  {
    image : "./images/78.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/79.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/86.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:5



  },
  {
    image : "./images/49.png",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:15



  },
  {
    image : "./images/53.jpg",
    title : " 7 پنل تصویری هوشمند",
    oldPrice : "39,000,000",
    price : "33,300,000",
    discount : "./images/red.jpg",
    discountAmount:20



  },

]