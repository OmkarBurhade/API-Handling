import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

// Async thunk for API operations
export const fetchCounter = createAsyncThunk(
    'counter/fetchCounter',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('counter')
            console.log(res.data);
            return res.data // Return the counter data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const updateCounter = createAsyncThunk(
    'counter/updateCounter',
    async (newValue, { rejectWithValue }) => {
        try {
            const res = await axios.put('counter', { id: 1, value: newValue });
            return res.data; // Return the updated counter
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    value: 0,
    loading: false,
    error: null,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        multiply: (state) => {
            state.value *= 1
        },
        Divided: (state) => {
            state.value /= 1
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCounter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCounter.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload.value;
            })
            .addCase(fetchCounter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateCounter.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCounter.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload.value;
            })
            .addCase(updateCounter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    }
});

export const { increment, decrement, multiply, Divided } = counterSlice.actions;
export default counterSlice.reducer