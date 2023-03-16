import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import s from "./ServiceList.module.css"


function ServiceList() {
  return (
      <div className={s.servistList}>
        
          <ServiceItem text={"Годовое ТО"} background={"#22356F"}/>
          <ServiceItem text={"Выравнивание колес"} background={"#0052C1"}/>
          <ServiceItem text={"Настройка переключателей"} background={"#76B58B"}/>
          
      </div>
  )
}
 

export default ServiceList