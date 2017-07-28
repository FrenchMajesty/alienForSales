import React, {Component} from 'react'
import {Link} from 'react-router'
import {loadGalleryFeed} from '~/services/api'

class Footer extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {tags: undefined}
        
        this.fetchTags = this.fetchTags.bind(this)
        this.processTags = this.processTags.bind(this)
    }
    componentWillMount() {
        this.fetchTags()
    }
    
    componentWillReceiveProps() {
        this.fetchTags()
    }
    
    fetchTags() {
        loadGalleryFeed(0, 999)
        .then(response => {
            if(response.data.length > 0)
               this.processTags(response.data)
        })
    }
    
    processTags(posts) {
        let tags = []
        posts.forEach((item, i) => {
            if(i == posts.length-1) return
    
            item.tags.split(',').forEach(tag => {
                if(!tags.includes(tag)) tags.push(tag)
            })
        })
        if(tags.length > 0) this.setState({tags})
    }
    
    renderTags(tags) {
        return(tags.map((tag, i) => {
            return(<li key={i}><Link to={`/gallery#${tag.trim()}`} dir="ltr">{tag}</Link></li>)
        }))
    }
    
    render() {
        const {tags} = this.state
        return (
            <footer>
                <div className="footer-outer" style={{height: '11em'}}>
                <div className="fauxborder-left footer-fauxborder-left">
                <div className="fauxborder-right footer-fauxborder-right"></div>
                <div className="region-inner footer-inner">
                <div className="foot no-items section" id="footer-1"></div>
                    <table border="0" cellPadding="0" cellSpacing="0" className="section-columns columns-2"><tbody><tr>
                    <td className="columns-cell">
                    <div className="foot section" id="footer-2-2"><div className="widget Label" data-version="1" id="Label2">
                    <h2>Art labels</h2>
                        <div className="widget-content list-label-widget-content">
                        <ul>
                            {(tags && this.renderTags(tags)) ||
                            <p>There are no tags that have been used in any gallery posts yet.</p>}
                        </ul>
                        <div className="clear"></div>
                        </div>
                    </div></div>
                    </td>
                    </tr></tbody></table>

                <div className="foot section" id="footer-3" style={{marginTop: '3em'}}><div className="widget Attribution" data-version="1" id="Attribution1">
                    <div className="widget-content" style={{textAlign: "center"}}>
                        Copyright © {new Date().getFullYear()} All rights reserved.
                    </div>
                    <div className="clear"></div>
                </div></div>
                </div>
                </div>
                </div>
                <div className="mt-attr">
                    <div className="inner-container">
                        <p className="mt-attr-text">Website designed and built by <Link to="https://www.design-by-verdi.com" target="_blank" title="Website developed by Verdi Software Developement">Verdi Co.</Link></p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
