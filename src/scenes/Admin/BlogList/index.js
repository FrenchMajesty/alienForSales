import React, { Component } from 'react'
import { Link } from 'react-router'
import Table from '../components/Table'
import CardContainer from '../components/CardContainer'
import TextInput from '../components/Form/TextInput'
import Button from '../components/Button'
import WYSIWYG from '../components/WYSIWYG'
import { displayErrors } from '~/services/Helper' 
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'

class BlogList extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.onInputChange = this.onInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    getInitialState() {
        return {
            editingMode: false,
            update: {},
            error: []
        }
    }
    
    tableDropdown() {
        return (<section>
                    <MenuItem linkButton containerElement={<Link to="/admin/" />} primaryText="Refresh" />
                    <MenuItem primaryText="Do something" />
                </section>)
    }
    
    editCardDropdown() {
        return <MenuItem primaryText="Discard changes & close" />
    }
    
    onInputChange(e) {
        const {name, value} = e.target
        let update = this.state.update 
        
        if(e.target.getContent())
            update[name] = e.target.getContent()
        else
            update[name] = value
            
        this.setState({update})
    }
    
    handleSubmit(e) {
        e.preventDefault()
        
        // verify form    
    }
    
    render() {
        console.log(this.state)
        const {update, editingMode, error} = this.state
        return (
             <section className="content">
                <div className="container-fluid">
                    
                    <Table title="Blogs" size="col-lg-12" tableStyle="table-striped"
                        dropdown={this.tableDropdown()}>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Controls</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Car</td>
                                        <td>200</td>
                                        <td>0</td>
                                        <td><IconButton onClick={(e) => this.setState({editingMode: true})}>
                                            <FontIcon className="material-icons">create</FontIcon>
                                        </IconButton></td>
                                    </tr>
                                    <tr>
                                        <td>Bike</td>
                                        <td>240</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Plane</td>
                                        <td>540</td>
                                        <td>3</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Yacht</td>
                                        <td>200</td>
                                        <td>200</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Segway</td>
                                        <td>240</td>
                                        <td>240</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                    </Table>
                    {editingMode &&
                        <CardContainer title="Update article" size="col-lg-12" animation="fadeInUp"
                            dropdown={this.editCardDropdown()}>
                         <form onSubmit={this.handleSubmit}> 
                            <div className="row clearfix">
                                <TextInput
                                    placeholder="Title"
                                    size="col-md-6"
                                    icon="text_fields"
                                    name="title"
                                    value={update.title}
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="row">
                                <WYSIWYG content={update.article} onChange={this.onInputChange} />
                            </div><br/>
                            <div className="row">
                                <div className="text-center">
                                    <Button type="submit" className="btn-info btn-lg" title="Update" icon="autorenew" />
                                </div>
                            </div>
                         </form>
                         {error.length > 0 &&
                                <div className="row"><br/>
                                    <div className="alert alert-danger"><ul>
                                        {displayErrors(error)}
                                    </ul></div>
                                </div>}
                    </CardContainer>}  
                    
                </div>
            </section>
        )
    }
}


export default BlogList
