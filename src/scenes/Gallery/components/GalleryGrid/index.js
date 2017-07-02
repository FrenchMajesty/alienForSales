import React, { Component } from 'react'

class GalleryGrid extends Component {
    
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default GalleryGrid