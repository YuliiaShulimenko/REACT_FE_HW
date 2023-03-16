import React from 'react'
import s from "./Banner.module.css";
import dino from "../../images/din 1.png";


function Banner() {
  return (
    <div className={s.banner}>

      <div className={s.banner_left}>

        <h1 className={s.banner_title}>
          Веломастерская “Велозар”
          </h1>

        <p className={s.banner_text}>
          Мы, мастера веломастерской «Велозар», как раз те самые счастливые
          люди, которые смогли превратить свое увлечение и хобби в профессию. Мы
          сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам
          только радость и удовольствие от езды.
        </p>
      </div>

      <div >
      <img src={dino} alt="#"/>
      </div>
    </div>
  );
}

export default Banner;
