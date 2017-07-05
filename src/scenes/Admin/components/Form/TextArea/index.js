import React from 'react'
import Textarea from 'react-textarea-autosize'

const TextArea = (props) => {
    
    const {size,rows,autoGrow, name} = props
    
    const getTextArea = () => {
        
        if(autoGrow){
            return (
            <Textarea name={name} rows={rows || 4} className="form-control no-resize" placeholder="Please type a description or short story about your piece..."></Textarea>)
            
        }else {
            return(<textarea name={name} rows={rows || 4} className="form-control no-resize" placeholder="Please type a description or short story about your piece..."></textarea>)
        }
    }
    return (
        <div className={size || 'col-md-12'}>
            <div className="form-group">
                <div className="form-line">
                {getTextArea()}
                </div>
            </div>
        </div>
    )
}


export default TextArea