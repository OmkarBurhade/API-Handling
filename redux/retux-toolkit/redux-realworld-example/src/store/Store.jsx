import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/UserReducer'
import ProductReducer from './reducers/ProductReducer'

export const store = configureStore({
    reducer: {
        userSlice: userSlice,
        ProductReducer: ProductReducer,

    },
})