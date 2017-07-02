import React from 'react'
import {Link} from 'react-router'

const BasicButton = (props) => {
    
    const {target,color, title, icon, className, id, disabled} = props
    const bgCol = color ? {backgroundColor: color} : {}
    
    const disabler = disabled ? {disabled: "true"} : {}
    
    return (
    <button
        to={!disabled ? target : "#"}
        className={"home-link basic-button " + className}
        style={{overflow: "hidden"}, bgCol}
        id={id}
        {...disabler}
    >
        <span className="ink pressed animatedR"> </span>
        {icon &&
            <i className="material-icons">{icon}</i>}
            {props.title}
    </button>
    )
}

export default BasicButton