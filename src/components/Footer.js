import React from 'react'
import '../styles/Footer.css'

import sberlogo from '../logo/sberlogo.svg'
import google_play from '../logo/google_play.svg'
import app_store from '../logo/app_store.svg'
import vk from '../logo/vk.svg'
import fb from '../logo/fb.svg'
import ok from '../logo/ok.svg'
import inst from '../logo/inst.svg'

const Footer = () => {
  return (
    <div className="footer_body">
      <div className="footer_body--info">
        <div className="footer_body--info--big">900</div>
        <div className="footer_body--info--small">По России бесплатно</div>
        <img src={sberlogo} alt="asd"></img>
        <div className="footer_body--info--pao">
          <div>©</div>
          <div>1997-2019 ПАО Сбербанк.</div>
        </div>
      </div>
      <div className="footer_body--buttons">
        <div className="footer_body--buttons--first">
          <div>
            <button className="footer_button">
              <div>Купоны и сертификаты</div>
            </button>
            <button className="footer_button">
              <div>Впечатления</div>
            </button>
            <button className="footer_button">
              <div>Авиабилеты</div>
            </button>
            <button className="footer_button">
              <div>Ж/д билеты</div>
            </button>
            <button className="footer_button">
              <div>Отели</div>
            </button>
            <button className="footer_button">
              <div>Каршеринг</div>
            </button>
          </div>
          <div>
            <button className="footer_button">
              <div>Театры</div>
            </button>
            <button className="footer_button">
              <div>Страхование</div>
            </button>
            <button className="footer_button">
              <div>Как подключиться</div>
            </button>
            <button className="footer_button">
              <div>Партнеры</div>
            </button>
          </div>
        </div>

        <div className="footer_body--buttons--second">
          <div>
            <button className="footer_button--app">
              <img src={google_play} alt="Something"></img>
            </button>
            <button className="footer_button--app">
              <img src={app_store} alt="Something"></img>
            </button>
          </div>
          <div>
            <button className="footer_button--social">
              <img src={ok} alt="Something" />
            </button>
            <button className="footer_button--social">
              <img src={fb} alt="Something" />
            </button>
            <button className="footer_button--social">
              <img src={vk} alt="Something" />
            </button>
            <button className="footer_button--social">
              <img src={inst} alt="Something" />
            </button>
          </div>
        </div>
        <div className="footer_body--policy">
          <a href="/#">Политика</a> АО "ЦПЛ" в отношении обработки персоональных
          данных и <a href="/#">Согласие</a> на обработку данных учстника
          Программы "Спасибо от Сбербанка"
        </div>
      </div>
    </div>
  )
}

export default Footer
