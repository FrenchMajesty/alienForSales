import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'
import GalleryGrid from './components/GalleryGrid'
import GalleryItem from './components/GalleryItem'
import Pager from '~/components/Container/ColumnContainer/Pager'
import SearchBar from './components/SearchBar'
import {loadGalleryFeed} from '~/services/api'

class Gallery extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        
        this.resetToHome = this.resetToHome.bind(this)
        this.moveForward = this.moveForward.bind(this)
        this.moveBackward = this.moveBackward.bind(this)
        this.loadGalleryFeed = this.loadGalleryFeed.bind(this)
        this.searchGallery = this.searchGallery.bind(this)
        this.searchViaHash = this.searchViaHash.bind(this)
    }
        
    getInitialState() {
        return {
            limits: [0,5],
            size: 5,
            gallery: [],
            fullGallery: [],
            error: 'No gallery item found.'
        }
    }
    
    componentWillMount() {
        this.loadGalleryFeed(this.state.limits)
    }
    
    componentDidMount() {
        new WOW().init()
    }
    
    componentWillReceiveProps() {
        this.loadGalleryFeed(this.state.limits)    
    }
    
    searchGallery(term) {
        const searchTerm = new RegExp(term.replace(/[^a-zA-Z 0-9]+/g,''), 'i')
        const {fullGallery} = this.state
        
        const gal = fullGallery.filter((item,i) => {
            if(i < fullGallery.length-1)
                return (item.title.search(searchTerm) != -1 || item.description.search(searchTerm) != -1 ||
                        item.tags.search(searchTerm) != -1)
        })
        if(gal.length == 0) 
            this.setState({error: `No gallery item found that match '${term}'.`})
        
        this.setState({gallery: [...gal, gal.length]})
    }
    
    searchViaHash() {
        const searchTerm = this.props.location.hash.match(/^#([\w-]+)$/)
        if(searchTerm) 
            this.searchGallery(searchTerm[1])
    }
    
    loadGalleryFeed(limits) {
        loadGalleryFeed(limits[0],limits[1])
        .then(response => {
            this.setState({
                limits: limits,
                gallery: response.data,
                fullGallery: response.data,
                error: undefined
            })
            
            if(this.props.location.hash) this.searchViaHash()
        })
    }
    
    moveForward() {
        const {limits, size} = this.state
        this.loadGalleryFeed([limits[0]-size, limits[1]-size])
    }
    
    moveBackward() {
        const {limits, size} = this.state
        this.loadGalleryFeed([limits[0]+size, limits[1]+size])
    }
    
    resetToHome() {
        const baseState = this.getInitialState()
        this.setState(baseState)
        this.loadGalleryFeed(baseState.limits)
        hashHistory.replace('')
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
        const {limits, gallery, error} = this.state
        return (
            <PageWrapper>
                <SearchBar placeholder="Search the gallery" onSearch={this.searchGallery} />

                <div className="main-outer">
                <div className="fauxborder-left main-fauxborder-left">
                <div className="main-inner gallery-grid" style={{width: "90%"}}>
                <div className="columns" style={{padding: gallery.length > 1 ? '0' : '7em 0'}}>
                <div className="columns-inner">

                <ColumnContainer type="center">
                    <div className="blog-posts hfeed">
                        <GalleryGrid>
                            {gallery.length > 1 && this.renderGallery(gallery) ||
                            <p>{error}</p>}
                        </GalleryGrid>
                    </div>
                    <Pager current={limits} max={gallery[gallery.length-1]}
                        moveForward={this.loadNewerPosts}
                        moveBackward={this.loadOlderPosts} 
                        resetHome={this.resetToHome}
                    />
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
