import React from 'react'
import Textarea from 'react-textarea-autosize'

const TextArea = ({size, rows, autoGrow, name, value, required, onChange}) => {
    
    
    const getTextArea = () => {
        
        if(autoGrow){
            return (
            <Textarea name={name} minRows={rows || 4} className="form-control no-resize" onChange={onChange || null}
                placeholder="Please type a description or short story about your piece..." 
                required={required || null} value={value}></Textarea>)
            
        }else {
            return(
            <textarea name={name} rows={rows || 4} className="form-control no-resize" onChange={onChange || null}
                placeholder="Please type a description or short story about your piece..." 
                required={required || null} value={value}></textarea>)
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