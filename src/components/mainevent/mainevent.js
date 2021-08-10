import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import './mainevent.scss';
import { ZtopContext } from '../../context/ztop';
import { corporateNews } from '../../api/api';
import { useContext } from 'react';
import Loading from 'react-loading';
import Card from '../card/card';
import right from '../../static/images/left.png';
import left from '../../static/images/right.png';

function Mainevent() {
  const { corporatenews_ } = useContext(ZtopContext);
  const [sliderToggle, setSliderToggle] = useState(0);

  switch (corporatenews_.status) {
    case 'pending':
      return <Loading />;
    case 'idle':
      return <Loading />;
    case 'rejected':
      return <>Err</>;
    default:
      console.log(corporatenews_);
      return (
        <>
          <div className="mainEventWrapper">
            <div className="eventContentWrapper">
              <div className="eventContentTitle">
                <span>ZTOP Events</span>
              </div>
              <div className="eventContentDesc">
                <span>
                  스타트업을 위한 IR 행사를 개최합니다. 제로투원파트너스의
                  행사입니다.
                </span>
              </div>
            </div>
            <div className="eventCardWrapper">
              {sliderToggle === 0 ? (
                <button className="cardBtn">
                  <img src={left} alt="left" />
                </button>
              ) : (
                <button
                  className="cardBtn"
                  onClick={() => {
                    setSliderToggle(sliderToggle - 1);
                  }}
                >
                  <img src={left} alt="left" />
                </button>
              )}
              <div className="eventSliderWrapper">
                <EventCardMapWrapper page={sliderToggle}>
                  {corporatenews_.data
                    .slice(undefined, 12)
                    .map((item, index) => {
                      return <Card key={index} data={item} />;
                    })}
                </EventCardMapWrapper>
              </div>
              <button
                className="cardBtn"
                onClick={() => {
                  setSliderToggle(sliderToggle + 1);
                }}
              >
                <img src={right} alt="right" />
              </button>
            </div>
          </div>
        </>
      );
  }
}

const EventCardMapWrapper = styled.div`
  //   border: 1px solid red;
  display: flex;
  width: auto;
  height: auto;
  transition: all 0.5s ease;
  @media only screen and (min-width: 320px) {
    transform: translateX(-${(props) => props.page * 15}rem);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    transform: translateX(-${(props) => props.page * 75}rem);
  }
`;

export default Mainevent;
