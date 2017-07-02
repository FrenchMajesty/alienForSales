import React from 'react'
import {Link} from 'react-router'

const BasicButton = (props) => {
    
    const {target,color, title, icon} = props
    const bgCol = color ? {backgroundColor: color} : {}
    return (
    <Link to={target} className="home-link basic-button" style={{overflow: "hidden"}, bgCol}>
        <span className="ink pressed animatedR"> </span>
        {icon &&
            <i className="material-icons">{icon}</i>}
            {props.title}
    </Link>
    )
}

export default BasicButton