import React from "react";
import styled from "./ArticleCarts.module.css";
import { useState, useEffect } from "react";
import { ArticleCartsProps, ArticleCartsData } from "./ArticleCartsData";
import { ProductartsData } from "./ProductCartData";
import { Link } from "react-router-dom";

export default function ArticleCarts(props: ArticleCartsProps) {
  const [data, setData] = useState(ArticleCartsData);

  return (
    <div className={styled.ArticleSidebar}>
      <div className={styled.Art}>
        {data.map((res) => (
          <div className={styled.Articles}>
            <Link to={`/subarticle/${res.id}`}>
              <img src={res.image} alt="image" />
              <div className={styled.TextArticle}>
                <h3 style={{ color: "grey" }}>{res.title} </h3>
                <p>{res.description}</p>
                <img
                  src={res.logo}
                  alt="logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
