import './ToolFooter.scss';
import car from '../../../static/images/car.png';
import home from '../../../static/images/home.png';
import share from '../../../static/images/share.png';
import phone from '../../../static/images/phone.png';
import { ZtopContext } from '../../../context/ztop';
import { useContext, useEffect } from 'react';
import Kakaolink from './kakaolink';

function ToolFooter({ no }) {
  const { namecard_, setNamecardTarget, namecardTarget } =
    useContext(ZtopContext);

  useEffect(() => {
    namecard_.data &&
      namecard_.data.map((item, idx) => {
        if (no == item.id) {
          setNamecardTarget(item.kakao_picture);
          console.log(namecardTarget);
        }
      });
  }, []);
  return (
    <>
      {namecard_.data &&
        namecard_.data.map((item, index) => {
          if (no == item.id) {
            return (
              <div className="toolFooterWrapper">
                <div className="footerContentWrapper">
                  <div className="companyTitle">
                    <span>(주) 제로투원파트너스</span>
                  </div>
                  <div className="companyInfo">
                    <div className="infoItem">
                      <span className="infoSpan">
                        <span className="strong">A. </span> (06631) 서울시
                        서초구 서초중앙로22길 117, 4층 (서초동, 그라비타스)
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
                        {item.phone_num}
                        <span className="strong strongMargin">E. </span>
                        info@ztop.kr
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

                  <a
                    id="kakao_share"
                    href="javascript:sendLink()"
                    className="toolItem lastChild"
                  >
                    <div className="shareBtn">
                      <img src={share} alt="" />
                      <Kakaolink item={item} />
                      <span>공유하기</span>
                    </div>
                  </a>
                </div>
              </div>
            );
          }
        })}
    </>
  );
}

export default ToolFooter;
