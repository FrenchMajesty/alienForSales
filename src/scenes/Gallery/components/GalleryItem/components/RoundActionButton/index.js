import React from 'react'
import {Link} from 'react-router'

const RoundActionButton = (props) => {
    return (
        <span className="post-icons">
            <Link to="#" title="Buy Piece">
                <span 
                    className="item-control blog-admin material-icons"
                    title={props.title}
                >{props.icon}</span>
            </Link>
        </span>
    )
}

export default RoundActionButton