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

export interface NavBarProps {
  onClick?: () => void;
  isInitiallyOpen?: boolean;
}

export default function NavBar(props: NavBarProps) {
  const { onClick, isInitiallyOpen } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
    // onClick && onClick();
  };
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
                <button>
                  <RiShoppingCartLine />
                </button>
                <button>
                  <Link to="/SignUp">
                    <p>ورود | ثبت نام</p>
                  </Link>

                  <CgEnter />
                </button>
                <form action="submit" className={styled.Form}>
                  <input type="text" placeholder="جستجو" />
                  <button className={styled.button}>
                    <Link to="/aboutus">
                      <IoIosSearch />
                    </Link>
                  </button>
                </form>
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
                  <li>
                    <Link to="/learning">دوره های آموزشی </Link>
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
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
