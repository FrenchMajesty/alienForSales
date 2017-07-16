import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'
import GalleryGrid from './components/GalleryGrid'
import GalleryItem from './components/GalleryItem'
import Pager from '~/components/Container/ColumnContainer/Pager'
import SearchBar from './components/SearchBar'
import { loadGalleryFeed } from '~/services/api'

class Gallery extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
    }
        
    getInitialState() {
        return {
            limits: [0,5],
            size: 5,
            gallery: []
        }
    }
    
    componentWillMount() {
        this.loadGalleryFeed(this.state.limits,feed => {
            this.setState({gallery: feed})
        })
    }
    
    componentDidMount() {
        new WOW().init()
    }
        
    loadGalleryFeed(limits, callback) {
        loadGalleryFeed(limits[0], limits[1], gallery => {
            this.setState({gallery})
        })   
    }
    
    searchGallery(query) {
        
    }
    
    moveForward() {
        const {limits, size} = this.state
        const lim = [limits[0]-size, limits[1]-size]
        
        this.loadGalleryFeed(lim, feed => {
            this.setState({
                limits: lim,
                gallery: feed
            })
        })
    }
    
    moveBackward() {
        const {limits, size} = this.state
        const lim = [limits[0]+size, limits[1]+size]
        
        this.loadGalleryFeed(lim, feed => {
            this.setState({
                limits: lim,
                gallery: feed
            })
        })
    }
    
    renderGallery(gallery) {
        const author = "Bob Marley"
        
        if(gallery.length > 0) {
            
            return(gallery.map((item,i) => {
                if(i < gallery.length-1) // last entry is count
                return (<GalleryItem key={i} data={item} animate="zoomInDown" author="Jesus Christ" />)
            }))
        }
    }
    
    render() {
        const {limits, gallery} = this.state
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
                            {this.renderGallery(gallery)}
                        </GalleryGrid>
                    </div>
                    <Pager current={limits} max={gallery[gallery.length-1]}
                        moveForward={this.loadNewerPosts}
                        moveBackward={this.loadOlderPosts} />
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
