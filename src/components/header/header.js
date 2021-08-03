import React, { useContext, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import './header.scss';
import logoE from '../../static/images/sccLogo.png';
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
                  history.push('/info');
                }}
              >
                <span>소개</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/edu');
                }}
              >
                <span>교육</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/detail');
                }}
              >
                <span>인증</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/barifurcation');
                }}
              >
                <span>신청하기</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  window.open('https://blog.naver.com/ztop021', '_blank');
                }}
              >
                <span>BLOG</span>
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
                history.push('/info');
              }}
            >
              <span>소개</span>
            </div>
            <div
              className="menuItem"
              onClick={() => {
                history.push('/edu');
              }}
            >
              <span>교육</span>
            </div>
            <div
              className="menuItem"
              onClick={() => {
                history.push('/detail');
              }}
            >
              <span>인증</span>
            </div>
            <div
              className="menuItem"
              onClick={() => {
                history.push('/barifurcation');
              }}
            >
              <span>신청하기</span>
            </div>
            <div className="menuItem">
              <span>
                <button
                  class="blogBtn"
                  onClick={() =>
                    window.open('https://blog.naver.com/ztop021', '_blank')
                  }
                >
                  블로그
                </button>
              </span>
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
      width: 30%;
      height: 100vh;
    `}
`;

export default Header;
