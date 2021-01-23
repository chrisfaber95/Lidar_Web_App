import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'http://217.104.40.222:5000/',
    headers:{
        //"content-type": "multipart/form-data",
        //Authorization: 'Bearer 123456'
    }
})