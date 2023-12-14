import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./component/NavBar";
import AboutUs from "./Pages/AboutUs";
import ShoppingPage from "./Pages/ShoppingPage";
import Learning from "./Pages/Learning";
import Article from "./Pages/Article";
import ContactUs from "./Pages/ContactUs";
import Test4 from "./component/Test4";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ArticleBody from "./component/ArticleBody";
import LearningBody from "./component/LearningBody";
import { useState } from "react";
import { createContext } from "react";
import { UserContextProvider } from "../src/component/Context/UserContextProvider";
import { LoginUserContextProvider } from "../src/component/Context/LoginUserContext"

export type myProps = [isLogin?: true, setIsLogin?: () => void];
// export  const AppContext = createContext<myProps>({
//   isLogin : true,
//   setIsLogin ?: ()=>void
// });

export const AppContext = createContext({} as myProps);

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className="App">
      <UserContextProvider>
        <LoginUserContextProvider>

        {/* <AppContext.Provider value={{isLogin , setIsLogin}}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/article" element={<Article />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Test4" element={<Test4 />} />
          <Route path="/Article1" element={<ArticleBody />} />
          <Route path="/learningBody" element={<LearningBody />} />
        </Routes>
        {/* </AppContext.Provider>~ */}
        </LoginUserContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
