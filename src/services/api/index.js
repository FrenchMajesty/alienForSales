import request from 'superagent'
import axios from 'axios'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/verdi-co/upload'
const CLOUDINARY_KEY = 'v75nh578'

const BASE_URL = 'http://verdiks-macbook-air-2.local/alien'

export const PAYPAL_CLIENT_ID = 'ATtRNDGGhyFBQRKWeYiyfR1doCquncWOrtJKU2grTISENLK5wH6qsVbuLbEVHjZHyDdjX08HpLHMpNYv'

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

export function loadArticleFeed(limit, max) {
    return axios.get(`${BASE_URL}/public/fetch/articles/?limit=${limit}&max=${max}`)
}

export function loadGallery(id) {
    return axios.get(`${BASE_URL}/public/fetch/gallery/${id}`)
}

export function loadBlog(id) {
    return axios.get(`${BASE_URL}/public/fetch/articles/${id}`)
}

export function registerPurchase(formData) {
    return axios.post(`${BASE_URL}/public/purchase`, formData)
}

export function postLogin(formData, callback) {
    return axios.post(`${BASE_URL}/system/login`, formData)
}

export function postLogout() {
    return axios.get(`${BASE_URL}/system/logout`)
}

export function sendResetEmail(email) {
    return axios.post(`${BASE_URL}/system/post/reset/password`, {email})
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

export function updateGalleryItem(formData) {
    return axios.post(`${BASE_URL}/system/post/gallery/update`, formData)
}

export function updateBlog(formData) {
    return axios.post(`${BASE_URL}/system/post/blog/update`, formData)
}

export function deleteGalleryItem(id) {
    return axios.post(`${BASE_URL}/system/post/gallery/delete`, {id})
}

export function deleteBlog(id) {
    return axios.post(`${BASE_URL}/system/post/blog/delete`, {id})
}

export function getLogs() {
    return axios.get(`${BASE_URL}/system/logs`)
}


export function saveToLog(message, user) {
    axios.post(`${BASE_URL}/system/post/log`, {
        message: message,
        userid: user
    })
}