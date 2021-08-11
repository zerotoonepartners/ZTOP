import React from 'react';
import './header.scss';
import ztopLogo from '../../../static/images/ztopLogo.png';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  return (
    <div className="headerWrapper">
      <div
        className="logoWrapper"
        onClick={() => {
          history.push('/');
        }}
      >
        <img src={ztopLogo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
