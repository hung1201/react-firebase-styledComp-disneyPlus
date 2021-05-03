import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies:[],
    movie:{}
}
const movieSlice =  createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies : (state,action) => {
            state.movies = action.payload;
        },
    }
})
export const {setMovies,getMovie} = movieSlice.actions

export const selectMovies = state => state.movie.movies

export default movieSlice.reducer