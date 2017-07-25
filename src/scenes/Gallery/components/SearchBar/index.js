import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchBar extends Component {
    
    render() {
        const {placeholder, onSearch} = this.props
        
        return (
        <aside className="search-bar-top">
        <div className="inner-container">
            <form className="search-box" id="search_top" onSubmit={onSearch}>
                <input className="search-query-input" name="search" placeholder={placeholder} type="text" />
                <button className="submit-btn-form" type="submit">Search</button>
            </form>
        </div>
        </aside>
        )
    }
}

export default SearchBar