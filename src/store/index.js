import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './userSlice'

export default configureStore({
    reducer: {
        user: loginReducer,
    }
})
