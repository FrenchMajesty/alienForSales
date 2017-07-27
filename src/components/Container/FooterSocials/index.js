import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {indigo600, lightBlue300} from 'material-ui/styles/colors'

const FooterSocials = (props) => {
 
    return (
        <div className="post-share-buttons goog-inline-block" style={{marginLeft: '4em'}}>
            Share on: 
            <IconButton iconClassName="fa fa-facebook fa-lg" tooltip="Facebook" iconStyle={{color: indigo600}} />
            <IconButton iconClassName="fa fa-twitter fa-lg" tooltip="Twitter" iconStyle={{color: lightBlue300}} />
    </div>
    )
}


export default FooterSocials