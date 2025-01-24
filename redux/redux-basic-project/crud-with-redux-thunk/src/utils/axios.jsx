// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL:'http://localhost:3000/',
//     timeout: 5000,
// })

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // JSON server base URL
    timeout: 5000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
