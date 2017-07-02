import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchBar extends Component {
    
    render() {
        const {placeholder} = this.props
        
        return (
        <aside className="search-bar-top">
        <div className="inner-container">
            <form action="/search" className="search-box" id="search_top" method="get">
                <input className="search-query-input" name="q" placeholder={placeholder} type="text" />
                <button className="submit-btn-form" type="submit">Search</button>
            </form>
        </div>
        </aside>
        )
    }
}

export default SearchBar