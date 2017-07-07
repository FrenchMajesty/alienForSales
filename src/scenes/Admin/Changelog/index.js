import React, { Component } from 'react'
import Table from '../components/Table'
import Button from '../components/Button'

class Changelog extends Component {
    
    render() {
        return (
             <section className="content">
                <div className="container-fluid">
                    
                    <Table title="Changelog" size="col-lg-12">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Controls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Car</td>
                                        <td>200</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Bike</td>
                                        <td>240</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Plane</td>
                                        <td>540</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Yacht</td>
                                        <td>200</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Segway</td>
                                        <td>240</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                    </Table>
                    
                </div>
            </section>
        )
    }
}


export default Changelog
