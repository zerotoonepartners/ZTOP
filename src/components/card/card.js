import React from 'react';
import './card.scss';

function Card({ data }) {
  console.log(data);
  return (
    <div className="cardWrapper">
      <div className="cardImgWrapper">
        <img src={data.picture_1} alt="" />
      </div>
      <span>{data.id}</span>
    </div>
  );
}

export default Card;
