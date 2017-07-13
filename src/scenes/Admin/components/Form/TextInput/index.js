import React from 'react'

const TextInput = ({name, type, value, onChange, meta, size, icon, required, autoFocus, placeholder, error}) => {
    
    const handleOnFocus = (e) => {
        e.target.parentElement.classList.add('focused')
    }
    
    const handleOnBlur = (e) => {
            var $this = $(e.target)
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
    }
    return (
        <div className={size || null}>
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className="material-icons">{icon || ''}</i>
                    </span>
                    <div className="form-line">
                     <input name={name} value={value} onChange={onChange} type={type || 'text'} className="form-control date" placeholder={placeholder} required={required || null} autoFocus={autoFocus || null}
                         onFocus={handleOnFocus} onBlur={handleOnBlur} />
                        {error &&
                        (<label id={name+"-error"} class="error" for={name}>{error}</label>)}
                   </div>
                </div>
        </div>
    )
}

export default TextInput