import React from "react";

export type LearningProps = {
  image?: string;
  title?: string;
  logo?: string;
  teacher?: string;
  oldPrice?: number;
  price?: number;
  discount?: number;
};

export const LearningData: LearningProps[] = [
  {
    image: "./images/knx1.jpg",
    title: " knx دوره هموشمند سازی ",
    logo: "./images/logoiotech.png",
    teacher: "جناب مهندس احمدی",
    oldPrice: 50000000,
    price: 45000000,
    discount: 10,
  },
  {
    image: "./images/avr2.jpg",
    title: " Avr دوره برنامه نویسی میکروکنترلر ",
    logo: "./images/logoiotech.png",
    teacher: "جناب مهندس رضایی",
    oldPrice: 2000000,
    price: 1600000,
    discount: 10,
  },
  {
    image: "./images/network+1.png",
    title: " دوره شبکه",
    logo: "./images/logoiotech.png",
    teacher: "جناب مهندس احمدی",
    oldPrice: 1000000,
    price: 900000,
    discount: 10,
  },
  {
    image: "./images/pi5.png",
    title: "دوره رزبری پای",
    logo: "./images/logoiotech.png",
    teacher: "خانم مهندس محمدی",
    oldPrice: 2000000,
    price: 1600000,
    discount: 10,
  },
];
