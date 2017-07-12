import React, { Component } from 'react'
import { Link } from 'react-router'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import CardContainer from '../components/CardContainer'
import PageLoader from '../components/PageLoader'
import TextInput from '../components/Form/TextInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'
import WYSIWYG from '../components/WYSIWYG'
import { displayPanelErrors } from '~/services/Helper'


class AddBlog extends Component {
    
    constructor(props){
        super(props)
        
        this.state = this.getInitialState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    getInitialState() {
        return {
            title: '',
            article: '<p>Enter your article here.</p>',
            error: []
        }
    }
    
    handleInputChange(e) {
        const {value, name} = e.target
        
        this.setState({[name]: value, error: []})
    }
    
    handleSubmit(e) {
        const {title, article} = this.state
        let error = []
        
        if(title.length < 3)
            error.push('Title must be at least 3 characters.')
        
        if(title.length > 120)
            error.push('Title must be less than 120 characters.')
        
        if(article.length < 50)
            error.push('Article content must be at least 50 characters.')
        
        if(error.length > 0) {
            this.setState({error})
        }else {
            const formData = { ...this.state}
            
            // API CALL
            console.log('form is good for submit!')
            this.setState(this.getInitialState())
        }
    }
    
    render() {
        const {title, article, complete, error} = this.state
        return ( 
                <section className="content">
                    <CardContainer title="Add new article" size="col-lg-12">
                            <form onSubmit={this.handleSubmit}>
                            <div className="row clearfix">
                                <TextInput
                                    placeholder="Title"
                                    size="col-md-6"
                                    icon="text_fields"
                                    name="title"
                                    value={title}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        
                            <div className="row">
                                <WYSIWYG
                                    name="article"
                                    content={article}
                                    onChange={(e) => this.setState({article: e.target.getContent()})}
                                />
                            </div><br/>
                        
                        <div className="row">
                            <div className="text-center">
                                <Button type="submit" className="btn-success btn-lg" title="Add" icon="add_box" />
                            </div>
                        </div>
            
                            {error.length > 0 &&
                                <div className="row"><br/>
                                    <div className="alert alert-danger"><ul>
                                        {displayPanelErrors(error)}
                                    </ul></div>
                                </div>}
                        </form>
                    </CardContainer>  
                </section>
        )
    }
}


export default AddBlog