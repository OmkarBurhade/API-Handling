import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/Axios";

export const fetchdata = createAsyncThunk(
    'api/fetchdata',
    async () => {

        const res = await axiosInstance.get('/users')
        return res.data

    }
)

export const createApiSlice = createSlice({
    name: 'api',
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchdata.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchdata.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchdata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
})

export default createApiSlice.reducer;