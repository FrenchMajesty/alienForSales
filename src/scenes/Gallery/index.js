import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'
import GalleryGrid from './components/GalleryGrid'
import GalleryItem from './components/GalleryItem'
import Pager from '~/components/Container/ColumnContainer/Pager'
import SearchBar from './components/SearchBar'

class Gallery extends Component {
    
    componentDidMount() {
        new WOW().init()
    }
    
    searchGallery(query) {
        
    }
    
    renderGallery() {
        const author = "Bob Marley"
        const gal = {
            title: "Mona Lisa",
            price: 300.5,
            date: "05/23/2017",
            stock: 17
    
        }
        
        return (
            <div>
                {_.times(9, i => <GalleryItem data={gal} author={author} animation="zoomInDown" />)}
            </div>
        )
    }
    
    render() {

        return (
            <PageWrapper>
                <SearchBar placeholder="Search the gallery" onSubmit={this.searchGallery} />

                <div className="main-outer">
                <div className="fauxborder-left main-fauxborder-left">
                <div className="main-inner gallery-grid" style={{width: "90%"}}>
                <div className="columns" style={{padding: "0"}}>
                <div className="columns-inner">

                <ColumnContainer type="center">
                    <div className="blog-posts hfeed">
                        <GalleryGrid>
                            {this.renderGallery()}
                        </GalleryGrid>
                    </div>
                    <Pager />
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

export default Gallery
