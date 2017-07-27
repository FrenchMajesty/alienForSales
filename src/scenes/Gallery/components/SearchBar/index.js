import React from 'react'

const SearchBar = ({placeholder, onSearch}) => {
        
        const onSubmit = (e) => {
            e.preventDefault()
            onSearch(e.target.search.value)
        }
        
        return (
        <aside className="search-bar-top">
        <div className="inner-container">
            <form className="search-box" id="search_top" onSubmit={onSubmit}>
                <input className="search-query-input" name="search" placeholder={placeholder} type="text" />
                <button className="submit-btn-form secondary secondary-button" type="submit">Search</button>
            </form>
        </div>
        </aside>
        )
}

export default SearchBar