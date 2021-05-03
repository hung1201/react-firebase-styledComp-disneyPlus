import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import movieReducer from './movie/movieSlice'
export default configureStore({
    reducer:{
        user: userReducer,
        movie: movieReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})