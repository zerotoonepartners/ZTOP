import React from 'react';
import './header.scss';
import ztopLogo from '../../../static/images/ztopLogo.png';
import { useHistory } from 'react-router-dom';

function Headerr() {
  const history = useHistory();
  return (
    <div className="hheaderWrapper">
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

export default Headerr;
