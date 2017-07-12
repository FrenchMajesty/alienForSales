import React, { Component } from 'react'
import { Link } from 'react-router'

const SideNavigation = (props) => {
    
    const {user, active} = props
    return (
    
        <aside id="leftsidebar" className="sidebar">
            
            <div className="user-info">
                <div className="image">
                    <img src="images/user.png" width="48" height="48" alt="User" />
                </div>
                <div className="info-container">
                    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name}</div>
                    <div className="email">{user.email}</div>
                    <div className="btn-group user-helper-dropdown">
                        <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul className="dropdown-menu pull-right">
                            <li><Link to="javascript:void(0);"><i className="material-icons">person</i>Profile</Link></li>
                            <li role="seperator" className="divider"></li>
                            <li><Link to="javascript:void(0);"><i className="material-icons">input</i>Sign Out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
            <div className="menu">
                <ul className="list">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className={active == "/admin/" ? "active" : ""}>
                        <Link to="/admin/">
                            <i className="material-icons">home</i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={active.search(/^\/admin\/gallery/) != -1 ? "active" : ""}>
                        <Link className="menu-toggle">
                            <i className="material-icons">collections</i>
                            <span>Gallery</span>
                        </Link>
                        <ul className="ml-menu">
                            <li>
                                <Link to="/admin/gallery">See Gallery</Link>
                            </li>
                             <li>
                                <Link to="/admin/gallery/add">Add to Gallery</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={active.search(/^\/admin\/blogs/) != -1 ? "active" : ""}>
                        <Link className="menu-toggle">
                            <i className="material-icons">content_paste</i>
                            <span>Blog</span>
                        </Link>
                        <ul className="ml-menu">
                            <li>
                                <Link to="/admin/blogs">See Blog posts</Link>
                            </li>
                             <li>
                                <Link to="/admin/blogs/add">Add an article</Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className={active == "/admin/settings" ? "active" : ""}>
                        <Link to="/admin/settings">
                            <i className="material-icons">settings</i>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className={active == "/admin/log" ? "active" : ""}>
                        <Link to="/admin/log">
                            <i className="material-icons">update</i>
                            <span>Changelogs</span>
                        </Link>
                    </li>
                </ul>
            </div>
            
            
            <div className="legal">
                <div className="copyright">
                    &copy; 2016 - {new Date().getFullYear()} <Link to="javascript:void(0);">AdminBSB - Material Design</Link>.
                </div>
                <div className="version">
                    <b>Version: </b> 1.0.5
                </div>
            </div>
            
        </aside>
        )
}


export default SideNavigation