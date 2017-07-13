import React, { Component } from 'react'
import { Link } from 'react-router'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import Table from '../components/Table'
import PageLoader from '../components/PageLoader'

class EditGallery extends Component {
    
    render() {
        
        const user = {
            email: "verdi.kap@gmail.com",
            name: "Verdi Kapuku"
        }
        
        return (
             <section className="content">
                <div className="container-fluid">
                    
                    <Table title="Gallery" size="col-lg-12" style="table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Cost</th>
                                        <th>Profit</th>
                                        <th>Fun</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link className="thumbnail table-thumbnail">
                                        <img src="http://placehold.it/500x300" className="img-responsive" />
                                    </Link></td>
                                        <td>Car</td>
                                        <td>200</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><Link className="thumbnail table-thumbnail">
                                        <img src="http://placehold.it/500x300" className="img-responsive" />
                                    </Link></td>
                                        <td>Bike</td>
                                        <td>240</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><Link className="thumbnail table-thumbnail">
                                        <img src="http://placehold.it/500x300" className="img-responsive" />
                                    </Link></td>
                                        <td>Plane</td>
                                        <td>540</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td><Link className="thumbnail table-thumbnail">
                                        <img src="http://placehold.it/500x300" className="img-responsive" />
                                    </Link></td>
                                        <td>Yacht</td>
                                        <td>200</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><Link className="thumbnail table-thumbnail">
                                        <img src="http://placehold.it/500x300" className="img-responsive" />
                                    </Link></td>
                                        <td>Segway</td>
                                        <td>240</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th><strong>TOTAL</strong></th>
                                        <th>1290</th>
                                        <th>1420</th>
                                        <th>5</th>
                                    </tr>
                                </tfoot>
                    </Table>
                </div>
            </section>
        )
    }
}


export default EditGallery
