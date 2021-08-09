import './scss/media.scss';
import {useState} from 'react';
import NewsPagenator from '../components/newsPagenator/newsPagenator';
import CardPagenator from '../components/cardPage/cardPagenator/cardpagenator';
import Header from "../components/header/newheader";

function NoticeView() {
  const [news,setNews]=useState(true);
  const [notice,setNotice]=useState(false);
  
  const [selectionNotice,setSelelctionNotice]=useState(-1);
  const clickAct = () => {if(news===true){setNews(!news);setNotice(!notice)}};
  const clickNotice = () => {if(notice===true){setNotice(!notice);setNews(!news)}};
  return (
    <div>
      <Header/>
      <div className="libraryImgWrapper">
        <div className="libraryCategoryContainer">
          <div className={`libraryCategoryBox ${news?'active':'inactive'}`} onClick={clickNotice}>
            <span>NEWS</span>
          </div>
          <div className={`libraryCategoryBox ${notice?'active':'inactive'}`} onClick={clickAct}>
            <span>기업소식</span>
          </div>

        </div>
      </div>
      <div className="libraryPageWrapper">
        
        
      </div>
    </div>
  );
}

export default NoticeView;