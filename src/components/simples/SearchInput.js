import React from 'react'
import '../../styles/SearchInput.css'
import search from '../../logo/search.svg'

const SearchInput = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'search_input active' : 'search_input'}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? 'search_input--content active' : 'search_input--content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          name="search"
          placeholder="Поиск"
          className={
            active ? 'search_input--modal active' : 'search_input--modal'
          }
        />
        <button
          className={
            active ? 'search_input--button active' : 'search_input--button'
          }
        >
          <img src={search} alt="Search pic"></img>
        </button>
      </div>
    </div>
  )
}

export default SearchInput
