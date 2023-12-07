import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null, 
    token: null, 
    isLoading: false, 
    status: null, 
}

export const authSlice = {
    name: 'auth',
    initialState,
    reducers: {},
}

export default authSlice.reducer