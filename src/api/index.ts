import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8089/',
    timeout: 500,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});

instance.interceptors.request.use((config) => {
    return config;
});

instance.interceptors.response.use((response) => {
    return response;
});

export default instance;
