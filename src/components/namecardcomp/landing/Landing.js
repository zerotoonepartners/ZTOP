import React from 'react';
import './Landing.scss';
import bell from '../../../static/images/bell.png';
import logo from '../../../static/images/ZeroToOnePartners.png';
import landing from '../../../static/images/landingImg.jpeg';

function Landing() {
  return (
    <div className="landingWrapper">
      <div className="patternBox"></div>
      <div className="bellImg">
        <img src={bell} alt="bell" />
      </div>
      <div className="cardContentWrapper">
        <div className="cardDescWrapper">
          <div className="titleLogo">
            <span>
              ZeroToOne<span className="strong">P</span>artners
            </span>
          </div>
          <div className="titleDesc">
            <span className="descBox">
              <span>투자컨설팅 / 엑셀레이터</span>
            </span>
          </div>
          <div className="keywordWrapper">
            <div className="keywordItem">
              <span className="descBox">
                <span>COMPANY BUILDER</span>
              </span>
            </div>
            <div className="keywordItem">
              <span className="descBox">
                <span>CONSULTANT</span>
              </span>
            </div>
            <div className="keywordItem">
              <span className="descBox">
                <span>FUND RASING</span>
              </span>
            </div>
          </div>
        </div>
        <div className="cardLandingImgWrapper">
          <div className="imgCardWrapper">
            <img src={landing} alt="landingImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
