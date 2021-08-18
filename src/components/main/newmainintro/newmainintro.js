import React from 'react';
//import Carousel from './carousel';
import styled, { css, keyframes } from 'styled-components';
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import "./newmainintro.scss";

function NewMainIntro(){
    const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

    return(
        <>
        <div className="NewMainIntroWrapper">
            <div className="NewMainIntroTitleBox">
                <div className="NewMainIntroTitle">
                    <span>START-UP ACCELERATOR</span>
                </div>
            </div>
            <div className="NewMainIntroContentBox">
                <div className="NewMainIntroContent">
                    <Slider {...settings}>
                        <CarouselBox>
                            <CarouselImgBox>
                                12
                            </CarouselImgBox>
                            <CarouselTextBox>
                                <CarouselTextTitle>
                                    INVESTMENT
                                </CarouselTextTitle>
                                <CarouselTextContent>
                                아이디어 단계에서 초기단계(Seed~Series A)의<br/>기업을 대상으로 하여 직/간접 투자를 진행하고  있으며,<br/>뛰어난 역량을 갖춘 팀이라면 시기에 관계없이 투자합니다.
                                </CarouselTextContent>
                            </CarouselTextBox>
                        </CarouselBox> 
                        <CarouselBox>
                            <CarouselImgBox>
                                12
                            </CarouselImgBox>
                            <CarouselTextBox>
                                <CarouselTextTitle>
                                    INVESTMENT
                                </CarouselTextTitle>
                                <CarouselTextContent>
                                아이디어 단계에서 초기단계(Seed~Series A)의<br/>기업을 대상으로 하여 직/간접 투자를 진행하고  있으며,<br/>뛰어난 역량을 갖춘 팀이라면 시기에 관계없이 투자합니다.
                                </CarouselTextContent>
                            </CarouselTextBox>
                        </CarouselBox>
                    </Slider>
                </div>
            </div>
        </div>
        </>
    )
}

const CarouselBox = styled.div`
    @media only screen and (min-width: 320px){
        width : 100%;
        height : 25rem;
        flex : 1;
        flex-direction : row;

    }
    @media only screen and (min-width: 768px){
        width : 100%;
        height : 25rem;
        flex : 1;
        flex-direction : row;
    
    }
    @media only screen and (min-width: 1024px){
        width : 100%;
        height : 25rem;
        flex : 1;
        flex-direction : row;
        border: 1px solid blue;

    }  
`
const CarouselTextBox = styled.div`
    @media only screen and (min-width: 320px){
        width : 50%;
        height : 15rem;
     
    }
    @media only screen and (min-width: 768px){
        width : 50%;
        height : 20rem;

    }
    @media only screen and (min-width: 1024px){
        width : 50%;
        height : 10rem;
        border : 1px solid red;
    } 
`
const CarouselTextTitle = styled.text`
    @media only screen and (min-width: 320px){
        width : 50%;
        height : 15rem;
  
    }
    @media only screen and (min-width: 768px){
        width : 50%;
        height : 20rem;

    }
    @media only screen and (min-width: 1024px){
        width : 50%;
        height : 25rem;
        display : flex;
        align-items : center;
        justify-content : center;
    }
`
const CarouselTextContent = styled.text`
    @media only screen and (min-width: 320px){
        width : 50%;
        height : 15rem;
  
    }
    @media only screen and (min-width: 768px){
        width : 50%;
        height : 20rem;
 
    }
    @media only screen and (min-width: 1024px){
        width : 50%;
        border: 1px solid orange;
        display : flex;
        align-items : center;
        justify-content : center;
    }
`
const CarouselImgBox = styled.div`
    @media only screen and (min-width: 320px){
        width : 50%;
        height : 15rem;
     
    }
    @media only screen and (min-width: 768px){
        width : 50%;
        height : 20rem;

    }
    @media only screen and (min-width: 1024px){
        width : 50%;
        height : 25rem;

        display : flex;
        flexDirection : row;


    } 
`


export default NewMainIntro