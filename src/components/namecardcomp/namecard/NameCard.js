import React from 'react';
import './NameCard.scss';
import avatar1 from '../../../static/images/avatar1.png';
import logo from '../../../static/images/ztopLogo.png';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react/cjs/react.development';

function NameCard({ no }) {
  const { namecard_ } = useContext(ZtopContext);
  console.log(namecard_);
  return (
    <>
      {namecard_.data &&
        namecard_.data.map((item, index) => {
          if (no == item.id) {
            console.log(item);
            return (
              <div className="nameCardWrapper">
                <div className="nameCardWrap">
                  <div className="avatarWrapper">
                    <img src={item.picture} alt="" />
                  </div>
                  <div className="nameCardContentWrapper">
                    <div className="sloganWrapper">
                      <span>스타트업 투자 마케팅 기업</span>
                    </div>
                    <img src={logo} alt="" className="logo" />
                    <div className="cardInfoWrapper">
                      <div className="nameWrapper">
                        <span className="korName">{item.name}</span>
                        <span className="engName">{item.sub_name}</span>
                      </div>
                      <div className="rankWrapper">
                        <span>{item.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
}

export default NameCard;
