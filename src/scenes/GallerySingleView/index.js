import React, { Component } from 'react'
import ItemCard from '~/components/ItemCard'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'
import ModalDialog from '~/components/ModalDialog'
import {loadGallery, registerPurchase, PAYPAL_CLIENT_ID} from '~/services/api'

class GallerySingleViw extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            data: {},
            modalContent: undefined
        }
        
        this.promptModal = this.promptModal.bind(this)
        this.activatePaypalButton = this.activatePaypalButton.bind(this)
        this.loadFromGallery = this.loadFromGallery.bind(this)
    }
    
    componentWillMount() {
        this.loadFromGallery()      
    }
    
    loadFromGallery() {
        const {params, history} = this.props
        
        loadGallery(params.id)
        .then(response => {
            if(response.data.error || !response.data.id) {
                history.pushState(null, '/404')
            }else {
                this.setState({data: response.data})
                if(response.data.quantity > 0) this.activatePaypalButton()
            }
        }) 
    }
    
    activatePaypalButton() {
        const {data: item} = this.state
        let total = item.price
        total = Number(total).toFixed(2).toLocaleString()
        const self = this
        
        paypal.Button.render({

            env: 'sandbox',
            
            client: {
                sandbox:    'ATnI1PCqUBdqf7LhscP9RVcuHCa5jUZGKIkuE31x-RNgcVD7ylCCbqH67_X7NpoLsUIox5pHmfiWsMLU',
                production: PAYPAL_CLIENT_ID
            },
            commit: true, // Show a 'Pay Now' button

            payment: function(data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: `${total}`, currency: 'USD' 
                                    /*, details: {
                                      "subtotal": "30.00",
                                      "tax": "0.07",
                                      "shipping": "16.00",
                                      "handling_fee": "1.00",
                                      "shipping_discount": "-1.00",
                                      "insurance": "0.01"
                                    }*/
                                },
                                description: `aliensforsales.com Art purchase - '${item.title}'`
                            }
                        ]
                    }
                })
            },

            onAuthorize: function(data, actions) {
                return actions.payment.execute().then(payment => {
                    
                    const formData = {
                        item: item.id,
                        amount: payment.transactions[0].amount.total,
                        transaction_id: payment.id
                    }
                    console.log(payment)
                    registerPurchase(formData)
                    .then(response => {
                        console.log(response.data)
                        self.promptModal(<p>Your purchase was successfully completed!</p>)
                    })
                })
            }
        }, '#buy-button')
    }
    
    promptModal(modalContent) {
        this.setState({modalContent})   
    }
    
    render() {
        const {data, modalContent} = this.state
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
                {modalContent && 
                 <ModalDialog show={true} onClose={() => {this.props.history.pushState('/')}}>
                {modalContent}
                </ModalDialog>}
                <meta property="og:type" content="product" />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.image} />
            </PageWrapper>
        )
    }
}

export default GallerySingleViw