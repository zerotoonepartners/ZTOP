import React from 'react';
import './NameCard.scss';
import avatar1 from '../../../static/images/avatar1.png';
import logo from '../../../static/images/ztopLogo.png';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';

function NameCard({ no }) {
  const { namecard_, setNamecardTarget } = useContext(ZtopContext);
  console.log(namecard_);
  return (
    <>
      {namecard_.data &&
        namecard_.data.map((item, index) => {
          if (no == item.id) {
            console.log(item);
            setNamecardTarget(item.kakao_picture);
            return (
              <div className="nameCardWrapper">
                <div className="nameCardWrap">
                  <div className="avatarWrapper">
                    <img src={item.picture} alt="" />
                  </div>
                  <div className="nameCardContentWrapper">
                    <div className="sloganWrapper">
                      <span>스타트업 투자 전문 기업</span>
                    </div>
                    <img src={logo} alt="" className="logo" />
                    <div className="cardInfoWrapper">
                        <div className="korName">
                          <span>{item.name}</span>
                        </div>
                        <div className="engName">
                          <span>{item.sub_name}</span>
                        </div>
                        <div className="rank">
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
