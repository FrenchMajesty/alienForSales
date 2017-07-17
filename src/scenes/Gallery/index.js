import React, { Component } from 'react'
import { Link } from 'react-router'
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
        const {limits} = this.state
        
        loadGalleryFeed(limits[0],limits[1])
        .then(response => {
            this.setState({gallery: response.data})
        })
    }
    
    componentDidMount() {
        new WOW().init()
    }
    
    searchGallery(query) {
        
    }
    
    moveForward() {
        const {limits, size} = this.state
        const lim = [limits[0]-size, limits[1]-size]
        
        loadGalleryFeed(lim[0],lim[1])
        .then(response => {
            this.setState({
                limits: lim,
                gallery: response.data
            })
        })
    }
    
    moveBackward() {
        const {limits, size} = this.state
        const lim = [limits[0]+size, limits[1]+size]
        
        loadGalleryFeed(lim[0],lim[1])
        .then(response => {
            this.setState({
                limits: lim,
                gallery: response.data
            })
        })
    }
    
    renderGallery(gallery) {
        const {author} = this.props.route
        
        if(gallery.length > 0) {
            
            return(gallery.map((item,i) => {
                if(i < gallery.length-1) // last entry is count
                return (<GalleryItem key={i} data={item} animate="zoomInDown" author={author} />)
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
