import React from 'react'
import styled from './Login.module.css'
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Footer from '../component/Footer';

import {Link} from 'react-router-dom'
import NavBar from '../component/NavBar';
export default function Login() {
  return (
    <>
    <NavBar/>
    <div className={styled.AllLogin}>

    <div className={styled.Login}>
        <div>
            <div className={styled.TextLogin}>

            <h3>ورود به حساب کاربری</h3>
            <p style={{marginTop:"2em"}}>لطفا ایمیل و رمز عبور را وارد کنید </p>
            </div>
            <div>

                <form action="submit" className={styled.FormLogin}>
                    <label htmlFor="email"></label>
                    <input type="email" name="" id="email" placeholder='ایمیل' />

                    <label htmlFor="password"></label>
                    <input type="password" name="" id="password"  placeholder="رمز عبور"/>

                     <p>Forget password</p>
                     <button>ورود</button>

                </form>

             <div className={styled.SocialMedia}>
             <Link to=""><FaTelegram/></Link>
             <Link to=""><FaWhatsapp/></Link>
             <Link to=""><FaInstagram/></Link>
             <Link to=""><FaYoutube/></Link>
            </div>
            
            <p>حساب کاربری ندارید ؟
            </p>
              <Link to="/SignUp">
                <u>
                ثبت نام 
                </u>
              </Link>

            </div>
            
        </div>
    </div>
     <Footer/>
    </div>
    </>
  )
}
