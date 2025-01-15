import axios from 'axios';

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'

});

// get method 

export const getPost = ()=>{
    return api.get("/posts");
} 

// delete method
export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`);
} 

// post method

export const postData = (post)=>{
    // console.log(post);
    return api.post('/posts', post)
}