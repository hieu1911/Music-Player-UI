import axios from 'axios';

const httpRequest = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_URL,
    baseURL: process.env.REACT_APP_SERVER_URL_PRO,
});

export default httpRequest;
