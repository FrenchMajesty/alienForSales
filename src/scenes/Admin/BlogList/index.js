import React, { Component } from 'react'
import { Link } from 'react-router'
import Table from '../components/Table'
import CardContainer from '../components/CardContainer'
import TextInput from '../components/Form/TextInput'
import Button from '../components/Button'
import WYSIWYG from '../components/WYSIWYG'
import TagInput from '../components/Form/TagInput'
import { displayErrors } from '~/services/Helper' 
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { formatPreciseDate } from '~/services/Helper'
import { loadArticleFeed, updateBlog, deleteBlog, saveToLog } from '~/services/api'

class BlogList extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.loadArticles = this.loadArticles.bind(this)
        this.editArticle = this.editArticle.bind(this)
        this.deleteArticle = this.deleteArticle.bind(this)
        this.renderTable = this.renderTable.bind(this)
        this.onTagsChange = this.onTagsChange.bind(this)
        this.onTagsError = this.onTagsError.bind(this)
        this.clearMessages = this.clearMessages.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    }
    
    getInitialState() {
        return {
            articles: [],
            form: {id: null},
            error: [],
            success: ''
        }
    }
    
    componentWillMount() {
        this.loadArticles()
    }
    
    componentDidMount() {
        setTimeout(() => $('#blogs').DataTable(), 100)
    }
    
    componentDidUpdate() {
        setTimeout(() => $('#blogs').DataTable(), 100)
    }
    
    loadArticles() {
        loadArticleFeed(0, 999) // load all
        .then(response => this.setState({articles: response.data}))
    }
    
    tableDropdown() {
        return <MenuItem onTouchTap={this.loadArticles} primaryText="Refresh" />
    }
    
    editCardDropdown() {
        return <MenuItem onTouchTap={() => this.setState({form: {id: null}})} primaryText="Discard changes & close" />
    }
    
    editArticle(i) {
        let {articles, form} = this.state
        this.setState({form: {...form, ...articles[i]}})
    }
    
    deleteArticle(i) {
        if(!confirm('Are you sure you want to delete this article? This action cannot be reverted.')) return
       
        const {articles} = this.state
        
        deleteBlog(articles[i].id).then(response => {
            if(response.data === true) {
                this.setState(this.getInitialState())
                this.setState({articles: articles.filter((_, idx) => idx !== i)})
                saveToLog(`Article '${title}' was deleted`, this.props.user)
            }else if(response.data.error) {
                alert('Error: ' + response.data.error)
            }
        })
    }
    
    renderTable() {
        const {articles} = this.state
        
        return(articles.map((article, i) => {
            return (
                <tr key={i}>
                    <td>{article.title}</td>
                    <td>{formatPreciseDate(article.date_posted)}</td>
                    <td>{article.tags}</td>
                    <td>
                        <IconButton onTouchTap={() => { this.editArticle(i) }}>
                            <FontIcon className="material-icons">create</FontIcon>
                        </IconButton>
                        <IconButton onTouchTap={() => { this.deleteArticle(i) }}>
                            <FontIcon className="material-icons">delete_forever</FontIcon>
                        </IconButton>
                    </td>
                </tr>
            )   
        }))
    }
    
    onTagsError(err) {
        this.setState({error: [err]})
    }
    
    onTagsChange(newTags) {
        let {form} = this.state
        form.tags = newTags
        this.setState({form})
    }
    
    onInputChange(e) {
        const {name, value} = e.target
        let {form} = this.state
        
        if(e.target.id == 'react-tinymce-0')
            form[name] = e.target.getContent()
        else
            form[name] = value
            
        this.setState({form})
        this.clearMessages()
    }
    
    handleUpdateSubmit(e) {
        e.preventDefault()
        
        const {id, title, article, tags} = this.state.form
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
                id: id,
                title: title,
                article: article,
                tags: tags.join(',')
            }
            
            updateBlog(formData)
            .then(response => {
                if(response.data === true) {
                    this.setState(this.getInitialState())
                    this.setState({success: 'Article was successfully updated.'})
                    saveToLog(`Article '${title}' was updated`, this.props.user)
                }else if(response.data.error) {
                    this.setState({error: [response.data.error]})
                }else {
                    this.setState({error: ['Unknown error occured while updating blog article, please try again.']})
                }
            })
        }  
    }
    
    clearMessages() {        
        if(this.state.error.length > 0 || this.state.success.length > 0)
            this.setState({error: [], success: ''})
    }
    
    render() {
        const {articles, form, error} = this.state
        
        return (
             <section className="content">
                <div className="container-fluid">
                    
                    <Table id="blogs" title="Blogs" size="col-lg-12" tableStyle="table-striped"
                        dropdown={this.tableDropdown()}>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Tags</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.renderTable()}
                                </tbody>
                    </Table>
                    {form.id &&
                        <CardContainer title="Update article" size="col-lg-12" animation="fadeInUp"
                            dropdown={this.editCardDropdown()}>
                         <form onSubmit={this.handleUpdateSubmit}> 
                            <div className="row clearfix">
                                <TextInput
                                    placeholder="Title"
                                    size="col-md-6"
                                    icon="text_fields"
                                    name="title"
                                    value={form.title}
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="row">
                                <WYSIWYG content={form.article} onChange={this.onInputChange} />
                            </div><br/>
                            <div className="row">
                                <div className="col-lg-6">
                                    <TagInput 
                                        tags={form.tags}
                                        reportError={this.onTagsError} 
                                        updateTags={this.onTagsChange}
                                        onChange={this.clearMessages}
                                    />
                                </div>
                            </div> 
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
