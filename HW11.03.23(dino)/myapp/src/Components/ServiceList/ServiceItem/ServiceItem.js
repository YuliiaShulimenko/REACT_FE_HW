import React from 'react'
import s from "./ServiceItem.module.css"



function ServiceItem(props) {
  return (
    <div className={s.sItem} 
    style={{backgroundColor : `${props.background}`}}>
        <h2 className={s.service_text}>{props.text}</h2>
    </div>
  )
}

export default ServiceItem