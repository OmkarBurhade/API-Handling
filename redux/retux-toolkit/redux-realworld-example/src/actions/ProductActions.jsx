import axios from "axios";
import { getProducts } from "../store/reducers/ProductReducer";

export const asyncgetproducts = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch(getProducts(res.data))
    } catch (error) {
        console.log(error);

    }
}