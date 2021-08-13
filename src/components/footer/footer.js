import React from 'react';
import './footer.scss';
import instaIcon from '../../static/images/instaIcon.png';
import blogIcon from '../../static/images/blogIcon.png';
import newsIcon from '../../static/images/newsletterIcon.png';


function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerLogoWrapper">
        <span>ZeroToOne Partners</span>
      </div>

      <div className="footerContentWrapper">
        <span>
          (주)제로투원파트너스 <br /> 서울특별시 서초구 서초중앙로22길117 <br />
          대표 : 김경태 | 사업자등록번호 : 288-87-00902 <br /> TEL) 02-6228-5100
          | E-Mail) info@ztop.kr<br/>
          COPYRIGHTS © 2021, ZEROTOONEPARTNERS<br/>ALL rights reserved
        </span>
      </div>
      <div className="iconWrapper">
        <img src={blogIcon} className="blogIcon" onClick={() => window.open('https://blog.naver.com/sjscjr', '_blank')}></img>
        <img src={instaIcon} className="instaIcon" onClick={() => window.open('https://www.instagram.com/zerotoonepartners/', '_blank')}></img>
        <img src={newsIcon} className="newsIcon" onClick={() => window.open('https://page.stibee.com/subscriptions/82706', '_blank')}></img>
      </div>



    </div>
  );
}

export default Footer;
