import { createSlice } from '@reduxjs/toolkit';
import { signIn } from '../api/todoApi'

const initialState = {
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    user: ''
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signInStart(state) {
            state.loading = true
            state.error = null
            state.isAuthenticated = false
            state.user = null
        },
        signInSuccess(state, action) {
            const token = action.payload.token
            state.token = token
            state.loading = false
            state.error = null
            state.isAuthenticated = true
            state.user = action.payload.user
        },
        signInFailure(state, action) {
            state.loading = false
            state.error = action.payload
            state.isAuthenticated = false
        }
    }
})

export const { signInFailure, signInStart, signInSuccess } = user.actions

export default user.reducer

export const fetchSignIn = (username, password) => async (dispatch) => {
    try {
        dispatch(signInStart())
        const result = await signIn(username, password)
        if (result === 'Unauthorized') {
            dispatch(signInFailure('Unauthorized'))
        } else {
            dispatch(signInSuccess(result))
            // history.location = '/component'
        }
    } catch (error) {
        dispatch(signInFailure(error))
    }
}