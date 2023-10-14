import React from 'react'
import styled from './Test3.module.css'
import {useState} from 'react'



type Test3Props = {
    onClick ?:()=>void,
    initialData ?: boolean
}
export default function Test3(props:Test3Props) {

  const {onClick , initialData} = props
    const[isOpen , setIsOpen] = useState<boolean>(initialData ?? false)
    

    const clickHandle = ()=>{
     console.log("test")
    }
  return (
    <div onClick={clickHandle}>
        <ul>
            <li>Home</li>
            <li>gallery</li>
            <li>contact</li>
        </ul>
        <li>test</li>
    </div>
  )
}
