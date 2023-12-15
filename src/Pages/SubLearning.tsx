import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import LearningComponent from "../component/LearningComponent";
import styled from "./Learning.module.css";
import LogoBanner from "../component/LogoBanner";
export default function Learning() {
  return (
    <>
      <NavBar />
      <LogoBanner />
      <div className={styled.Learning}>
        <LearningComponent />
      </div>
      <Footer />
    </>
  );
}
