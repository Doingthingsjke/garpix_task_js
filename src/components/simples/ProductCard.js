import React from 'react'
import '../../styles/ProductCard.css'

import burger from '../../logo/burger.svg'

const ProductCard = () => {
  return (
    <div className="product_card">
      <div className="product_card--title">
        <h2>1,5%</h2>
        <p>Спасибо от суммы покупки</p>
      </div>
      <div className="product_card--naming">
        <div>
          <img src={burger} alt="Something" />
        </div>
        <p>Бургер Кинг</p>
      </div>
    </div>
  )
}

export default ProductCard
