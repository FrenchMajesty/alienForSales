import React, { Component } from 'react'
import { Link } from 'react-router'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import CardContainer from '../components/CardContainer'
import PageLoader from '../components/PageLoader'
import TextInput from '../components/Form/TextInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'
import WYSIWYG from './components/WYSIWYG'


class AddBlog extends Component {
    
    render() {
        
        return ( 
                <section className="content">
                    <CardContainer title="Add new article" size="col-lg-12">
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
                                <Button className="btn-success btn-lg" title="Add" icon="add_box" />
                            </div>
                        </div>
                    </CardContainer>  
                </section>
        )
    }
}


export default AddBlog