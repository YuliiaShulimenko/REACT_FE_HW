import React from 'react'
import s from "./About.module.css";

function About() {
  return (
    <div className={s.about}>

    <p className={s.about_text}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть
        из них даже друзьями.</p>

    <p className={s.about_text}>А также в нашей мастерской можно отремонтировать электросамокат и
        электровелосипед.</p>
</div>
);
}

export default About