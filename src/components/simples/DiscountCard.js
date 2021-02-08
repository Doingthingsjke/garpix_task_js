import React from 'react'
import '../../styles/DiscountCard.css'

import technopark from '../../logo/technopark.svg'
import technopark_small from '../../logo/technopark_small.svg'

const DiscountCard = () => {
  return (
    <div className="discount_card">
      <div className="discount_card--logo">
        <img src={technopark} alt="Something" />
      </div>

      <div className="discount_card--desc">
        <div>
          <img src={technopark_small} alt="Something" />
        </div>
        <div className="discount_card--desc--name">
          <div className="discount_card--desc--name--name">Технопарк</div>
          <div>20% Спасибо за технику Electrolux</div>
        </div>
      </div>
    </div>
  )
}

export default DiscountCard
