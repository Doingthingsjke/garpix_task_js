import React, { useState } from 'react'

import SearchInput from './simples/SearchInput'
import CitySelection from './simples/CitySelection'

import '../styles/Navigation.css'
import sber from '../logo/sber.svg'
import geo from '../logo/geo.svg'
import search from '../logo/search.svg'

import { Link } from 'react-router-dom'

const Navigation = () => {
  const [searchInputActive, setSearchInputActive] = useState(false)
  const [citySelectionActive, setCitySelectionActive] = useState(false)

  return (
    <div>
      <div className="navigation">
        <div className="logo_sber">
          <a href="/">
            <img src={sber} alt="" />
          </a>
        </div>
        <div className="navigation_buttons">
          <div>
            <Link to="/coupons">
              <button className="navigation_button">
                <div>Купоны и сертификаты</div>
              </button>
            </Link>
            <button className="navigation_button">
              <div>Впечатления</div>
            </button>
            <button className="navigation_button">
              <div>Авиабилеты</div>
            </button>
            <button className="navigation_button">
              <div>Ж/д билеты</div>
            </button>
            <button className="navigation_button">
              <div>Отели</div>
            </button>
          </div>
          <div>
            <button className="navigation_button">
              <div>Каршеринг</div>
            </button>
            <button className="navigation_button">
              <div>Театры</div>
            </button>
            <button className="navigation_button">
              <div>Страхование</div>
            </button>
            <button className="navigation_button">
              <div>Как подключиться</div>
            </button>
            <Link to="/partners">
              <button className="navigation_button">
                <div>Партнеры</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="navigation_search">
          <button
            className="navigation_search--location"
            onClick={() => setCitySelectionActive(true)}
          >
            <img src={geo} alt=""></img>
            <p>Санкт Петербург</p>
          </button>
          <div className="navigation_menu">
            <button
              className="navigation_menu--button"
              onClick={() => setSearchInputActive(true)}
            >
              <img src={search} alt="Search pic"></img>
            </button>
            <button className="navigation_menu--login">Войти</button>
          </div>
        </div>
      </div>
      <SearchInput
        active={searchInputActive}
        setActive={setSearchInputActive}
      />
      <CitySelection
        active={citySelectionActive}
        setActive={setCitySelectionActive}
      />
    </div>
  )
}

export default Navigation
