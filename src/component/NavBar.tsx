import React from "react";
// import Carousel from "./Carousel"
import styled from "./NavBar.module.css";
import logoiotech from "../logoiotech.png";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgEnter } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import "./NavBarTest.css";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./Context/UserContextProvider";
import { LoginContext } from "./Context/LoginUserContext";
import { useEffect } from "react";
import axios from "axios";

export interface NavBarProps {
  onClick?: () => void;
  isInitiallyOpen?: boolean;
}

export default function NavBar(props: NavBarProps) {
  const { onClick, isInitiallyOpen } = props;

  const [data, setData] = useState();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
    // onClick && onClick();
  };

  useEffect(() => {
    document.title = "327578";
  }, []);

  const userContext = useContext(UserContext);
  const LoginUserContext = useContext(LoginContext);
  return (
    <div className={styled.AllNavBar}>
      <div className={styled.ad}></div>
      <div className={styled.header}>
        <div className={styled.NavBar769}>
          <div className={styled.TopTopMenu}>
            <div className={styled.imageSearch}>
              <Link to="/home">
                <img src={logoiotech} alt="logo" />
              </Link>
            </div>
            <div className={styled.Menu}>
              <div className={styled.basket}>
                <Link to="/profile">
                  <button>
                    <div className="bg-[#ff0000] w-4 h-4 absolute top-[-5px] left-[-5px] rounded"></div>
                    <RiShoppingCartLine />
                  </button>
                </Link>
                <button
                  onClick={() => {
                    LoginUserContext.setIsLogin(false);
                  }}
                >
                  <Link to="/LogIn">
                    {LoginUserContext.login ? <p>خروج</p> : <p> ورود</p>}
                  </Link>
                  <CgEnter />
                </button>
                <button className={styled.ButtonStyle2}>
                  <Link to="/SignUp">
                    <p> ثبت نام</p>
                  </Link>
                </button>
                {/* <p>نام كاربر</p> */}
                <form action="submit" className={styled.Form}>
                  <input type="text" placeholder="جستجو" />
                  <Link to="/UserFinds">
                    <button className={styled.button}>
                      <IoIosSearch />
                    </button>
                  </Link>
                </form>

                <div>{userContext?.user}</div>
              </div>
            </div>
          </div>

          <div className={styled.MenuBar}>
            <div className="menuAll">
              <li className={styled.MenuIcon} onClick={handleClick}>
                <RiMenuFill />
              </li>
            </div>
            <div>
              <li className={`menuTop ${isOpen ? "is-open" : ""}`}>
                <ul className={styled.menuGredient}>
                  <li>
                    <Link to="/">
                      صفحه اصلی
                      {/* <IoHomeOutline/> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/shopping">محصولات</Link>
                  </li>
                  <li className={styled.Amozeshi}>
                    <Link to="/learning">دوره های آموزشی </Link>
                    <div className={styled.subMenuTest}>
                      <Link to="/sublearning">AVR آموزش</Link>
                      <Link to="/sublearningknx">Knx آموزش</Link>
                      <Link to="/sublearningnetwork">آموزش مباني شبكه</Link>
                      <Link to="/sublearningraspberrypi">آموزش رزبری پای</Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/article">مقالات</Link>
                  </li>
                  {/* <li><Link to="Ai">آموزشی هوش مصنوعی </Link></li> */}
                  <li>
                    <Link to="/aboutUs">درباره ما</Link>
                  </li>
                  <li>
                    <Link to="/contactUs">تماس با ما</Link>
                  </li>
                  {/* <div className={styled.DropDown}>
                    <div>
                      <button>test</button>
                      <div className={styled.DropDownOptions}>
                        <Link to="">test1</Link>
                        <Link to="">test1</Link>
                        <Link to="">test1</Link>
                      </div>
                    </div>
                  </div> */}
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
