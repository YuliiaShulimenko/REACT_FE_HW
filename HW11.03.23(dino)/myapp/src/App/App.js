import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Offers from '../Components/Offers/Offers'
import About from '../Components/About/About'
import ServiceList from '../Components/ServiceList/ServiceList'
import Rental from '../Components/Rental/Rental'
import s from "./App.module.css"





function App() {
  return (
    <div className={s.app_style}>
      <Header/>
      <Banner/>
      <Offers/>
      <About/>
      <ServiceList/>
      <Rental/>
    </div>
  );
}

export default App;
