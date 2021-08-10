import React from 'react';
import './ToolFooter.scss';
import car from '../../../static/images/car.png';
import home from '../../../static/images/home.png';
import share from '../../../static/images/share.png';
import phone from '../../../static/images/phone.png';
import { useEffect } from 'react';

function ToolFooter() {
  useEffect(() => {
    try {
      window.Kakao.init('d149effdaec276eadf4b088d938de0f2');
    } catch (e) {}
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao_share',
      objectType: 'feed',
      content: {
        title: '타이틀',
        description: '내용!',
        imageUrl: '',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '제로투원파트너스',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };
  return (
    <div className="toolFooterWrapper">
      <div className="footerContentWrapper">
        <div className="companyTitle">
          <span>(주) 제로투원파트너스</span>
        </div>
        <div className="companyInfo">
          <div className="infoItem">
            <span className="infoSpan">
              <span className="strong">A. </span> (06631) 서울시 서초구
              서초중앙로22길 117, 4층 (서초동, 그라비타스)
            </span>
          </div>
          <div className="infoItem">
            <span className="infoSpan">
              <span className="strong">T. </span>
              02-6228-5100
            </span>
          </div>
          <div className="infoItem">
            <span className="infoSpan">
              <span className="strong">M. </span>
              010-1234-5678
              <span className="strong strongMargin">E. </span>
              abc123@ztop.kr
            </span>
          </div>
        </div>
      </div>
      <div className="toolWrapper">
        <div className="toolItem">
          <a href="tel:02-6228-5100">
            <img src={phone} alt="" />
          </a>
          <span>전화상담</span>
        </div>

        <div className="toolItem">
          <a href="https://zerotoonepartners.com/">
            <img src={home} alt="" />
          </a>
          <span>홈페이지</span>
        </div>
        <div className="toolItem">
          <img src={car} alt="" />
          <span>찾아오시는길</span>
        </div>
        <a
          id="kakao_share"
          href="javascript:sendLink()"
          className="toolItem lastChild"
        >
          <div onClick={shareKakao} className="shareBtn">
            <img src={share} alt="" />
            <span>공유하기</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ToolFooter;
