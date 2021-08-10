import React from 'react';
import './topcircle.scss';
import arrowTop from '../../static/images/arrowTop.png';

function TopCircle() {
  return (
    <>
      <a href="#top">
        <div className="topButtonWrapper">
          <img class="topImg" src={arrowTop} alt="" />
          <div></div>
        </div>
      </a>
    </>
  );
}

export default TopCircle;
