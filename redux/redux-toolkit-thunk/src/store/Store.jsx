import { configureStore } from "@reduxjs/toolkit";
import prodctReducer from "./reducers/ProductSlice";
export const store = configureStore({
    reducer: {
        products: prodctReducer, // Register the Product Slice
    }
})