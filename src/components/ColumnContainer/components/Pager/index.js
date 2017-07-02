import React from 'react'
import {Link} from 'react-router'


const Pager = (props) => {
    
    return (
        <div className="blog-pager" id="blog-pager">
            <span id="blog-pager-older-link">
                <Link to="#" className="blog-pager-older-link" id="Blog1_blog-pager-older-link" title="Older Posts">
                    Older Posts
                </Link>
            </span>
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default Pager