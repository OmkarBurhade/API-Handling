import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data);

            return res.data // fullfilled data
        } catch (error) {
            return rejectWithValue(error.res.data); // reject with error
        }
    }
);


// slice for product state
const initialState = {
    items: [],
    loading: false,
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = false; // when the api call is pending
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false //when the api call is fullfilled
                console.log(action);

                state.items = action.payload // Store fetch data
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false // when the api call is rejected
                state.error = action.payload // Store the error message
            });
    },
});

export const { extraReducers, reducers } = productSlice.actions
export default productSlice.reducer;