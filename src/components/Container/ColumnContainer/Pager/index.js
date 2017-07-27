import React from 'react'
import BasicButton from '~/components/Button/BasicButton'


const Pager = ({ moveBackward, moveForward, resetHome, current, max }) => {
    
    const newButton = "blog-pager-newer-link"
    const oldButton = "blog-pager-older-link"
    return (
        <div className="blog-pager" id="blog-pager">
            {current[0] > 0 &&
                <BasicButton className="secondary secondary-button" id={newButton} title="Newer Posts" onClick={moveForward} />}
            {current[1] < max &&
                <BasicButton className="secondary secondary-button" id={oldButton} title="Older Posts" onClick={moveBackward} />}
            <BasicButton className="secondary secondary-button" onClick={resetHome} title="Home" />
        </div>
    )
}

export default Pager