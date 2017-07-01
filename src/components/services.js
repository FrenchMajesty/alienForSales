import React, { Component } from 'react';


class Services extends Component {

    lineOfDots() {
        // Very crappy way to get the lines we need for our price list.
        // Figure out a way to use the dotted-line class
        return '.'.repeat(170) ;
    }


    render() {
        return(
            <div className="content price-list">
                <ul className="haircuts">
                    <li><span className="name">Regular Cut</span> <div className="dotted-line" /> <span className="price">20</span></li>
                    <li><span className="name">Patch Up</span> <div className="dotted-line" /> <span className="price">10</span></li>
                    <li><span className="name">Cut N Color</span> <div className="dotted-line" /> <span className="price">20</span></li>
                    <li><span className="name">Razor Shave</span> <div className="dotted-line" /> <span className="price">20</span></li>
                    <li><span className="name">Beard Trim</span> <div className="dotted-line" /> <span className="price">20</span></li>
                </ul>

            </div>
        );
    }
}



export default Services;
