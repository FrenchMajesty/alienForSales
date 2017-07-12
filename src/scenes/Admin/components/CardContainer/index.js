import React from 'react'
import { Link } from 'react-router'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'

const CardContainer = ({children, title, size, smallPrint, animation, dropdown}) => {
    
    const animate = animation || ''
    return (
        <div className={"col-xs-12 col-sm-12 col-md-4 col-lg-12 "+size}>
                    <div className={`card wow ${animate}`}>
                        <div className="header">
                            <h2>{title.toUpperCase()}</h2>
                            {smallPrint &&
                                <small>{smallPrint}</small>}
                           {dropdown && <IconMenu
                                className="header-dropdown m-r--5"
                                iconButtonElement={<IconButton>
                                <FontIcon className="material-icons">more_vert</FontIcon></IconButton>}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                style={{top: '5px', position: 'absolute'}}
                            >
                                {dropdown}
                            </IconMenu>}
                        </div>
                        <div className="body">
                            {children}
                        </div>
                    </div>
                </div>
    )
}

export default CardContainer