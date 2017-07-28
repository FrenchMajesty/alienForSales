import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {indigo600, lightBlue300} from 'material-ui/styles/colors'
import FacebookProvider, {Share} from 'react-facebook'

const FooterSocials = ({url}) => {
    
    const shareTwitter = () => {
        // use twitter web intent   
    }
    
    return (
        <div className="post-share-buttons goog-inline-block" style={{marginLeft: '4em'}}>
            Share on: 
            <FacebookProvider appId="1427529060645955">
                <Share href={url}>
                    <IconButton iconClassName="fa fa-facebook fa-lg" tooltip="Facebook" 
                                iconStyle={{color: indigo600}}
                    />
                </Share>
            </FacebookProvider>
            <IconButton iconClassName="fa fa-twitter fa-lg" tooltip="Twitter" iconStyle={{color: lightBlue300}}
                onTouchTap={shareTwitter}
            />
    </div>
    )
}


export default FooterSocials