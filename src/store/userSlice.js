import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        token: null,
        fullName: '',
        isUpdating: false
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setIsLoggedIn: state => {
            state.isLoggedIn =  !state.isLoggedIn
        },

        setIsUpdating: state => {
            state.isUpdating =  !state.isUpdating
        },

        setToken: (state, action )=> {
            state.token =  action.payload
        },

        setFullName: (state, action )=> {
            state.fullName =  action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setToken, setFullName, setIsUpdating } = userSlice.actions

export default userSlice.reducer
