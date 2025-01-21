import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})