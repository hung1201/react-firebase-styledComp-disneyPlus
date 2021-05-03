import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { selectMovies } from '../redux/movie/movieSlice'
import { Link } from 'react-router-dom'
const Movies = () => {
    const movies = useSelector(selectMovies)
    return (
        <Container>
            <h4>Recommended Movies</h4>
            <Content>
                {
                    movies && movies.map((movie)=> (
                        <Wrap key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                        <img src={movie.cardImg} alt={movie.id}/>
                        </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}
const Container = styled.div`

`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
    @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const Wrap = styled.div`
    border-radius:10px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px ;
    cursor:pointer;
    transition: all 0.2s ease;
    overflow:hidden;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80% ) 0px 40px 58px -16px, rgb( 0 0 0 / 72% ) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`
export default Movies
