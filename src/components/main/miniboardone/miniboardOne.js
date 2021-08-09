import React from 'react';
import './miniboardOne.scss';
import Loading from 'react-loading';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';

function MiniboardOne() {
  const { ztopNotice_ } = useContext(ZtopContext);
  switch (ztopNotice_.status) {
    case 'pending':
      return <Loading />;
    case 'idle':
      return <Loading />;
    case 'rejected':
      return <>Err</>;
    default:
      console.log(ztopNotice_.data);
      return (
        <>
          <div className="miniboardWrapperOne">
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
                <span className="borderTitleSpan">
                  {ztopNotice_.data[0].title.length > 35
                    ? `${ztopNotice_.data[0].title.substring(0, 35)}...`
                    : `${ztopNotice_.data[0].title}`}
                </span>
                <span className="borderTitleDesc">
                  {ztopNotice_.data[0].content_1.length > 70
                    ? `${ztopNotice_.data[0].content_1.substring(0, 70)}...`
                    : `${ztopNotice_.data[0].content_1}`}
                </span>
              </div>
              <div className="boardContent">
                <span className="borderTitleSpan">
                  {ztopNotice_.data[1].title.length > 35
                    ? `${ztopNotice_.data[1].title.substring(0, 35)} ...`
                    : `${ztopNotice_.data[1].title}`}
                </span>
                <span className="borderTitleDesc">
                  {ztopNotice_.data[1].content_1.length > 70
                    ? `${ztopNotice_.data[1].content_1.substring(0, 70)}...`
                    : `${ztopNotice_.data[1].content_1}`}
                </span>
              </div>
            </div>
          </div>
        </>
      );
  }
}

export default MiniboardOne;
