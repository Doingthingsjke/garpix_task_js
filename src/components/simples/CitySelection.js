import React from 'react'
import '../../styles/CitySelection.css'

const CitySelection = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'city_selection active' : 'city_selection'}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? 'city_selection--content active' : 'city_selection--content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={
            active
              ? 'city_selection--triangle active'
              : 'city_selection--triangle'
          }
        ></div>
        <div
          className={
            active ? 'city_selection--city active' : 'city_selection--city'
          }
        >
          Ваш город - <b>Санкт-Петербург</b>?
        </div>
        <div
          className={
            active
              ? 'city_selection--buttons active'
              : 'city_selection--buttons'
          }
        >
          <button
            className={
              active
                ? 'city_selection--button active'
                : 'city_selection--button'
            }
          >
            Да
          </button>
          <button
            className={
              active
                ? 'city_selection--button long_button active'
                : 'city_selection--button'
            }
          >
            Сменить город
          </button>
        </div>
      </div>
    </div>
  )
}

export default CitySelection
