import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    Product: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.Product = action.payload;
        }
    },
})


export default productSlice.reducer
export const { getProducts } = productSlice.actions;