"use client"

import { useState } from "react"
import "./SearchBar.css"

export default function SearchBar({ placeholder = "Search users...", onSearch }) {
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div className="search-bar-wrapper">
      <div className="search-container">
        <svg
          className="search-container__icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className="search-container__input"
        />
        {query && (
          <button className="search-container__clear" onClick={handleClear} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
