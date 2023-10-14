import React from "react";
import styled from "./ArticleCarts.module.css";
import { useState, useEffect } from "react";
import { ArticleCartsProps, ArticleCartsData } from "./ArticleCartsData";
import {Link} from 'react-router-dom'

export default function ArticleCarts(props: ArticleCartsProps) {
  const [data2, setData2] = useState(ArticleCartsData);
console.log(data2)
  useEffect(() => {});
  return (
    <div className={styled.ArticleSidebar}>
      <div className={
        styled.Art
      }>
        {
          data2.map((res)=>(
            <div className={styled.Articles} >

              <img src={res.image} alt="image" />
              <Link to="/article">
              <div className={styled.TextArticle}>

              <h3 style={{color:"grey"}}>{res.title} </h3>
              <p>{res.description}</p>
              <img src={res.logo} alt="logo" style={{width:"50px" , height:"50px" , display:"flex" , justifyContent:"flex-end"}}/>
              </div>
            
            </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
