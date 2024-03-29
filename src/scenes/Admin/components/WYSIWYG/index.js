import React from 'react'
import TinyMCE from 'react-tinymce'

const WYSIWYG = ({name, content, onChange}) => {
    
    return (
        <TinyMCE
            name={name}
            theme="modern"
            content={content}
            config={{
                theme: "modern",
                height: 300,
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern imagetools'
                ],
                toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                toolbar2: 'print preview media | forecolor backcolor emoticons',
                image_advtab: true
            }}
            onChange={onChange}
        />
    )
}

export default WYSIWYG