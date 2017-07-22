import React, { Component } from 'react'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Drawer from 'material-ui/Drawer'
import { grey50 } from 'material-ui/styles/colors'
import { formatDate } from '~/services/Helper'
import { getLogs } from '~/services/api'

class SideNavigation extends Component {    
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.renderLogs = this.renderLogs.bind(this)
        this.loadLogs = this.loadLogs.bind(this)
    }
    
    getInitialState() {
        return {
            changelogOpen: false,
            logs: [
                {
                    timestamp: "05/31/2017",
                    operation: "Coded a fairly nice administrative panel in React",
                    user: "Verdi"
                }
            ]
        }
    }
    
    componentWillMount() {
        this.loadLogs()
    }
    
    componentWillUpdate() {
        this.loadLogs()
    }
    
    loadLogs() {
        getLogs().then(response => {
            if(response.data.length > 0)
                this.setState({logs: response.data})
        })
    }
    
    calculateHeight() {
        return ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').outerHeight()));
    }
    
    renderLogs() {
        const {logs} = this.state
        if(logs.length > 0) {
            return(logs.map((log, i) => {
                return(<ListItem className="font-italic" key={i+2}
                        leftIcon={<FontIcon className="material-icons inherit">fingerprint</FontIcon>}
                           primaryText={`On ${formatDate(log.date_recorded)}, ${log.action} by ${log.user}`}
                           />)
            }))
        }else {
            return(<ListItem key={3} className="font-italic" primaryText="No changes have been made so far." />)
        }
    }
    
    render() {
        const {user, active, logout} = this.props
        const {changelogOpen} = this.state
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
                                <MenuItem onTouchTap={logout} primaryText="Logout" />
                            </IconMenu>
                        </div>
                    </div>
                </div> 

                <div className="menu">
                     <List style={{overflow: "scroll", height: this.calculateHeight()}}>
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
                                linkButton onTouchTap={() => this.setState({changelogOpen: !changelogOpen})} 
                                leftIcon={<FontIcon className="material-icons inherit">update</FontIcon>}
                            />
                    </List>
                            {changelogOpen &&
                            <Drawer
                                docked={false}
                                width={400}
                                open={changelogOpen}
                                openSecondary={true}
                                onRequestChange={(changelogOpen) => this.setState({changelogOpen})}
                            >
                            <List>
                                <ListItem key={1} primaryText="" />
                                <ListItem key={2} primaryText="-" />
                                {this.renderLogs()}
                            </List>
                            </Drawer>}
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
}


export default SideNavigation