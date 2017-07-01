import React, { Component } from 'react';


class Services extends Component {

    staffList() {
        // Do computation here to generate list
        let list = <div></div>;
        const staff = [
            {name: 'Reggie' },
            {name: 'Stephen' },
            {name: 'John' }
        ]
        staff.forEach(staff => {
            list += <li>Hi</li>;
        });

        return (
            <div>{list}</div>
        );
    }
    render() {
        return(
            <div className="content staff">
            {this.staffList()}
            </div>
        );
    }
}



export default Services;
