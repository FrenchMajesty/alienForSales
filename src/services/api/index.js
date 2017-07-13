import request from 'superagent'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/verdi-co/upload'
const CLOUDINARY_KEY = 'v75nh578'

export function uploadImage(file, callback){
    
    let upload = request.post(CLOUDINARY_URL)
                        .field('upload_preset', CLOUDINARY_KEY)
                        .field('file', file)
        
    upload.end((err, response) => {
        if(err) 
            callback(err)
        else if(response.body.secure_url == '')
            callback('Your image could not be uploaded, please try again.')
            else
                callback(null, response)
    })
}
