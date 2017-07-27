import React, { Component } from 'react'
import { Link } from 'react-router'
import BlogEntry from './components/BlogEntry'
import PageWrapper from '~/components/Container/PageWrapper'
import SideBarWidget from '~/components/SideBarWidget'
import ColumnContainer from '~/components/Container/ColumnContainer'
import Pager from '~/components/Container/ColumnContainer/Pager'
import { loadFeed } from '~/services/api'

class Home extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.loadFeed = this.loadFeed.bind(this)
        this.resetToHome = this.resetToHome.bind(this)
        this.renderPosts = this.renderPosts.bind(this)
        this.processNewerPage = this.processNewerPage.bind(this)
        this.processOlderPage = this.processOlderPage.bind(this)
    }
    
    getInitialState() {
        return {
            posts: [],
            limits: [0, 5],
            size: 4
        }
    }
    
    componentWillMount() {
        this.loadFeed(this.state.limits)
    }
    
    componentDidMount() {
        new WOW().init()  
    }
    
    loadFeed(limits) {
        loadFeed(limits[0],limits[1])
        .then(posts => {
            this.setState({
                limits: limits,
                posts: posts.data
            })
            window.scroll(0,0)
        })
    }
    
    processNewerPage() {
        const {limits, size} = this.state
        
        this.loadFeed([limits[0]-size, limits[1]-size])
    }
    
    processOlderPage() {
        const {limits, size} = this.state
        this.loadFeed([limits[0]+size, limits[1]+size])
    }
    
    resetToHome() {
        const baseState = this.getInitialState()
        this.setState(baseState)
        this.loadFeed(baseState.limits)
    }
    
    renderPosts() {
        const {posts} = this.state
        const {author} = this.props.route

        return(posts.map((post, i) => { 
            if( i < posts.length-1) // last entry is count
            return (<BlogEntry key={i} data={post} author={author} />) 
        }))
    }
    
    render() {
        const {limits, posts} = this.state
        const {author} = this.props.route
        return (
            <PageWrapper>

            <div className="main-outer">
            <div className="fauxborder-left main-fauxborder-left">
            <div className="region-inner main-inner">
            <div className="columns fauxcolumns">
            <div className="columns-inner">

            <ColumnContainer type="center">
                <div className="blog-posts hfeed"  style={{padding: posts.length > 1 ? '0' : '10em 0'}}>
                    {this.renderPosts()}
                </div>
                    <Pager current={limits} max={posts[posts.length-1]}
                        moveForward={this.processNewerPage}
                        moveBackward={this.processOlderPage}
                        resetHome={this.resetToHome}
                    />
                    <div className="blog-feeds">
                        <div className="feed-links">
                            Click here to: <Link to="#" className="feed-link" target="_blank">Subscribe to my blog</Link>
                        </div>
                    </div>
                </ColumnContainer>

            <ColumnContainer type="right">
                    <SideBarWidget title="About me">
                        <Link to="/about">
                            <img alt="My Photo" className="profile-img" height="80" src="//1.bp.blogspot.com/-mUS184Gu0I4/TWe0BAeXs0I/AAAAAAAAAAg/_GJt0S5xClo/s80/IMG3386A.jpg" width="60" />
                        </Link>
                        <dl className="profile-datablock">
                            <dt className="profile-data">
                                <Link className="profile-name-link g-profile" href="#" rel="author" data-gapiscan="true" data-onload="true" data-gapiattached="true">
                                    {author}
                                </Link>
                            </dt>
                            <dd className="profile-textblock">A passionate programmer, web developer and designer. Ready to learn anything new..</dd>
                        </dl>
                        <Link to="/about" className="profile-link" rel="author" style={{textAlign: "center"}}>
                            View my complete profile
                        </Link>
                    </SideBarWidget>
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

export default Home
