import React from 'react';
import './newheader.scss';
import logo from '../../static/images/ztopheaderlogo.png';
import { useHistory } from 'react-router';

function Newheader() {
  let history = useHistory();
  return (
    <>
      <div className="newHeaderWrapper">
        <div className="headerLogoWrapper">
          <img src={logo} alt="logo" onClick={() => history.push('/')} />
        </div>
        <div className="headerLinkWrapper">
          <div className="linkItem" onClick={() => history.push('/about')}>
            <span>ABOUT</span>
          </div>
          <div className="linkItem" onClick={() => history.push('/media')}>
            <span>MEDIA</span>
          </div>
          <div className="linkItem" onClick={() => history.push('/contact')}>
            <span>CONTACT</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newheader;
