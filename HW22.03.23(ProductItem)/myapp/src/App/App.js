import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useState } from "react";
import s from "./App.module.css";


    // ТИГРАН,просьба объяснить на консультации в пятницу как используя event избавиться от ошибки,когда много кликаешь,что будут карточки пропадать.Через привентдефолт
function App() {
  const data = [
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 },
  ];

  let [products, setProducts] = useState(data);

  const addUser = () => {
    let newProduct = {
      id: Date.now(),
      name: prompt("Введите наименование товара"),
      price: prompt("Введите цену"),
      count: prompt("Количество товара"),
    };
    setProducts([...products, newProduct]);
  };

  const incr = (id) => {
    const newArr = products.map((elem) => {
      if (elem.id == id) {
        elem.count++;
      }
      return elem;
    });
    setProducts(newArr);
  };

  const decr = (id) => {
    const newArr = products.map((elem) => {
      if (elem.id == id) {
        elem.count--;
      }
      return elem;
    });
    setProducts(newArr);
  };

  const deleteProduct  = (id) => {
    const newArr = products.filter(elem => elem.id !== id)
    setProducts(newArr);
   
  };



  return (
    <div>
      <div className={s.button_app}>
        <button onClick={addUser} >Добавить товар</button>
      </div>
      <div className={s.app_style}>
        {products.map((el) => (
          <ProductItem key={el.id} {...el} incr={incr} decr={decr} deleteProduct={deleteProduct} />
        ))}
      </div>
    </div>
  );
}

export default App;
