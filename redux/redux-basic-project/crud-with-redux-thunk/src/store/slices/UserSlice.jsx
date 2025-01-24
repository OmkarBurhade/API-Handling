import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axiosInstance.get('/users'); // Use Axios instance
    return response.data;
});

// Add a new user
export const addUser = createAsyncThunk('users/addUser', async (user) => {
    const response = await axiosInstance.post('/users', user);
    return response.data;
});

// Update a user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, user }) => {
    const response = await axiosInstance.put(`/users/${id}`, user);
    return response.data;
});

// Delete a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axiosInstance.delete(`/users/${id}`);
    return id;
});

// Users slice
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex((user) => user.id === action.payload.id);
                state.users[index] = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user.id !== action.payload);
            });
    },
});

export default usersSlice.reducer;
