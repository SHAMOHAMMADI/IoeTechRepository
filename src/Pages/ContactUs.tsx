import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import styled from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <>
    <NavBar/>
    <div className={styled.ContactUs}>
      <form action="submit" className={styled.Form}>
        <label htmlFor="">
 نام 
        </label>
        <input type="text" />
        <label htmlFor="lastname">
   نام خانوادگی  
        </label>
        <input type="text" id="lastname"/>
        <label htmlFor="email">
 آدرس ایمیل
        </label>
        <input type="email" id="email" />
        {/* <label htmlFor="pass">
 پسورد
        </label>
        <input type="password" id="pass"/> */}
        <label htmlFor="tel">
 شماره تماس
        </label>
        <input type="number" id="tel"/>

      <label htmlFor="">توضیحات</label>
      <textarea>
        
      </textarea>
        <div className={styled.Button}>

        <button>ارسال</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}
