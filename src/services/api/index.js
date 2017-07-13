import axios from 'axios'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/verdi-co/upload'
const CLOUDINARY_KEY = 'v75nh578'

export function uploadImage(file, callback){
    console.log(file)
    axios.post(CLOUDINARY_URL, {
        upload_preset: CLOUDINARY_KEY,
        file: file
    })
    .then(response => callback(null, response))
    .catch(error => callback(error))
    
       /* let upload = request.post(URL)
                            .field('upload_preset', KEY)
                            .field('file', image)
        
        upload.end((err, response) => {
            if(err) {
                this.setState({error: [err]})
                return
            }

            if(response.body.secure_url == '')
                this.setState({error: ['Your image could not be uploaded, please try again.']})
            else
                this.setState({uploadedFileUrl: response.body.secure_url})
        })*/
}
