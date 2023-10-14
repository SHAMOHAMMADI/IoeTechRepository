import React from 'react'

import { LIST_DATA , ListData } from './Test2';
import {useState} from 'react'
import NavBar from './NavBar';
import Footer from './Footer';


export default function Test(props:ListData) {
  const [initial , setInitial] = useState(LIST_DATA)
  console.log(initial)
  return (
    <div>
      <NavBar/>
      {initial.map((re)=>(
      <div>
      <p>{re.id}</p>
      <p>{re.title}</p>
      </div>
    ))}
    <Footer/>
    </div>
  )
}
