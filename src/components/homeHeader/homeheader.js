import React, { useContext, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import './homeheader.scss';
import logoE from '../../static/images/logo_white.png';
import ham from '../../static/images/hambur.png';
import arrow from '../../static/images/arrow.png';
import { useHistory } from 'react-router';

function Header() {
  let history = useHistory();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clickOpenArrow, setClickOpenArrow] = useState(false);
  const [clickCloseArrow, setClickCloseArrow] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <>
      <div className={scrollPosition < 100 ? 'header' : 'newHeader'}>
        <MenuBox
          clickCloseArrow={clickCloseArrow}
          clickOpenArrow={clickOpenArrow}
        >
          <div className="arrowWrapper">
            <div className="closeArrow">
              <img
                className="arrow"
                onClick={() => {
                  setClickCloseArrow(true);
                  setClickOpenArrow(false);
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className="menuContents">
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/');
                }}
              >
                <span>HOME</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/about');
                }}
              >
                <span>ABOUT</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/media');
                }}
              >
                <span>MEDIA</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/contact');
                }}
              >
                <span>CONTACT</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                    window.open('https://page.stibee.com/subscriptions/82706', '_blank');
                }}
              >
                <span>NEWS LETTER</span>
              </div>
            </div>
          </div>
        </MenuBox>
        <div className="logoWrapper">
          <button
            class="button_1"
            onClick={() => {
              history.push('/');
            }}
          >
            <img class="logo" src={logoE} alt="" />
          </button>
        </div>
        <div className="menuBlock">
          <div className="menuWrapper">
            <div
              className="menuItem"
              onClick={() => {
                history.push('/about');
              }}
            >
              <span>ABOUT</span>
            </div>
            <div
              className="menuItem"
              onClick={() => {
                history.push('/media');
              }}
            >
              <span>MEDIA</span>
            </div>
            <div
              className="menuItem"
              onClick={() => {
                history.push('/contact');
              }}
            >
              <span>CONTACT</span>
            </div>
            <div
              className="menuItem"
              onClick={() => {
                window.open('https://page.stibee.com/subscriptions/82706', '_blank')
              }}
            >
              <span>NEWS LETTER</span>
            </div>
            <div className="menuItem hamItem">
              <img
                class="ham"
                src={ham}
                alt=""
                onClick={() => {
                  setClickOpenArrow(true);
                  setClickCloseArrow(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const MenuBox = styled.div`
  position: fixed;
  flex: 1;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  transition: all 1s ease;
  background-color: rgba(0, 0, 0, 0.8);

  ${(props) =>
    props.clickOpenArrow &&
    css`
    @media only screen and (min-width: 320px){
      width : 50%
    }
      @media only screen and (min-width: 768px){
        width : 40%

      }
      height: 100vh;
    `}
`;

export default Header;
