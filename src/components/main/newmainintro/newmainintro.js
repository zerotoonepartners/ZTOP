import React from 'react';
//import Carousel from './carousel';
import styled, { css, keyframes } from 'styled-components';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './newmainintro.scss';
import program from "../../../static/images/program.png"
import investment from "../../../static/images/investment.png"
import consulting from "../../../static/images/consulting.png"

function NewMainIntro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="NewMainIntroWrapper">
        <div className="NewMainIntroTitleBox">
          <div className="NewMainIntroTitle">
            <span>ZeroToOnePartners' Services</span>
          </div>
        </div>
        <div className="NewMainIntroContentBox">
          <div className="NewMainIntroContent">
            <Slider {...settings}>
              <CarouselBox>
                <CarouselImgBox>
                    <CarouselImg src={investment}/>
                </CarouselImgBox>

                <CarouselTextBox>
                  <CarouselTextTitle>INVESTMENT</CarouselTextTitle>
                  <CarouselTextContent>
                    아이디어 단계에서 초기단계(Seed~Series A)의
                    <br />
                    기업을 대상으로 하여 직/간접 투자를 진행하고 있으며,
                    <br />
                    뛰어난 역량을 갖춘 팀이라면 시기에 관계없이 투자합니다.
                  </CarouselTextContent>
                </CarouselTextBox>
              </CarouselBox>
              <CarouselBox>
                <CarouselImgBox>12</CarouselImgBox>
                <CarouselTextBox>
                  <CarouselTextTitle>INVESTMENT</CarouselTextTitle>
                  <CarouselTextContent>
                    아이디어 단계에서 초기단계(Seed~Series A)의
                    <br />
                    기업을 대상으로 하여 직/간접 투자를 진행하고 있으며,
                    <br />
                    뛰어난 역량을 갖춘 팀이라면 시기에 관계없이 투자합니다.
                  </CarouselTextContent>
                </CarouselTextBox>
              </CarouselBox>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

const CarouselBox = styled.div`
  @media only screen and (min-width: 320px) {
    width: 100%;
    height: 25rem;
    flex-direction: row;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 25rem;
    display: flex;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    position: relative;
  }
`;

const CarouselImgBox = styled.div`
  @media only screen and (min-width: 320px) {
    width: 50%;
    height: 15rem;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 20rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 100%;
    position: absolute;
    display : flex;
    align-items : center;
    justify-content : center;
    left: 0;
  }
`;

const CarouselTextBox = styled.div`
  @media only screen and (min-width: 320px) {
    width: 50%;
    height: 15rem;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 20rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 100%;
    position: absolute;

    right: 0;
    display: flex;
    flex-direction: column;
  }
`;
const CarouselTextTitle = styled.text`
  @media only screen and (min-width: 320px) {
    width: 50%;
    height: 15rem;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 20rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.4rem;
    font-weight: 900;
  }
`;
const CarouselTextContent = styled.text`
  @media only screen and (min-width: 320px) {
    width: 50%;
    height: 15rem;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 20rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 50%;
    font-size: 1rem;
    font-weight: 200;
    line-height: 220%;
  }
`;

const CarouselImg = styled.img`
    @media only screen and (min-width: 320px) {
        width: 50%;
        height: 15rem;
    }
    @media only screen and (min-width: 768px) {
        width: 50%;
        height: 20rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 15rem;
        height : 15rem;
        
    }
`

export default NewMainIntro;
