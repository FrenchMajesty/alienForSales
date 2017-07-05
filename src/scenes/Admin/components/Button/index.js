import React from 'react'

const Button = (props) => {
    
    const {title, icon} = props
    const classes = props.className || 'btn-default'
    return (
        <button type="button" className={"btn waves-effect " + classes}>
            {icon &&
                <i className="material-icons">{icon}</i>}
            <span>{title.toUpperCase()}</span></button>
    )
}


export default Button