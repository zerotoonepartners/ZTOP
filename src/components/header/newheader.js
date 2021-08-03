import React from "react";
import './newheader.scss'
import logo from '../../static/images/ztopheaderlogo.png'

function newheader() {
    return (
    <>
        <div className="newHeaderWrapper">
           <div className="headerLogoWrapper">
                <img src={logo} alt="logo" />
           </div>
           <div className="headerLinkWrapper">
               <div className="linkItem">
                   <span>ABOUT</span>
               </div>
               <div className="linkItem">
                   <span>MEDIA</span>
               </div>
               <div className="linkItem">
                   <span>CONTACT</span>
               </div>
           </div>
        </div>
    </>
    )
}

export default newheader;
