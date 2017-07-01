import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_EMAILS = 'FETCH_EMAILS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=4530909verdi999';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchEmails() {

    const emails = [
        {
            "name": "Bob Marley",
            "email": "bob@gmail.com",
            "date": "06/30/2017",
            "status": "client"
        },
        {
            "name": "Barrack Obama",
            "email": "obama@president.com",
            "date": "12/05/2012",
            "status": "known"
        }
    ];

    return {
        type: FETCH_EMAILS,
        payload: emails
    };
}
