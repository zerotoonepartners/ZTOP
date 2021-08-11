import './scss/media.scss';
import { useState, useEffect } from 'react';
import NewsPagenator from '../components/newsPagenator/newsPagenator';
import CardPagenator from '../components/cardPage/cardPagenator/cardpagenator';
import Header from '../components/header/newheader';
import Footer from '../components/footer/footer';
import { useLocation } from 'react-router';
import Kakao from '../components/kakao/kakao';

function Media({ location }) {
  const [news, setNews] = useState(true);
  const [notice, setNotice] = useState(false);

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
  useEffect(() => {
    console.log(location);
    if (location.pathname == '/media/2') {
      clickAct();
    }
    if (location.pathname == '/media/1') {
      clickNotice();
    }
  }, []);

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
            <span>기업행사</span>
          </div>
        </div>
      </div>
      <div className="libraryPageWrapper">
        {news ? <NewsPagenator /> : <CardPagenator />}
      </div>
      <Kakao />
      <Footer />
    </div>
  );
}

export default Media;
