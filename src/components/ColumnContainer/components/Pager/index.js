import React from 'react'
import {Link} from 'react-router'
import BasicButton from '~/components/Button/BasicButton'


const Pager = (props) => {
    
    const newButton = "blog-pager-newer-link"
    const oldButton = "blog-pager-older-link"
    return (
        <div className="blog-pager" id="blog-pager">
        <BasicButton id={newButton} className={newButton} title="Newer Posts" target="#" />
        <BasicButton id={oldButton} className={oldButton} title="Older Posts" target="#" />
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default Pager