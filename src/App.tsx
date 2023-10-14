import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import {Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import NavBar from "./component/NavBar"
import AboutUs from './Pages/AboutUs';
import ShoppingPage from './Pages/ShoppingPage';
import Learning from './Pages/Learning';
import Article from './Pages/Article';
import ContactUs from './Pages/ContactUs';
import Test4 from './component/Test4';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ArticleBody from './component/ArticleBody';
import LearningBody from './component/LearningBody';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div  className="bg-blue-100">100</div>
        <div  className="bg-blue-200">200</div>
        <div  className="bg-blue-300">300</div>
        <div  className="bg-blue-400">400</div>
        <div  className="bg-blue-600">500</div>
        <div  className="bg-blue-700">600</div> */}
    
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/Learning" element={<Learning />}/>
        <Route path="/shopping" element={<ShoppingPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Test4" element={<Test4/>}/>
        <Route path="/Article1" element ={<ArticleBody/>}/>
        <Route path="/learningBody" element={<LearningBody/>}/>
      </Routes>
    </div>
  );
}

export default App;
