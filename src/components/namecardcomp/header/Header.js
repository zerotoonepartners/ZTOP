import React from 'react';
import './header.scss';
import ztopLogo from '../../../static/images/ztopLogo.png';

function Header() {
  return (
    <div className="headerWrapper">
      <div className="logoWrapper">
        <img src={ztopLogo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
