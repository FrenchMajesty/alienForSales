import React, { Component } from 'react'
import { Link } from 'react-router'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import CardContainer from '../components/CardContainer'
import PageLoader from '../components/PageLoader'
import TextInput from '../components/Form/TextInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'
import { displayPanelErrors } from '~/services/Helper'


class AddGallery extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.onInputChange = this.onInputChange.bind(this)
        this.formIsValid = this.formIsValid.bind(this)
        this.displayTags = this.displayTags.bind(this)
        this.processTagInputField = this.processTagInputField.bind(this)
        this.addToTag = this.addToTag.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    getInitialState() {
        return {
            title: '',
            price: '',
            quantity: '',
            description: '',
            tags: [],
            inputTag: '',
            error: []
        }
    }
    
    
    displayTags() {
        const {tags} = this.state
        
        if(tags.length > 0) {
            return(tags.map((tag, i) => {
                return (<span key={i} className="tag label label-info">{tag}
                        <span data-role="remove" onClick={() => { this.removeTag(i) }}></span>
                    </span>)
            }))
        }
    }
    
    removeTag(index) {
        const {tags} = this.state
        this.setState({tags: tags.filter((_, i) => i !== index)})
    }
    
    addToTag(target) {
        const {value} = target
        const {tags, error} = this.state
        
        // If limit reached
        if(tags.length > 9)
            this.setState({error: ['You cannot add more than 10 tags.'], inputTag: ''})
        else if(value.length > 0)
            this.setState({ tags: [...tags, value], inputTag: ''})
    }
    
    processTagInputField(e) {
        if(e.key == 'Enter') {
            this.addToTag(e.target)
            e.preventDefault()
        }
    }
    
    onInputChange(e) {
        const {name, value} = e.target
        
        this.setState({[name]: value, error: []})
    }
    
    handleSubmit(e) {
        e.preventDefault()
        
        const {title, price, quantity, description} = this.state
        let error = []
        
        if(!title || !price || !quantity || !description)
            error.push('Please fill in all required fields.')
        
        if(title.length < 3)
            error.push('Title is too short. Must be at least 3 characters.')
        
        if(title.length > 120)
            error.push('Title is too long. Must be less than 120 characters.')
        
        if(isNaN(price) || Number(price) < 1)
            error.push('Price must be at least $1.00')
        
        if(isNaN(quantity) || Number(quantity) < 1)
            error.push('Quantity is incorrect. Must be greater than 1.')
        
        if(description.length < 10)
            error.push('Description is too short. Must be at least 10 characters.')
        
        if(error.length > 0)
            this.setState({error})
        else {
            const formData = { ...this.state}

            // API CALL
            console.log('API CALL: add to gallery')
            console.log(formData)
            this.setState(this.getInitialState())
        }
    }
    
    render() {
        console.log(this.state)
        const {inputTag, title, price, quantity, description, tags, image, error} = this.state
        return (
                <section className="content">
                    <CardContainer title="Upload an Item" size="col-lg-12" smallPrint="Must use dropzonejs.com">
                            <form action="/" id="frmFileUpload" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                                <section className="dropzone">
                                    <div className="dz-message">
                                        <div className="drag-icon-cph">
                                            <i className="material-icons">touch_app</i>
                                        </div>
                                        <h3>Drop files here or click to upload.</h3>
                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em>
                                    </div>
                                    <div className="fallback">
                                        <input name="file" type="file" multiple />
                                    </div>
                                </section>
                        <br/>
                            <div className="row clearfix">
                                <TextInput
                                    placeholder="Title"
                                    size="col-md-4"
                                    icon="text_fields"
                                    name="title"
                                    value={title}
                                    onChange={this.onInputChange}
                                    required={true}
                                />
                                <TextInput
                                    placeholder="Price"
                                    size="col-md-4"
                                    icon="attach_money"
                                    name="price"
                                    value={price}
                                    onChange={this.onInputChange}
                                    required={true}
                                />
                                <TextInput
                                    placeholder="Quantity in stock"
                                    size="col-md-4"
                                    icon="equalizer"
                                    name="quantity"
                                    value={quantity}
                                    onChange={this.onInputChange}
                                    required={true}
                                />
                            </div>
                            <div className="row">
                                <TextArea
                                    autoGrow={true}
                                    name="description"
                                    value={description}
                                    onChange={this.onInputChange}
                                    required={true}
                                />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                 <div className="form-group demo-tagsinput-area">
                                    <div className="form-line">
                                        
                                        <div className="bootstrap-tagsinput">
                                            {this.displayTags()}
                                            <input type="text"
                                                placeholder="Type your tag and hit enter." 
                                                value={inputTag}
                                                onChange={(e) => this.setState({inputTag: e.target.value})}
                                                onKeyPress={this.processTagInputField}
                                                onBlur={(e) => this.addToTag(e.target)}
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                        <div className="row">
                            <div className="text-center">
                                <Button type="submit" className="btn-success btn-lg" title="Add" icon="add_box" />
                            </div>
                        </div>
                        <div className="row"><br/>
                        {error.length > 0 &&
                        <div className="alert alert-danger">{displayPanelErrors(error)}</div>}
                        </div>
                        </form>
                    </CardContainer>  
                </section>
        )
    }
}


export default AddGallery