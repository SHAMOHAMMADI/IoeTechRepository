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
import SubLearning from "./Pages/SubLearning";
import SubLearningKnx from "./Pages/SubLearningKnx";
import SubLearningNetwork from "./Pages/SubLearningNetwork";
import SubLearningProtocol from "./Pages/SubLearningProtocol";
import SubLearningRaspberrypi from "./Pages/SubLearningRaspberrypi";
import { useState } from "react";
import { createContext } from "react";
import { UserContextProvider } from "../src/component/Context/UserContextProvider";
import { LoginUserContextProvider } from "../src/component/Context/LoginUserContext";
import SubProducts from "./Pages/SubProducts";
import Profile from "./Pages/Profile";
import SubArticle from "./Pages/SubArticle";
import UserFinds from "./Pages/UserFinds";

export type myProps = [isLogin?: boolean, setIsLogin?: () => void];
// export  const AppContext = createContext<myProps>({
//   isLogin : true,
//   setIsLogin : ()=>void
// });

export const AppContext = createContext({} as myProps);

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);

  return (
    <div className="App">
      {/* <UserContextProvider> */}
      {/* <LoginUserContextProvider> */}
      {/* <AppContext.Provider value={{ isLogin, setIsLogin }}> */}
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
        <Route path="/subarticle/:id" element={<SubArticle />} />
        <Route path="/SubLearning" element={<SubLearning />} />
        <Route path="/SubLearningknx" element={<SubLearningKnx />} />
        <Route path="/subproducts/:id" element={<SubProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userfinds" element={<UserFinds />}></Route>
        <Route
          path="/SubLearningraspberrypi"
          element={<SubLearningRaspberrypi />}
        />

        <Route path="/SubLearningnetwork" element={<SubLearningNetwork />} />
        <Route path="/SubLearningprotocol" element={<SubLearningProtocol />} />
      </Routes>
      {/* </AppContext.Provider> */}
      {/* </LoginUserContextProvider> */}
      {/* </UserContextProvider> */}
    </div>
  );
}

export default App;
