import './scss/mediaes.scss';
import { useContext, useState } from 'react';
// import NewsPage from '../components/newsPage/newsPage';
import CardPage from '../components/cardPage/cardPage';
import Header from '../components/header/newheader';
import { ZtopContext } from '../context/ztop';
import NewsRead from '../components/newsRead/newsRead';
function Media() {
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
  const { ztopNotice_ } = useContext(ZtopContext);
  return (
    <div>
      {/* <Header/> */}
      <div className="mediaImgWrapper">
        <div className="mediaCategoryContainer">
          <div
            className={`mediaCategoryBox ${news ? 'active' : 'inactive'}`}
            onClick={clickNotice}
          >
            <span>NEWS</span>
          </div>
          <div
            className={`mediaCategoryBox ${notice ? 'active' : 'inactive'}`}
            onClick={clickAct}
          >
            <span>기업소식</span>
          </div>
        </div>
      </div>
      <div className="mediaPageWrapper">
        <NewsRead />
      </div>
    </div>
  );
}

export default Media;
