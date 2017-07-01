import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-bar">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/about">Link #4</Link></li>
                </ul>
            </nav>
        );
    }
}


export default Navbar;
