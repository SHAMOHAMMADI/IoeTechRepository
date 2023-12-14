import React from "react";
import styled from "./SignUp.module.css";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Footer from "../component/Footer";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginContext } from "../component/Context/LoginUserContext";
import { UserContext } from "../../src/component/Context/UserContextProvider";

import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";
import axios from "axios";
// import TestSign from "./testSign";

export type signProps = {
  e?: any;
  name?: string;
};

export type User = {
  name: string;
  lName: string;
  password: number;
  email: string;
};

export default function Login() {
  const LoginUseContext = useContext(LoginContext);
  const userContext = useContext(UserContext);

  const [inputs, setInputs] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
  });

  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<number | string>("");
  const [user, setUser] = useState<User | null>(null);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const Navigate = useNavigate();
  const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    axios.post("http://localhost:7100/info", {
      ...user,
      name: name,
      lName: lname,
      password: password,
      email: email,
    });

    Navigate("/shopping");
    // setUser({
    //   name: name,
    //   lName: lname,
    //   password: password,
    //   email: email,
    // });

    LoginUseContext.setIsLogin(true);
    userContext.setUser(() => {
      
    });
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {};

  const goToSecondsComp = () => {
    // This will navigate to second component
  };

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
                <input
                  type="text"
                  name="name"
                  onChange={onNameChange}
                  id="firstName"
                  placeholder="نام"
                />

                <label htmlFor="lastName"></label>
                <input
                  type="text"
                  onChange={onLnameChange}
                  name="lName"
                  id="lastName"
                  placeholder=" نام خانوادگی"
                />

                <label htmlFor="email"></label>
                <input
                  type="password"
                  onChange={onPasswordChange}
                  name="password"
                  id="password"
                  placeholder="پسورد"
                />

                <label htmlFor="password"></label>
                <input
                  onChange={onEmailChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ایمیل"
                />

                <p>Forget password</p>

                <button onClick={onLogin}>ثبت نام</button>

                {/* {user ? (
                  <div>
                    <p>{user?.name}</p>
                    <p>{user?.lName}</p>
                    <p>{user?.password}</p>
                    <p>{user?.email}</p>
                  </div>
                ) : null} */}
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
              {/* 
              <div className="testSignUp">
                <TestSign />
              </div> */}

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
