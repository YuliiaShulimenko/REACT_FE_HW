import s from './Offers.module.css'
import bycikle from "../../images/image 2.png";


function Offers() {
  return (
    <div className={s.offers}>
            <div className={s.offers_left}>
                <h2 className={s.offers_title}>Что мы предлагаем</h2>
                <p className={s.offers_text}>В нашей мастерской можно выполнить комплексное техническое
                    обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя
                    проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем
                    качественно и с душой. </p>
            </div>
            <div className={s.offers_img}>
      <img src={bycikle} alt="#"/>
      </div>
        </div>
    )
}


export default Offers