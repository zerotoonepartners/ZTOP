import React from 'react';
import './Introduce.scss';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react/cjs/react.development';

function Introduce({ no }) {
  const { namecard_ } = useContext(ZtopContext);
  console.log(namecard_);
  return (
    <>
      {namecard_.data &&
        namecard_.data.map((item, index) => {
          if (no == item.id) {
            return (
              <div className="introduceWrapper">
                <div className="introCardWrapper">
                  <div className="introName">
                    <span className="korName">{item.name}</span>
                    <span className="engName">{item.sub_name}</span>
                  </div>
                  <div className="introPosition">
                    <span className="positionName">
                      제로투원파트너스 | {item.status}
                    </span>
                  </div>
                  <div className="hashTagWrapper">
                    <span className="hashTag">{item.personalTag}</span>
                  </div>
                  <div className="introContent">
                    <span>{item.intro}</span>
                  </div>
                </div>
                <div className="introVideoWrapper">
                  <div className="videoBox">
                    <iframe
                      width="280"
                      height="220"
                      src="https://www.youtube.com/embed/6zBaQna9v4E"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="introFooter"></div>
              </div>
            );
          }
        })}
    </>
  );
}

export default Introduce;
