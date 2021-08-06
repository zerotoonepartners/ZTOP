import React from 'react';
import './mainstory.scss';
import MiniboardOne from '../miniboardone/miniboardOne';
import MiniboardTwo from '../miniboardtwo/miniboardtwo';
function Mainstory() {
  return (
    <div className="mainStoryWrapper">
      <div className="ztopTitleWrapper">
        <span>ZTOP’s STORY</span>
      </div>
      <div className="ztopDescWrapper">
        <span>제로투원파트너스의 소식을 만나보세요</span>
      </div>
      <div className="boardWrapper">
        <MiniboardOne />
        <MiniboardTwo />
      </div>
    </div>
  );
}

export default Mainstory;
