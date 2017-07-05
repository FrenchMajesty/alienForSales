import React from 'react'

const TextInput = (props) => {
    
    const {name, size, icon, placeholder} = props
    return (
        <div className={size}>
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className="material-icons">{icon || ''}</i>
                    </span>
                    <div className="form-line">
                     <input name={name} type="text" className="form-control date" placeholder={placeholder} />
                   </div>
                </div>
        </div>
    )
}

export default TextInput