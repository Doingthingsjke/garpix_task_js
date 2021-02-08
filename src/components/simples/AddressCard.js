import React from 'react'
import '../../styles/AddressCard.css'
import apple_small from '../../logo/apple_small.svg'
import metro_green from '../../logo/metro_green.svg'
import metro_red from '../../logo/metro_red.svg'

const AddressCard = () => {
  return (
    <div className="address_card">
      <div className="address_card--logo">
        <img className="address_card--logo--img" src={apple_small} alt=""></img>
        <div className="address_card--body">
          <div>
            <div>Москва, ул. Большая Татарская, 21</div>
            <div className="address_card--body--metro">
              <img src={metro_green} alt="" />
              <div>Маяковская</div>
              <img src={metro_red} alt="" />
              <div>Лубянка</div>
            </div>
            <div>+7 495 220-30-44</div>
            <div>Ежедневно с 9:00 до 21:00</div>
            <button className="address_card--body--button">apple.com</button>
          </div>
          <button className="address_body--button">Проложить маршрут</button>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
