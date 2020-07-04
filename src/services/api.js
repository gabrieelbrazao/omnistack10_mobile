import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.API_URI}:3333`
});

export default api;