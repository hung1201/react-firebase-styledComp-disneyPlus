import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../redux/movie/movieSlice'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        db.collection("movies").onSnapshot((snap)=> {
            let tempMovies = snap.docs.map((doc,idx)=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            dispatch(setMovies(tempMovies))
        })
    },[dispatch])
    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}
const Container = styled.div`
    margin-top:70px;
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x:hidden;
    &::before{
        content:"";
        background-image: url("/images/home-background.png");
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        background-attachment:fixed;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`
export default Home
