import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import styled from "./ContactUs.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "./SignUp";
import { useNavigate, Navigate } from "react-router-dom";

type ContactProps = {
  name: string;
  lName: string;
  emain: string;
  number: number;
  des: string;
};

export default function ContactUs() {
  const [inputs, setInputs] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<number | string>("");
  const [des, setDes] = useState("");
  const [user, setUser] = useState<ContactProps | null>(null);
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const onDesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDes(e.target.value);
  };

  const Navigate = useNavigate();
  const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    axios.post("http://localhost:7100/contactus", {
      ...user,
      name: name,
      lName: lname,
      number: number,
      email: email,
      des: des,
    });

    Navigate("/");
  };
  return (
    <>
      <NavBar />
      <div className={styled.ContactUs}>
        <form action="submit" className={styled.Form}>
          <label htmlFor="ّfirstName">نام</label>
          <input
            type="text"
            name="name"
            required
            onChange={onNameChange}
            id="firstName"
          />

          <label htmlFor="lastName">نام خانوادگی</label>
          <input
            type="text"
            onChange={onLnameChange}
            name="lName"
            required
            id="lastName"
          />

          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            onChange={onEmailChange}
            required
            name="email"
            id="email"
          />

          <label htmlFor="tel">شماره تماس</label>
          <input
            type="number"
            onChange={onNumberChange}
            required
            name="number"
            id="number"
          />

          <label htmlFor="">توضیحات</label>
          <textarea
            id="w3review"
            name="w3review"
            onChange={onDesChange}
          ></textarea>
          <div className={styled.Button}>
            <button onClick={onLogin}>ارسال</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
