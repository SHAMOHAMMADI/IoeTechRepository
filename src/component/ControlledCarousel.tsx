import React from "react";
import Carts from "./Carts";
import HeroSlider, { Slide } from "hero-slider";
import sliders from "../car.jpg"
import Background from "hero-slider/dist/components/Slide/Background";
import image2 from "https://api.slingacademy.com/public/sample-photos/1.jpeg"
import { MdWebStories } from "react-icons/md";
import {useState} from "react"
const back1 : string = "./images/slide/slide10.png"
const back2 : string = "./images/slide/slide11.png"
const back3  : string = "./images/slide/slide12.png"
const back4  : string = "./images/slide/slide10.png"
const back5 : string = "./images/slide/slide11.png"
const back6 : string = "./images/slide/slide15.png"



type SliderProps ={
   id ?: number ,
  company ?: string ,
  category ?: string,
  price ?: number,
  name ?: string,
  URL ?:string, 
  children ?: React.ReactNode,
  web ?: React.ReactNode
}


export default function ControlledCarousel(
   {id , company , category , price , name , URL}:SliderProps) {

  
  return ( 
    <div>
      <HeroSlider style={{ maxHeight: 550  , background: "" , backgroundSize:"cover"}} autoplay>
        <Slide
          style={{ background: "", width: "100%",objectFit:"cover", height: "550px", display: "flex" , alignItems:"center" , justifyContent : "center" }}
          background={{
            backgroundImageSrc : back1
          }}
         />
       <div>
       </div>
        <Slide
          style={{ background: "",  objectFit:"cover", width: "100%", height: "550px" , backgroundSize:"cover" }}
          background={{
            backgroundImageSrc: back2 ,
          }}
        />

        <Slide
          style={{ background: "", objectFit:"cover", width: "100%", height: "550px" , backgroundSize:"cover"}}
          background={{
            backgroundImageSrc: back3,
          }}
        />
         <Slide
          style={{ background: "", width: "100%",objectFit:"cover", height: "550px" , backgroundSize:"cover"}}
          background={{
            backgroundImageSrc: back4,
          }}
        />
        <Slide
          style={{ background: "", width: "100%", height: "550px" , backgroundSize:"cover"}}
          background={{
            backgroundImageSrc: back5,
          }}
        />
          <Slide
          style={{ background: "", width: "100%", height: "550px" , backgroundSize:"cover"}}
          background={{
            backgroundImageSrc: back6,
          }}
        />
      </HeroSlider>
    </div>
  );
}
