import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components/macro'
const ImgSlider = () => {
    let settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="image1"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="image2"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="image3"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="image4"/>
            </Wrap>
        </Carousel>
    )
}
const Carousel = styled(Slider)`
    margin-top:20px;

    .slick-list {
        overflow: visible;
    }
    li.slick-active button::before{
        color:white;
    }
    ul li button {
        &::before{
            font-size:10px;
            color:white;
        }
    }
    button {
        z-index:1;
    }
    
`
const Wrap = styled.div`
    cursor:pointer;
    img{
        width:100%;
        height:100%;
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px,
        rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition: all 0.2s ease;
        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`
export default ImgSlider
