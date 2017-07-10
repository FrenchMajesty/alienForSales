import React from 'react'

const TextInput = ({name, value, onChange, meta, size, icon, placeholder, error}) => {
    
    return (
        <div className={size}>
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className="material-icons">{icon || ''}</i>
                    </span>
                    <div className="form-line">
                     <input name={name} value={value} onChange={onChange} type="text" className="form-control date" placeholder={placeholder} />
                        {error &&
                        (<label id={name+"-error"} class="error" for={name}>{error}</label>)}
                   </div>
                </div>
        </div>
    )
}

export default TextInput