import React, { Component } from 'react'

const MAX_TAG_LIMIT = 9
class TagInput extends Component {
    
    constructor(props){
        super(props)
        
        this.state = this.getInitialState()
        
        this.mapTagsToState = this.mapTagsToState.bind(this)
        this.displayTags = this.displayTags.bind(this)
        this.processTagInputField = this.processTagInputField.bind(this)
        this.removeTag = this.removeTag.bind(this)
        this.addToTag = this.addToTag.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    getInitialState(){
        return { tags: [], inputTag: ''}
    }
    
    componentWillMount() {
        this.mapTagsToState(this.props.tags)
    }
    
    componentWillReceiveProps(newProps) {
        if(this.props.tags != newProps.tags)
            this.mapTagsToState(newProps.tags)
    }
    
    mapTagsToState(tags) {
        if(Array.isArray(tags))
            this.setState({tags})
        else
            this.setState({tags: tags.split(',')})
    }
    
    displayTags() {
        const {tags} = this.state
        
        if(tags.length > 0) {
            return(tags.map((tag, i) => {
                return (<span key={i} className="tag label label-info">{tag}
                        <span data-role="remove" onTouchTap={() => { this.removeTag(i) }}></span>
                    </span>)
            }))
        }
    }
    
    removeTag(index) {
        this.props.updateTags(this.state.tags.filter((_, i) => i !== index))
    }
    
    addToTag(e) {
        const {value} = e.target
        const {reportError, updateTags} = this.props
        const {tags} = this.state
        
        this.setState({inputTag: ''})
        
        if(tags.length > MAX_TAG_LIMIT)
            reportError(`You cannot add more than ${MAX_TAG_LIMIT+1} tags.`)
        else if(value.length > 0)
            updateTags([ ...tags, value])
    }
    
    processTagInputField(e) {
        if(e.key == 'Enter') {
            this.addToTag(e)
            e.preventDefault()
        }
    }
    
    handleInputChange(e) {
        this.props.onChange()
        this.setState({inputTag: e.target.value})
    }
    
    render() {
        const {inputTag} = this.state
        return (
            <div className="form-group demo-tagsinput-area">
                <div className="form-line">
                    <div className="bootstrap-tagsinput">
                        {this.displayTags()}
                        <input type="text"
                            placeholder="Type your tag and hit enter." 
                            value={inputTag}
                            onChange={this.handleInputChange}
                            onKeyPress={this.processTagInputField}
                            onBlur={this.addToTag}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default TagInput