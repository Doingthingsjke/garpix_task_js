import React from 'react'
import '../../styles/CardBarFive.css'

import burger_small from '../../logo/burger_small.svg'

const CardBarFive = () => {
  return (
    <div className="cardbarfive">
      <div className="carbarfive_logo">
        <img src={burger_small} alt="Something" />
        <img src={burger_small} alt="Something" />
        <img src={burger_small} alt="Something" />
        <img src={burger_small} alt="Something" />
        <img src={burger_small} alt="Something" />
      </div>
      <div className="carbarfive_desc">
        <div>Скидки за бонусы</div>
      </div>
    </div>
  )
}

export default CardBarFive
