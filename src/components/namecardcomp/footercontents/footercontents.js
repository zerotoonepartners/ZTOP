import React from 'react';
import './footercontents.scss';
import Map from '../../../static/images/map.JPG';
import { useHistory } from 'react-router-dom';
import b1 from '../../../static/images/001.png';
import b2 from '../../../static/images/002.png';
import b3 from '../../../static/images/003.png';
import b4 from '../../../static/images/004.png';

function Footercontents() {
  const history = useHistory();
  return (
    <div className="footerContentsWrapper">
      <div className="mapWrapper">
        <img src={Map} alt="" />

        <div className="mapBtnWrapper">
          <a href="https://m.map.naver.com/search2/site.naver?query=%EC%A0%9C%EB%A1%9C%ED%88%AC%EC%9B%90%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8A%A4&sm=hty&style=v5&code=1586659131#/map">
            <span>네이버지도바로가기</span>
          </a>
        </div>
      </div>
      <div className="bannerWrapper">
        <a href="https://vo.la/ZYO1s">
          <img src={b1} alt="" className="bannerItem" />
        </a>
        <a href="https://page.stibee.com/subscriptions/82706">
          <img src={b3} alt="" className="bannerItem" />
        </a>
        <a href="https://vo.la/dvJQc">
          <img src={b2} alt="" className="bannerItem" />
        </a>
        <a href="https://cafe.naver.com/forcso">
          <img src={b4} alt="" className="bannerItem" />
        </a>
      </div>
    </div>
  );
}

export default Footercontents;
