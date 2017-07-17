import request from 'superagent'
import axios from 'axios'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/verdi-co/upload'
const CLOUDINARY_KEY = 'v75nh578'

const BASE_URL = 'http://verdiks-macbook-air-2.local/alien'

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

export function loadFeed(limit, max) {
    return axios.get(`${BASE_URL}/public/fetch/feed/?limit=${limit}&max=${max}`)
}

export function loadGalleryFeed(limit, max) {
    return axios.get(`${BASE_URL}/public/fetch/gallery/?limit=${limit}&max=${max}`)
}

export function loadGallery(id) {
    return axios.get(`${BASE_URL}/public/fetch/gallery/${id}`)
}

export function loadBlog(id) {
    return axios.get(`${BASE_URL}/public/fetch/articles/${id}`)
}

export function postLogin(form) {
    return axios.post(`${BASE_URL}/system/login`, form)
}

export function verifyAdminAccess() {
    return axios.get(`${BASE_URL}/system/access`)
}

export function submitPostToGallery(formData) {
    return axios.post(`${BASE_URL}/system/post/gallery`, formData)
}

export function submitPostToBlog(formData) {
    return axios.post(`${BASE_URL}/system/post/blog`, formData)
}



export function saveToLog(message, user) {
    axios.post(`${BASE_URL}/system/post/log`, {
        message: message,
        userid: user
    })
}