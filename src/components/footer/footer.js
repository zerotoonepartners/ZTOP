import React from 'react';
import './footer.scss';
import instaIcon from '../../static/images/newInstaIcon.png';
import blogIcon from '../../static/images/newBlogIcon.png';
import newsIcon from '../../static/images/newNewsletterIcon.png';


function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerLogoWrapper">
        <span>ZeroToOne<br/>Partners</span>
      </div>

      <div className="footerContentWrapper">
        <span>
          (주)제로투원파트너스 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 대표 : 김경태<br />
          서울특별시 서초구 서초중앙로22길117 4층 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;TEL) 02-6228-5100 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; E-Mail) info@ztop.kr  <br />
          사업자등록번호 : 288-87-00902 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 통신판매업신고번호: 제 2019-서울서초-3027 호<br/><br/>
          <span className="copyrights">COPYRIGHTS © 2021, ZEROTOONEPARTNERS ALL rights reserved</span>
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
