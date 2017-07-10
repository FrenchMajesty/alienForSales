import React from 'react'

const Button = ({className, title, icon, disabled, type, onClick}) => {
    
    const classes = className || 'btn-default'
    return (
        <button type={type || "button"} className={"btn waves-effect " + classes} disabled={disabled ? true : null}
                onClick={onClick}
        >
            {icon &&
                <i className="material-icons">{icon}</i>}
            <span>{title.toUpperCase()}</span></button>
    )
}


export default Button