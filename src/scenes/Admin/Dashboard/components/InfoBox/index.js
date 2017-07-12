import React from 'react'
import { Link } from 'react-router'

const InfoBox = ({color, title, icon, animation, type, value}) => {
    
    const col = color || 'bg-orange'
    const effect = animation || 'hover-expand-effect'
    const boxStyle = type || 'info-box'
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className={`${boxStyle} ${col} ${effect}`}>
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

export default InfoBox