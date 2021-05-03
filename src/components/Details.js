import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import db from '../firebase'
const Details = ({match,history}) => {
    const id = match.params.id
    const [movie, setMovie] = useState()
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=> {
            if(doc.exists){
                setMovie(doc.data())
            }
            else{
                history.push('/')
            }
        })
    },[history,id])
    return (
        <Container>
            {
                movie && <>
                    <Background>
                <img src={movie.backgroundImg} alt="img"/>
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt="img"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                <span />
            <span />
                </AddButton>
                <GroupWatchButton>
                <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
                </>
            }
            
        </Container>
    )
}
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc( 3.5vw + 5px);
    margin-top:70px;
    position: relative;
    overflow:hidden;
`
const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    opacity:0.8;
    img {
        width:100%;
        height: 100%;
        object-fit:cover;
        opacity:1;
        transition: all 0.1s ease;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width:30vw;
    min-height:170px;
    min-width:200px;
    margin: 30px 0;
    img {
        width:100%;
        height: 100%;
        object-fit:contain;
        opacity:1;
        transition: all 0.1s ease;
    }
`

const Controls = styled.div`
    display:flex;
    align-items:center;
`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:50px;
    background: rgb(249,249,249);
    border:none;
    padding: 0 24px;
    margin-right:20px;
    cursor:pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
    img {
    width: 32px;
    }
    &:hover {
    background: rgb(198, 198, 198);
     }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
        width: 25px;
        }
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
        }
        &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
        }
    }
`
const GroupWatchButton = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
        img {
        width: 100%;
        }
    }
`
const SubTitle = styled.div`
    color : rgb( 249,249,249);
    font-size: 14px;
    min-height:20px;
    margin-top:25px;
`
const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color : rgb( 249,249,249);
`
export default Details
