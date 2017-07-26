import React from 'react'
import {Link} from 'react-router'
import BasicButton from '~/components/Button/BasicButton'


const Pager = ({ moveBackward, moveForward, resetHome, current, max }) => {
    
    const newButton = "blog-pager-newer-link"
    const oldButton = "blog-pager-older-link"
    return (
        <div className="blog-pager" id="blog-pager">
            {current[0] > 0 &&
                <BasicButton id={newButton} title="Newer Posts" target="#" onClick={moveForward} />}
            {current[1] < max &&
                <BasicButton id={oldButton} title="Older Posts" onClick={moveBackward} />}
            <BasicButton onClick={resetHome} title="Home" />
        </div>
    )
}

export default Pager