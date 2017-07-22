import React from 'react'
import { Link } from 'react-router'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

const Table = ({id, children, size, title, tableStyle, animation, dropdown}) => {
    
    const animate = animation || ''
    return (
                <div className={"col-xs-12 col-sm-12 col-md-8 "+size}>
                    <div className={`card wow ${animate}`}>
                        <div className="header">
                            <h2>{title.toUpperCase()}</h2>
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
                            <div className="table-responsive">
                                <table id={id || null} className={"table dashboard-task-infos "+ tableStyle}>
                                    {children}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
    )
}

export default Table