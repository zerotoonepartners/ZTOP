import React from 'react';
import './miniboardOne.scss';
import Loading from 'react-loading';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';

function MiniboardOne() {
  const { corporatenews_ } = useContext(ZtopContext);
  switch (corporatenews_.status) {
    case 'pending':
      return <Loading />;
    case 'idle':
      return <Loading />;
    case 'rejected':
      return <>Err</>;
    default:
      console.log(corporatenews_);
      return (
        <>
          <div className="miniboardWrapper">
            <div className="miniboardHeaderWrapper">
              <div className="boardName">
                <span>보도자료</span>
              </div>
              <div className="boradMore">
                <span>+</span>
              </div>
            </div>
            <div className="boardContentWrapper">
              <div className="boardContent border">
                <span>
                  {corporatenews_.data[0].title.length > 35
                    ? `${corporatenews_.data[0].title.substring(0, 35)}...`
                    : `${corporatenews_.data[0].title}`}
                </span>
              </div>
              <div className="boardContent">
                <span>
                  {corporatenews_.data[1].title.length > 35
                    ? `${corporatenews_.data[1].title.substring(0, 35)} ...`
                    : `${corporatenews_.data[1].title}`}
                </span>
              </div>
            </div>
          </div>
        </>
      );
  }
}

export default MiniboardOne;
