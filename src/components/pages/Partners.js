import React from 'react'
import '../../styles/Partners.css'
import CardBar from '../simples/CardBar.js'
import CardBarFive from '../simples/CardBarFive.js'
import DiscountCard from '../simples/DiscountCard.js'
import ProductCard from '../simples/ProductCard.js'

const Partners = () => {
  return (
    <div className="content_partners">
      <h1 className="content_partners--title">Партнеры и предложения</h1>
      <div className="content_partners--buttons">
        <div className="content_partners--buttons--first">
          <button className="content_partners--button">Все партнеры</button>
          <button className="content_partners--button">Популярные</button>
          <button className="content_partners--button">Супермаркеты</button>
          <button className="content_partners--button">Кафе и рестораны</button>
          <button className="content_partners--button">Такси</button>
          <button className="content_partners--button">Красота</button>
        </div>
        <div className="content_partners--buttons--first">
          <button className="content_partners--button">
            Электроника и бытовая техника
          </button>
          <button className="content_partners--button">Зоотовары</button>
          <button className="content_partners--button">Кино и театр</button>
          <button className="content_partners--button">
            <div className="content_partners--button--etc">...</div>
          </button>
        </div>
      </div>
      <div className="content_partners--checkbox">
        <p>Начисляют спасибо</p>
        <input
          type="checkbox"
          className="slide-checkbox"
          name="slide"
          id="slide"
          required
        />
        <label htmlFor="slide" className="checkbox"></label>
        <p className="content_partners--checkbox--green">Принимают спасибо</p>
      </div>
      <div className="content_partners--products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className="content_partners--button content_partners--button--partners">
        Еще 4 партнера
      </button>

      <h1 className="content_partners--title">
        3 предложения в категории "Электроника и бытовая техника"
      </h1>
      <div className="content_partners--discounts">
        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
      </div>
      <button className="content_partners--button content_partners--button--partners">
        Еще 4 предложения
      </button>

      <div className="content_partners--card">
        <CardBarFive />
        <div className="content_partners--card--middle">
          <CardBar />
          <CardBar />
        </div>
        <CardBarFive />
      </div>
    </div>
  )
}

export default Partners
