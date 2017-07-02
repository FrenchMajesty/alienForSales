import React from 'react'

const PageContainer = (props) => {
    return (
        <div className="content-outer">
        <div className="fauxborder-left content-fauxborder-left">
        <div className="content-inner">
            {props.children}
        </div>
        </div>
        </div>
    )
}

export default PageContainer
