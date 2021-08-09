import './scss/media.scss';
import { useContext, useEffect, useState } from 'react';
import NewsPagenator from '../components/newsPagenator/newsPagenator';
import CardPagenator from '../components/cardPage/cardPagenator/cardpagenator';
import Header from '../components/header/newheader';
import { ZtopContext } from '../context/ztop';

function NewsView({ history, location, match }) {
  const [news, setNews] = useState(true);
  const [notice, setNotice] = useState(false);
  const { news_ } = useContext(ZtopContext);
  const [selectionNotice, setSelelctionNotice] = useState(-1);
  const clickAct = () => {
    if (news === true) {
      setNews(!news);
      setNotice(!notice);
    }
  };
  const clickNotice = () => {
    if (notice === true) {
      setNotice(!notice);
      setNews(!news);
    }
  };

  const { no } = match.params;

  return (
    <div>
      <Header />
      <div className="libraryImgWrapper">
        <div className="libraryCategoryContainer">
          <div
            className={`libraryCategoryBox ${news ? 'active' : 'inactive'}`}
            onClick={clickNotice}
          >
            <span>NEWS</span>
          </div>
          <div
            className={`libraryCategoryBox ${notice ? 'active' : 'inactive'}`}
            onClick={clickAct}
          >
            <span>기업소식</span>
          </div>
        </div>
      </div>
      <div className="libraryPageWrapper">
        {news_.data !== null ? (
          news_.data.map((post, idx) => {
            console.log(no == post.id);
            if (no == post.id) {
              return (
                <>
                  <div>{post.title}</div>
                  <div>{post.writer}</div>
                  <div>{post.created_At}</div>
                </>
              );
            }
          })
        ) : (
          <div>해당 게시글을 찾을 수 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default NewsView;
