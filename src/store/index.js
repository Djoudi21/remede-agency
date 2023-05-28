import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './logInSlice'

export default configureStore({
    reducer: {
        logIn: loginReducer
    }
})
