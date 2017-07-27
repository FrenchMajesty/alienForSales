import React from 'react'
import {Link} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {indigo600, lightBlue300, red500} from 'material-ui/styles/colors'

const RoundSocialButtons = (props) => {
    
    return (
        <div className="social-share-circles">
            <Link className="sc-circle anim-1">
                    <FloatingActionButton mini={true} backgroundColor={indigo600}>
                        <i className="fa fa-facebook fa-lg"></i>
                    </FloatingActionButton>
            </Link>
            <Link className="sc-circle anim-3">
                <FloatingActionButton mini={true} backgroundColor={red500}>
                    <i className="fa fa-google-plus fa-lg"></i>
                </FloatingActionButton>
            </Link>
            
            <Link className="sc-circle anim-2">
                <FloatingActionButton mini={true} backgroundColor={lightBlue300}>
                    <i className="fa fa-twitter fa-lg"></i>
                </FloatingActionButton>
            </Link>
        </div>
    )
}


export default RoundSocialButtons