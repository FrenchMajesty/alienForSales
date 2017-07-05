import React from 'react'
import { Link } from 'react-router'
 
const TopNavBar = (props) => {
    
    return (
        <section id="nav">
        <div className="search-bar">
        <div className="search-icon">
            <i className="material-icons">search</i>
        </div>
        <input type="text" placeholder="START TYPING..." />
        <div className="close-search">
            <i className="material-icons">close</i>
        </div>
    </div>
        <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></Link>
                <Link to="javascript:void(0);" className="bars"></Link>
                <Link className="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    
                    <li><Link to="javascript:void(0);" className="js-search" data-close="true"><i className="material-icons">search</i></Link></li>
                    
                    
                    <li className="dropdown">
                        <Link to="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i className="material-icons">notifications</i>
                            <span className="label-count">7</span>
                        </Link>
                        <ul className="dropdown-menu">
                            <li className="header">NOTIFICATIONS</li>
                            <li className="body">
                                <ul className="menu">
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-light-green">
                                                <i className="material-icons">person_add</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4>12 new members joined</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 14 mins ago
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-cyan">
                                                <i className="material-icons">add_shopping_cart</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4>4 sales made</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 22 mins ago
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-red">
                                                <i className="material-icons">delete_forever</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>Nancy Doe</b> deleted account</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 3 hours ago
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-orange">
                                                <i className="material-icons">mode_edit</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>Nancy</b> changed name</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 2 hours ago
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-blue-grey">
                                                <i className="material-icons">comment</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>John</b> commented your post</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 4 hours ago
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-light-green">
                                                <i className="material-icons">cached</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>John</b> updated status</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 3 hours ago
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <div className="icon-circle bg-purple">
                                                <i className="material-icons">settings</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4>Settings updated</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> Yesterday
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer">
                                <Link to="javascript:void(0);">View All Notifications</Link>
                            </li>
                        </ul>
                    </li>
                    
                    
                    <li className="dropdown">
                        <Link to="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i className="material-icons">flag</i>
                            <span className="label-count">9</span>
                        </Link>
                        <ul className="dropdown-menu">
                            <li className="header">TASKS</li>
                            <li className="body">
                                <ul className="menu tasks">
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <h4>
                                                Footer display issue
                                                <small>32%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "32%"}}>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <h4>
                                                Make new buttons
                                                <small>45%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <h4>
                                                Create new dashboard
                                                <small>54%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-teal" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "54%"}}>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <h4>
                                                Solve transition issue
                                                <small>65%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">
                                            <h4>
                                                Answer GitHub questions
                                                <small>92%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "92%"}}>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer">
                                <Link to="javascript:void(0);">View All Tasks</Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="pull-right"><Link to="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="material-icons">more_vert</i></Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </section>
    )
}


export default TopNavBar