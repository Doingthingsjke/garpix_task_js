import React from 'react'
import '../../styles/CardBar.css'

import burger_small from '../../logo/burger_small.svg'

const CardBar = () => {
  return (
    <div className="cardbar">
      <div className="cardbar_logo">
        <img src={burger_small} alt="Something" />
        <img src={burger_small} alt="Something" />
        <img src={burger_small} alt="Something" />
      </div>
      <div className="cardbar_desc">
        <div>Скидки за бонусы</div>
      </div>
    </div>
  )
}

export default CardBar
