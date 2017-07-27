import React from 'react'
import FontIcon from 'material-ui/FontIcon'

const BasicButton = ({className, target, color, title, id, onClick}) => {
    
   return (
       <button className={`home-link basic-button ${className}`}
            style={{overflow: "hidden", backgroundColor: color || ''}}
            id={id}
            onTouchTap={onClick}
           disabled={(className == 'disabled' && true) || null}
        >
       {title}
       </button>
   )
}

export default BasicButton