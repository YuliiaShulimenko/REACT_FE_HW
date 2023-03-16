import React from 'react'
import s from "./Nav.module.css"


function Nav() {
  return (
   <div className={s.nav}>
    <ul>
      <li>О нас</li>
      <li>Услуги</li>
      <li>Аренда</li>
    </ul>
    </div>
  )
}

export default Nav