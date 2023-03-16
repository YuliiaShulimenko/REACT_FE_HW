import React from 'react'
import s from "./Rental.module.css";
import rental from "../../images/image 3.png";

function Rental() {
  return (
    <div className={s.rental}>
            <div className={s.rental_img}>
            <img src={rental} alt="#"/>
            </div>
            <div className={s.rental_right}>
                <h2 className={s.rental_title}>Прокат велосипедов</h2>
                <p className={s.rental_text}>У нас вы можете взять на прокат хорошо обслуженные и настроенные
                    велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </div>
  )
}

export default Rental