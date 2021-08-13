import React from 'react';
import './footer.scss';

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
          | E-Mail) info@ztop.kr
        </span>
      </div>

      <div className="footerCopyWrapper">
        <span>COPYRIGHTS © 2021, ZEROTOONEPARTNERS ALL rights reserved</span>
      </div>

    </div>
  );
}

export default Footer;
