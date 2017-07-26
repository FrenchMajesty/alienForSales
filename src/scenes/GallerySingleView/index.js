import React, { Component } from 'react'
import ItemCard from '~/components/ItemCard'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'
import { loadGallery } from '~/services/api'

class GallerySingleViw extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            data: {}
        }
    }
    
    componentWillMount() {
        const {params, history} = this.props
        
        loadGallery(params.id)
        .then(response => {
            if(response.data.error || !response.data.id) {
                history.push(null, '/404')
            }else {
                this.setState({data: response.data})
                if(response.data.quantity > 0) this.activatePaypalButton()
            }
        })
    }
    
    activatePaypalButton() {
        paypal.Button.render({

            env: 'production', // Or 'sandbox',

            commit: true, // Show a 'Pay Now' button

            payment: function() {
                        // Set up the payment here
            },

            onAuthorize: function(data, actions) {
                        // Execute the payment here
            }
        }, '#buy-button')
    }
    
    render() {
        const {data} = this.state
        const {author} = this.props.route
        return (
            <PageWrapper>
                <div className="main-outer">
                <div className="fauxborder-left main-fauxborder-left">
                <div className="region-inner main-inner">
                <div className="columns fauxcolumns" style={{padding: "0 5em"}}>
                <div className="columns-inner">

                <ColumnContainer type="center">
                    <div className="blog-posts hfeed">
                        <ItemCard data={data} author={author} animation="bounceInLeft" />
                    </div>
                    </ColumnContainer>

                </div>
                <div style={{clear: "both"}} />
                </div>
                </div>
                </div>
                </div>
            </PageWrapper>
        )
    }
}

export default GallerySingleViw