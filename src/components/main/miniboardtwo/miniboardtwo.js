import React from 'react';
import './miniboardtwo.scss';
import Loading from 'react-loading';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';

function MiniboardTwo() {
  const { blogLink_, setBlogLink_ } = useContext(ZtopContext);
  switch (blogLink_.status) {
    case 'pending':
      return <Loading />;
    case 'idle':
      return <Loading />;
    case 'rejected':
      return <>Err</>;
    default:
      return (
        <>
          <div className="miniboardWrapperTwo">
            <div className="miniboardHeaderWrapper">
              <div className="boardName">
                <span >블로그</span>
              </div>
              <div className="boradMore">
                <span onClick={()=>{window.open("https://blog.naver.com/sjscjr",'_blank')}}>+</span>
              </div>
            </div>
            <div className="boardLinkWrapper">
              {blogLink_.data.slice(undefined, 12).map((item, index) => {
                return (
                  <div className="boardLinkItem">
                    <span onClick={()=>{window.open(`${item.link}`,'_blank');console.log(item.link)}}>{item.title.length>70? `▶ ${item.title.substring(0,70)} ...` : `▶ ${item.title}`}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
  }
}

export default MiniboardTwo;
