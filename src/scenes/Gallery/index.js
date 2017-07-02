import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import Navbar from '~/components/Navbar'
import PageContainer from '~/components/PageContainer'
import SideBarWidget from '~/components/SideBarWidget'
import ColumnContainer from '~/components/ColumnContainer'
import Footer from '~/components/Footer'
import GalleryGrid from '~/components/Gallery/GalleryGrid'
import GalleryItem from '~/components/Gallery/GalleryItem'

class Gallery extends Component {
    
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
            <GalleryItem data={gal} author={author} />
            <GalleryItem data={gal} author={author} />
            <GalleryItem data={gal} author={author} />
            <GalleryItem data={gal} author={author} />
            <GalleryItem data={gal} author={author} />
            </div>
        )
    }
    
    render() {

        return (
            <PageContainer>
                <Navbar />

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
                </ColumnContainer>
                
                
            </div>
            <div style={{clear: "both"}} />
            </div>
            </div>
            </div>
            </div>
            <Footer />
            </PageContainer>
        )
    }
}

export default Gallery
