import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setIteam('userInfo', JSON.stringify(action.payload))
        },
        //will clear credentials
        logout: (state, action) => {
            state.userInfo = null
            localStorage.removeitem('userInfo')
        }
    }
})


export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer