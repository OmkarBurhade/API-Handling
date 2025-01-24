import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/UserSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
    }
})