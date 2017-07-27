import React, { Component } from 'react'

class GalleryGrid extends Component {
    
    render() {
        return(
            <div style={{padding: '1em 0'}}>
                {this.props.children}
            </div>
        )
    }
}

export default GalleryGrid