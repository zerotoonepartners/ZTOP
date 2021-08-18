import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
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
    autoplay : true,
    autoplaySpeed : 2500,
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
                <CarouselImgBox>
                    <CarouselImg src={consulting}/>
                </CarouselImgBox>
                <CarouselTextBox>
                  <CarouselTextTitle>CONSULTING</CarouselTextTitle>
                  <CarouselTextContent>
                  스타트업의 부족한 부분을 채워드릴 수 있도록<br/>원격+정기방문 방식의 상시 관리 체계를 통해<br/>전반적인  업무내용 자문 및 서포터를 진행하고 있습니다
                  </CarouselTextContent>
                </CarouselTextBox>
              </CarouselBox>
              <CarouselBox>
                <CarouselImgBox>
                    <CarouselImg src={program}/>
                </CarouselImgBox>
                <CarouselTextBox>
                  <CarouselTextTitle>PROGRAM</CarouselTextTitle>
                  <CarouselTextContent>
                  스타트업을 액셀러레이팅하기 위하여 IR컨퍼런스,<br/>스케일러레이팅 프로그램 등 다양한 프로그램을<br/>기획 및 진행하여 기업을 보육합니다..
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
    height: 10rem;
    flex-direction: row;
    position: relative;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 25rem;
    display: flex;
    position: relative;
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
    width: 35%;
    height: 100%;
    position: absolute;
    display : flex;
    align-items : center;
    justify-content : center;
    left: 0;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    position: absolute;
    display : flex;
    align-items : center;
    justify-content : center;
    left: 0;
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
    width: 65%;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content : center;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    position: absolute;

    right: 0;
    display: flex;
    flex-direction: column;
    justify-content : center;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 100%;
    position: absolute;

    right: 0;
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items :center
  }
`;
const CarouselTextTitle = styled.text`
  @media only screen and (min-width: 320px) {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.8rem;
    font-weight: 900;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.4rem;
    font-weight: 900;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.4rem;
    font-weight: 900;
  }
`;
const CarouselTextContent = styled.text`
  @media only screen and (min-width: 320px) {
    width: 100%;
    height: 70%;
    font-size: 0.5rem;
    font-weight: 200;
    line-height: 150%;
    display : flex;
    align-items : center;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 70%;
    font-size: 1rem;
    font-weight: 200;
    line-height: 220%;
    display : flex;
    align-items : flex-start;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 30%;
    font-size: 1rem;
    font-weight: 200;
    line-height: 220%;
  }
`;

const CarouselImg = styled.img`
    @media only screen and (min-width: 320px) {
        width: 4.5rem;
        height: 4.5rem;
    }
    @media only screen and (min-width: 768px) {
        width: 15rem;
        height: 15rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 15rem;
        height : 15rem;
        
    }
`

export default NewMainIntro;
