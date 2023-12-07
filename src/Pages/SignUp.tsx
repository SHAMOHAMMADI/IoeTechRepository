import React from "react";
import styled from "./SignUp.module.css";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Footer from "../component/Footer";

import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";
export default function Login() {
  return (
    <>
      <NavBar />
      <div className={styled.AllLogin}>
        <div className={styled.Login}>
          <div>
            <div className={styled.TextLogin}>
              <h3> ثبت حساب کاربری</h3>
              {/* <p style={{marginTop:"2em"}}>لطفا ایمیل و رمز عبور را وارد کنید </p> */}
            </div>
            <div>
              <form action="submit" className={styled.FormLogin}>
                <label htmlFor="ّfirstName"></label>
                <input type="text" name="" id="firstName" placeholder="نام" />

                <label htmlFor="lastName"></label>
                <input
                  type="text"
                  name=""
                  id="lastName"
                  placeholder=" نام خانوادگی"
                />

                <label htmlFor="email"></label>
                <input type="email" name="" id="email" placeholder="ایمیل" />

                <label htmlFor="password"></label>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="رمز عبور"
                />

                <p>Forget password</p>

                <button>ثبت نام</button>
              </form>

              <div className={styled.SocialMedia}>
                <Link to="">
                  <FaTelegram />
                </Link>
                <Link to="">
                  <FaWhatsapp />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
                <Link to="">
                  <FaYoutube />
                </Link>
              </div>

              <p>حساب کاربری ندارید ؟</p>
              <Link to="/login">
                <u>ورود</u>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
