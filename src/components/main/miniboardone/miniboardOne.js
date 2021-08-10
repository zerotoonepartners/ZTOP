import React from 'react';
import './miniboardOne.scss';
import Loading from 'react-loading';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';

function MiniboardOne() {
  const { ztopNotice_ } = useContext(ZtopContext);
  let history = useHistory();
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
                <span onClick={()=>{history.replace('/media/1')}}>+</span>
              </div>
            </div>
            <div className="boardContentWrapper">
              <Link className="boardContent border" to={`/noticeview/${ztopNotice_.data[0].id}`}>
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
              </Link>
              <Link className="boardContent" to={`/noticeview/${ztopNotice_.data[1].id}`}>
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
              </Link>
            </div>
          </div>
        </>
      );
  }
}

export default MiniboardOne;
