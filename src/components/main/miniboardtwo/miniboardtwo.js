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
                <span>블로그</span>
              </div>
              <div className="boradMore">
                <span>+</span>
              </div>
            </div>
            <div className="boardLinkWrapper">
              {blogLink_.data.slice(undefined, 7).map((item, index) => {
                return (
                  <div className="boardLinkItem">
                    <span>▶ {item.title}</span>
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
