import React from 'react'
import ReactPlayer from 'react-player'
import {useRef} from 'react'
import Article from '../Pages/Article';
import ProductsCart from './ProductsCart';
import NavBar from './NavBar';
import Footer from './Footer';
import ArticleCarts from './ArticleCarts';
// import styled from 'styled-components';
import styled from './LearningBody.module.css'
const VIDEO_PATH = "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"

export default function LearningBody() {
    const playerRef = useRef(null);
  return (
    <div>
        <NavBar/>
   
      <div className={styled.vids}>
        <div className={styled.vid}>
         <ReactPlayer  ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
         <div className={styled.sideBar}>
            <div>similar 1</div>
            <div>similar 2</div>
            <div>similar 3</div>
            <div>similar 4</div>
            <div>similar 5</div>
            <div>similar 6</div>

         </div>
      </div> 
      {/* <div className={styled.Articles}> */}
        {/* <Article/> */}
        {/* <ArticleCarts/> */}
      {/* </div> */}
        <div className={styled.Products}> 
        <ProductsCart id={0} />
       </div> 
       <Footer/>
    </div>
  )
}
