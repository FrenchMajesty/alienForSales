import React from 'react'
import { Link } from 'react-router'


const Navbar = (props) => {

    return(
        <section>
        <header className="main-header">
            <div className="inner-container">
            <div className="header-outer">
            <div className="fauxborder-left header-fauxborder-left">
            <div className="region-inner header-inner">
                <div className="header section" id="header"><div className="widget Header" data-version="1" id="Header1">
                    <div id="header-inner">
                        <div className="titlewrapper">
                            <h1 className="title">
                                <Link to="#">Aliens For Sales</Link>
                            </h1>
                        </div>
                        <div className="descriptionwrapper">
                            <p className="description"><span>Buy aliens for cheap now or for millions later.</span></p>
                        </div>
                    </div>
                </div></div>
            </div>
            </div>
            </div>
            </div>
        </header>
        <nav className="navigation" id="navbar_links">
        <div className="inner-container navbar">
        <ul className="nav-bar-link">
            <li>
                <Link to="/"><span>Home</span></Link>
            </li>
            <li>
                <Link to="/about"><span>About</span></Link>
            </li>
            <li>
                <Link to="gallery"><span>Gallery</span></Link>
            </li>
            <li>
                <Link to="#home"><span>Another Page</span></Link>
            </li>
        </ul>
        <div className="navigation-toggle">
            <Link to="#" id="togglerNav" title="toggle">
                <span className="text">Toggle</span><i className="fa fa-fw fa-bars"></i>
                <div className="toggle-bars">
                    <i className="bar bar_1"></i>
                    <i className="bar bar_2"></i>
                    <i className="bar bar_3"></i>
                </div>
            </Link>
        </div>
        </div>
        </nav>
        </section>
    )
}

export default Navbar
