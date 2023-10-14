import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ArticleCarts from '../component/ArticleCarts'
import styled from './Article.module.css'
import LogoBanner from '../component/LogoBanner'
import { Link } from 'react-router-dom'

export default function Article() {
  return (
    <>
    <NavBar/>
    <LogoBanner/>
    <div className={styled.topArticles}>

    <div className={styled.Articles}>
      <Link to="/Article1">
      <ArticleCarts/>
      </Link>
    </div>
    </div>
    <Footer/>
    </>
  )
}
