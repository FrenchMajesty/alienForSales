import React, { Component } from 'react'
import { Link } from 'react-router'
import Table from '../components/Table'
import CardContainer from '../components/CardContainer'
import TextInput from '../components/Form/TextInput'
import Button from '../components/Button'
import WYSIWYG from '../components/WYSIWYG'

class BlogList extends Component {
    
    render() {
        return (
             <section className="content">
                <div className="container-fluid">
                    
                    <Table title="Blogs" size="col-lg-12" tableStyle="table-striped">
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
                     <CardContainer title="Update article" size="col-lg-12">
                            <div className="row clearfix">
                                <TextInput
                                    placeholder="Title"
                                    size="col-md-6"
                                    icon="text_fields"
                                    name="title"
                                />
                            </div>
                            <div className="row">
                                <WYSIWYG content="<p>Enter your article here.</p>" />
                            </div><br/>
                        <div className="row">
                            <div className="text-center">
                                <Button className="btn-info btn-lg" title="Update" icon="autorenew" />
                            </div>
                        </div>
                    </CardContainer>  
                    
                </div>
            </section>
        )
    }
}


export default BlogList
