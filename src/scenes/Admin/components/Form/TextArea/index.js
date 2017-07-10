import React from 'react'
import Textarea from 'react-textarea-autosize'

const TextArea = ({size, rows, autoGrow, name, onChange}) => {
    
    
    const getTextArea = () => {
        
        if(autoGrow){
            return (
            <Textarea name={name} minRows={rows || 4} className="form-control no-resize" placeholder="Please type a description or short story about your piece..." onChange={onChange || null}></Textarea>)
            
        }else {
            return(<textarea name={name} rows={rows || 4} className="form-control no-resize" placeholder="Please type a description or short story about your piece..." onChange={onChange || null}></textarea>)
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