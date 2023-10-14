import React from 'react'
import {useState} from 'react'
import "./Test4.css"
import { RiMenuFill } from "react-icons/ri";
import {Link} from 'react-router-dom'


import { DataBaseProps , DataBase } from './Test4Data';
export default function Test4( props : DataBaseProps) {

    const {image , imageDiscount} = props

    const [data , setData] = useState(DataBase)
return (
    <>
    <div className="cart">
        {data.map((res)=>(
            <div className="cartImage">
     <img src={res.image} alt=""/>
            </div>
        ))}
        < div className="cart2">
        {data.map((res)=>(
            <div className="cartImageDiscount">
     <img src={res.imageDiscount} alt=""/>
            </div>
        ))}

        </div>
      
       
    </div>
    
    </>
)
}
