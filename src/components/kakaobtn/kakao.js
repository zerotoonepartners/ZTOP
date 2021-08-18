import React from 'react';
import kakaoImg from '../../static/images/kakaoImg.png';
import './kakao.scss';

function KakaoBtn() {
  return (
    <div
      className="kakaoWrapper"
      onClick={() => window.open('http://pf.kakao.com/_mQQWs/chat', '_blank')}
    ></div>
  );
}

export default KakaoBtn;
