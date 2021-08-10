import React, { useState, useEffect } from 'react';
import './ToolFooter.scss';
import car from '../../../static/images/car.png';
import home from '../../../static/images/home.png';
import share from '../../../static/images/share.png';
import phone from '../../../static/images/phone.png';
<<<<<<< HEAD
import { useEffect,useContext } from 'react';
import { ZtopContext } from '../../../context/ztop';
=======
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';
>>>>>>> 30a048d23373a45884570491ebecaccaa93a132a
import Kakaolink from './kakaolink';

function ToolFooter({ no }) {
  const { namecard_ } = useContext(ZtopContext);
  const [kp, setKp] = useState();
  useEffect(() => {
<<<<<<< HEAD
    try{
    window.Kakao.init('1b4391ecab97342f8952423eba09a979');
    }catch(e){}
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '타이틀',
        description: '내용!',
        imageUrl: '',
        link: {
          mobileWebUrl: '123',
          androidExecParams: 'test',
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: '123',
          },
        },
      ],
    });
    console.log(window.Kakao.Link);
  };
=======
    namecard_ &&
      namecard_.map((item, idx) => {
        if (no == item.id) {
          setKp(item.kakao_picture);
        }
      });
  }, []);
>>>>>>> 30a048d23373a45884570491ebecaccaa93a132a
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
          <div className="shareBtn">
            <img src={share} alt="" />
<<<<<<< HEAD
            <Kakaolink/>
            <span>공유하기</span>
            {/* <button onClick={shareKakao}>카카오톡 공유하기</button> */}
          </a>
        </div>
=======
            <Kakaolink kp={kp} />
            {/* <span>공유하기</span> */}
          </div>
        </a>
>>>>>>> 30a048d23373a45884570491ebecaccaa93a132a
      </div>
    </div>
  );
}

export default ToolFooter;
