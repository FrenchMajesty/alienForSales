import React, { Component } from 'react'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import { grey50 } from 'material-ui/styles/colors'

const SideNavigation = ({user, active}) => {    
    
    const calculateHeight = () => {
        return ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').outerHeight()));
    }
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
                        <IconMenu
                            iconButtonElement={<IconButton>
                            <FontIcon className="material-icons" color={grey50}>keyboard_arrow_down</FontIcon></IconButton>}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem linkButton containerElement={<Link to={active} />} primaryText="Refresh page" />
                            <MenuItem linkButton containerElement={<Link to="/admin/logout" />} primaryText="Logout" />
                        </IconMenu>
                    </div>
                </div>
            </div> 
            
            <div className="menu">
                 <List style={{overflow: "scroll", height: calculateHeight()}}>
                    <Subheader>Main Navigation</Subheader>
                    
                        <ListItem 
                            key={1} className={active == "/admin/" ? "active" : ""} primaryText="Home"
                            linkButton containerElement={<Link to="/admin/" />} 
                            leftIcon={<FontIcon className="material-icons inherit">home</FontIcon>}
                        />
                        <ListItem
                            key={2} className={active.search(/^\/admin\/gallery/) != -1 ? "active" : ""} primaryText="Gallery"  primaryTogglesNestedList={true}
                            leftIcon={<FontIcon className="material-icons inherit">collections</FontIcon>}
                            nestedItems={[
                                <ListItem linkButton containerElement={<Link to="/admin/gallery/" />} key={1} primaryText="Edit gallery" />,
                                 <ListItem linkButton containerElement={<Link to="/admin/gallery/add" />} key={2} primaryText="Add to gallery" />
                            ]}
                        />
                         <ListItem
                            key={3} className={active.search(/^\/admin\/blogs/) != -1 ? "active" : ""} primaryText="Blogs"  primaryTogglesNestedList={true}
                            leftIcon={<FontIcon className="material-icons inherit">content_paste</FontIcon>}
                            nestedItems={[
                                <ListItem linkButton containerElement={<Link to="/admin/blogs/" />} key={1} primaryText="See blog posts" />,
                                 <ListItem linkButton containerElement={<Link to="/admin/blogs/add" />} key={2} primaryText="Add an article" />
                            ]}
                        />
                        <ListItem 
                            key={4} className={active == "/admin/settings" ? "active" : ""} primaryText="Settings"
                            linkButton containerElement={<Link to="/admin/settings" />} 
                            leftIcon={<FontIcon className="material-icons inherit">settings</FontIcon>}
                        />
                        <ListItem 
                            key={5} className={active == "/admin/log" ? "active" : ""} primaryText="Changelogs"
                            linkButton containerElement={<Link to="/admin/log" />} 
                            leftIcon={<FontIcon className="material-icons inherit">update</FontIcon>}
                        />
                </List>
                
                <ul className="list" style={{display: 'none'}}>
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
                    &copy; 2016 - {new Date().getFullYear()} <Link>AdminBSB - Material Design</Link>.
                </div>
                <div className="version">
                    <b>Version: </b> 1.0.5
                </div>
            </div>
        </aside>
        )
}


export default SideNavigation