import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import PageWrapper from '~/components/Container/PageWrapper'

class NotFound extends Component {
    
    render() {
        return (
            <PageWrapper>
                <div className="wrap">
                    <div className="logo">
                        <p>OOPS! - Could not Find that page.</p>
                        <img src="http://res.cloudinary.com/verdi-co/image/upload/v1501197677/404_qjhcbq.png" />
                        <div className="sub">
                              <p><Link to="#" onTouchTap={browserHistory.goBack}>Go Back</Link></p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        )
    }
}


export default NotFound