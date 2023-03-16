import React from 'react'
import s from "./Header.module.css"
import Nav from "./Nav/Nav"
import logo from "../../images/logo copy 1.png";




function Header() {
  return (
    <div className={s.header}>
      <img src={logo} alt="#"/>
      <Nav/>
      <button className={s.btn}>Связаться</button>
    </div>
  )
}

export default Header