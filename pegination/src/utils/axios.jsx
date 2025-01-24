import axios from "axios";

// axios instance 
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
});

export default instance;