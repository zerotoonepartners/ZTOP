import React from 'react';
import './card.scss';

function Card({ data }) {
  console.log(data);
  return (
    <div className="cardWrapper">
      <div className="cardImgWrapper">
        <img src={data.picture_1} alt="" />
      </div>
      <div className="cardContentWrapper">
        <span>{data.title}</span>
      </div>
    </div>
  );
}

export default Card;
