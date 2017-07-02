import React from 'react'

const ColumnContainer = (props) => {

    const rightCol = () => {
        return (
            <div className="column-right-outer">
            <div className="column-right-inner">
                <aside><div className="sidebar section" id="sidebar-right-1">
                {props.children}
                </div></aside>
            </div>
            </div>
        )
    }

    const centerCol = () => {
        return (
            <div className="column-center-outer">
            <div className="column-center-inner">
                <div className="main section" id="main"><div className="widget Blog" id="Blog1" data-version="1">
                    {props.children}
                <div className="clear"></div>
                </div></div>
            </div>
            </div>
        )
    }

    switch(props.type) {
        case "right":
            return(<div>{rightCol(props)}</div>)
        case "center":
            return(<div>{centerCol(props)}</div>)
        default:
            return(<div>{centerCol(props)}</div>)
    }
}

export default ColumnContainer
