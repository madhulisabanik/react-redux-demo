import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
//const createSlice = require('@reduxjs/toolkit').createSlice
//const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
//const axios = require('axios')

const initialState = {
    loading: false,
    user: [],
    error: ''
}

// Promise generates - pending, fulfilled, rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    console.log(response)
                    return response.data
                })
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload,
            state.error = '';
            console.log(action.payload)
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.user = [],
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
//module.exports.fetchUsers = fetchUsers