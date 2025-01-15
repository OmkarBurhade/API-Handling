import axios from 'axios';

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'

});

// get mothod 

export const getPost = ()=>{
    return api.get("/posts");
} 

// delete mothod
export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`);
} 
