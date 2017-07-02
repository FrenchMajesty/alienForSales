import React from 'react'
import { Link } from 'react-router'
import ItemCard from './components/ItemCard'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'

const GallerySingleViw = (props) => {
    
    new WOW().init()
     const data = {
            title: props.params.id,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non ex venenatis, egestas est vitae, lacinia libero. Sed pretium aliquet...",
            tags: ["story", "label"],
            date: "05/30/2015",
            stock: 10
        }

        const author = "Barrack Obama"
    
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

export default GallerySingleViw