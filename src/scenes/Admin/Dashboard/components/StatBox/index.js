import React from 'react'
import { Link } from 'react-router'

const StatBox = (props) => {
    
    const {title, icon, value} = props
    const color = props.color || 'bg-orange'
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className={"info-box hover-expand-effect "+color}>
                        <div className="icon">
                            <i className="material-icons">{icon}</i>
                        </div>
                        <div className="content">
                            <div className="text">{title.toUpperCase()}</div>
                            <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20">{value}</div>
                        </div>
                    </div>
                </div>
    )
}

export default StatBox