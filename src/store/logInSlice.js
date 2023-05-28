import { createSlice } from '@reduxjs/toolkit'

export const logInSlice = createSlice({
    name: 'logIn',
    initialState: {
        value: false
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setIsLoggedIn: state => {
            console.log('AVANT',  state.value)
            state.value = !state.value
            console.log('APRES',  state.value)
        },
    }
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn } = logInSlice.actions

export default logInSlice.reducer
