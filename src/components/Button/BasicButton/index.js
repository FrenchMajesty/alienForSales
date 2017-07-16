import React from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

const BasicButton = ({className,disabled, target, color, title, icon, id, onClick}) => {
    
    const bgCol = color ? {backgroundColor: color} : {}
    const disabler = className ? {disabled: "true"} : {to: target}
    

   return (
       <button className={"home-link basic-button " + className}
        style={{overflow: "hidden"}, bgCol}
        id={id}
        onTouchTap={onClick}
        >
       {title}
       </button>
   )
   /*(
       <Link
            className={"home-link basic-button " + className}
            style={{overflow: "hidden"}, bgCol}
            id={id}
            {...disabler}
        >
            <span className="ink pressed animatedR"> </span>
            {icon &&
                <i className="material-icons">{icon}</i>}
                {title}
        </Link>)*/
    
}

export default BasicButton