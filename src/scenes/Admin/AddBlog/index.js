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


class AddBlog extends Component {
    
    constructor(props){
        super(props)
        
        this.state = this.getInitialState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
        this.displayErrors = this.displayErrors.bind(this)
    }
    
    getInitialState() {
        return {
            title: '',
            article: '<p>Enter your article here.</p>',
            complete: false,
            error: []
        }
    }
    
    displayErrors() {
        const {error} = this.state
        return(error.map((err, i) => { return <li key={i}>{err}</li> }))
    }
    
    handleInputChange(e) {
        const {value, name} = e.target
        this.setState({[name]: value})
        
        if(this.state.title && this.state.article)
            this.setState({complete: true})
        else
            this.setState({complete: false})
    }
    
    handleSubmitForm(e) {
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
            console.log('form is good for submit!')
            this.setState(this.getInitialState())
        }
    }
    
    render() {
        const {title, article, complete, error} = this.state
        console.log(this.state)
        return ( 
                <section className="content">
                    <CardContainer title="Add new article" size="col-lg-12">
                        
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
                                <Button type="submit" className="btn-success btn-lg" title="Add" icon="add_box" 
                                    disabled={!complete} onClick={this.handleSubmitForm}
                                
                                />
                            </div>
                        </div>
            
                            {error.length > 0 &&
                                <div className="row"><br/>
                                    <div className="alert alert-danger"><ul>
                                        {this.displayErrors()}
                                    </ul></div>
                                </div>}
                        
                    </CardContainer>  
                </section>
        )
    }
}


export default AddBlog