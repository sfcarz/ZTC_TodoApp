import { createSlice } from '@reduxjs/toolkit';
import { signIn } from '../api/todoApi'

const initialState = {
    token: null,
    loading: false,
    error: null
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signInStart(state) {
            state.loading = true
            state.error = null
        },
        signInSucces(state, action) {
            const token = action.payload.token
            state.token = token
            state.loading = false
            state.error = null
        },
        signInFailure(state, action) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { signInFailure, signInStart, signInSucces } = user.actions

export default user.reducer

export const fetchSignIn = (username, password) => async (dispatch) => {
    try {
        dispatch(signInStart())
        const token = await signIn(username, password)
        dispatch(signInSucces(token))
    } catch (error) {
        dispatch(signInFailure(error))
    }
}