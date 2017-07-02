import React from 'react'
import {Link} from 'react-router'
import BasicButton from '~/components/Button/BasicButton'


const Pager = (props) => {
    
    return (
        <div className="blog-pager" id="blog-pager">
        <BasicButton title="Newer Posts" target="#" />
        <BasicButton title="Older Posts" target="#" />
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default Pager