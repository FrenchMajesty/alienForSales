import React from 'react'

const TextInput = ({name, size, icon, placeholder, onChange}) => {
    
    return (
        <div className={size}>
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className="material-icons">{icon || ''}</i>
                    </span>
                    <div className="form-line">
                     <input name={name} type="text" className="form-control date" placeholder={placeholder} onChange={onChange || null} />
                   </div>
                </div>
        </div>
    )
}

export default TextInput