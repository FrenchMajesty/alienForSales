import React, { Component } from 'react'
import { Link } from 'react-router'
import SideNavigation from './components/SideNavigation'
import TopNavBar from './components/TopNavBar'
import PageLoader from './components/PageLoader'
import { verifyAdminAccess, postLogout } from '~/services/api'

class Admin extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {logged: undefined}
        
        this.verifyAccess = this.verifyAccess.bind(this)
        this.renderChildren = this.renderChildren.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    
    componentWillMount() {
        window.admin = true
        document.body.setAttribute('class','theme-red')
        this.verifyAccess()
    }
    
    componentWillReceiveProps() {
        this.verifyAccess()   
    }
    
    verifyAccess() {
        verifyAdminAccess()
        .then(isAllowed => {
            console.log(isAllowed.data)
            if(isAllowed.data === false)
                this.props.history.pushState(null, '/admin/login')
            else
                this.setState({logged: isAllowed.data})
        })   
    }
    
    handleLogout() { 
        postLogout().then(_ => window.location.replace('/'))
    }
    
    renderChildren(children) {
        return React.Children.map(children, child => {
                return React.cloneElement(child, {user: this.state.logged})
        })   
    }

    render() {
        const {logged} = this.state
        const { location, children } = this.props
        
        return (
            <section>
                    <pageLoader />
                    <div className="overlay"></div>
                {logged &&
                    <div>
                        <TopNavBar />
                        <section>
                            <SideNavigation user={logged} active={location.pathname} logout={this.handleLogout} />
                            <aside id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs tab-nav-right" role="tablist">
                        <li role="presentation" className="active"><Link to="#skins" data-toggle="tab">SKINS</Link></li>
                        <li role="presentation"><Link to="#settings" data-toggle="tab">SETTINGS</Link></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active in active" id="skins">
                            <ul className="demo-choose-skin">
                                <li data-theme="red" className="active">
                                    <div className="red"></div>
                                    <span>Red</span>
                                </li>
                                <li data-theme="pink">
                                    <div className="pink"></div>
                                    <span>Pink</span>
                                </li>
                                <li data-theme="purple">
                                    <div className="purple"></div>
                                    <span>Purple</span>
                                </li>
                                <li data-theme="deep-purple">
                                    <div className="deep-purple"></div>
                                    <span>Deep Purple</span>
                                </li>
                                <li data-theme="indigo">
                                    <div className="indigo"></div>
                                    <span>Indigo</span>
                                </li>
                                <li data-theme="blue">
                                    <div className="blue"></div>
                                    <span>Blue</span>
                                </li>
                                <li data-theme="light-blue">
                                    <div className="light-blue"></div>
                                    <span>Light Blue</span>
                                </li>
                                <li data-theme="cyan">
                                    <div className="cyan"></div>
                                    <span>Cyan</span>
                                </li>
                                <li data-theme="teal">
                                    <div className="teal"></div>
                                    <span>Teal</span>
                                </li>
                                <li data-theme="green">
                                    <div className="green"></div>
                                    <span>Green</span>
                                </li>
                                <li data-theme="light-green">
                                    <div className="light-green"></div>
                                    <span>Light Green</span>
                                </li>
                                <li data-theme="lime">
                                    <div className="lime"></div>
                                    <span>Lime</span>
                                </li>
                                <li data-theme="yellow">
                                    <div className="yellow"></div>
                                    <span>Yellow</span>
                                </li>
                                <li data-theme="amber">
                                    <div className="amber"></div>
                                    <span>Amber</span>
                                </li>
                                <li data-theme="orange">
                                    <div className="orange"></div>
                                    <span>Orange</span>
                                </li>
                                <li data-theme="deep-orange">
                                    <div className="deep-orange"></div>
                                    <span>Deep Orange</span>
                                </li>
                                <li data-theme="brown">
                                    <div className="brown"></div>
                                    <span>Brown</span>
                                </li>
                                <li data-theme="grey">
                                    <div className="grey"></div>
                                    <span>Grey</span>
                                </li>
                                <li data-theme="blue-grey">
                                    <div className="blue-grey"></div>
                                    <span>Blue Grey</span>
                                </li>
                                <li data-theme="black">
                                    <div className="black"></div>
                                    <span>Black</span>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="settings">
                            <div className="demo-settings">
                                <p>GENERAL SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Report Panel Usage</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Email Redirect</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                                <p>SYSTEM SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Notifications</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Auto Updates</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                                <p>ACCOUNT SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Offline</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Location Permission</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                        </section>
                        {this.renderChildren(children)}
                    </div>
                }
            </section>
        )
    }
}


export default Admin