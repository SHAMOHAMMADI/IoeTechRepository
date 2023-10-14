import react from 'react'
import styled from './logoBanner.module.css';
import { LogoBannerData , LogoBannerProps } from './LogoBannerData';
import {useState} from 'react'



const LogoBanner = (props:LogoBannerProps)=>{

    const [data , setData] = useState(LogoBannerData)
    return (

        <div className={styled.Banners}>

{
    data.map((res)=>(
      <div className ={styled.Bannerslide}>
        <img src={res.image} alt="Banner" />
      </div>
        
    ))
}

        </div>
        

    )
}

export default LogoBanner ;