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
import TagInput from '../components/Form/TagInput'
import { displayErrors } from '~/services/Helper'
import { submitPostToBlog, saveToLog } from '~/services/api'


class AddBlog extends Component {
    
    constructor(props){
        super(props)
        
        this.state = this.getInitialState()
        
        this.onTagsChange = this.onTagsChange.bind(this)
        this.onTagsError = this.onTagsError.bind(this)
        this.clearMessages = this.clearMessages.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    getInitialState() {
        return {
            title: '',
            article: '<p>Enter your article here.</p>',
            tags: [],
            error: [],
            success: ''
        }
    }
    
    onTagsError(err) {
        this.setState({error: [err]})
    }
    
    onTagsChange(tags) {
        this.setState({tags})
    }
    
    handleInputChange(e) {
        const {value, name} = e.target
        
        this.setState({[name]: value})
        this.clearMessages()
    }
    
    handleSubmit(e) {
        e.preventDefault()
        
        const {title, article, tags} = this.state
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
            const formData = {
                title: title,
                article: article,
                tags: tags.join(',')
            }
            
            submitPostToBlog(formData)
            .then(response => {
                if(response.data === true) {
                    this.setState(this.getInitialState())
                    this.setState({success: 'Article was successfully posted.'})
                    saveToLog(`Article '${title}' was written`, this.props.user)
                }else if(response.data.error) {
                    this.setState({error: [response.data.error]})
                }else {
                    this.setState({error: ['Unknown error occured while creating blog article, please try again.']})
                }
            })
        }
    }
    
    clearMessages() {        
        if(this.state.error.length > 0 || this.state.success.length > 0)
            this.setState({error: [], success: ''})
    }
    
    render() {
        const {title, article, complete, error, success, tags} = this.state
        return ( 
                <section className="content">
                    <CardContainer title="Add new article" size="col-lg-12">
                            <form method="POST" onSubmit={this.handleSubmit}>
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
                                <WYSIWYG name="article" content={article}
                                    onChange={(e) => this.setState({article: e.target.getContent()})}
                                />
                            </div><br/>
                            <div className="row">
                                <div className="col-lg-6">
                                    <TagInput 
                                        tags={tags}
                                        reportError={this.onTagsError} 
                                        updateTags={this.onTagsChange}
                                        onChange={this.clearMessages}
                                    />
                                </div>
                            </div>    
                                
                        <br/>
                        <div className="row">
                            <div className="text-center">
                                <Button type="submit" className="btn-success btn-lg" title="Add" icon="add_box" />
                            </div>
                        </div>
            
                            {error.length > 0 &&
                                <div className="row"><br/>
                                    <div className="alert alert-danger"><ul>
                                        {displayErrors(error)}
                                    </ul></div>
                                </div>}
                                
                            {success &&
                                <div className="row"><br/>
                                    <div className="alert alert-success"><ul>
                                        {success}
                                    </ul></div>
                             </div>}
                        </form>
                    </CardContainer>  
                </section>
        )
    }
}


export default AddBlog