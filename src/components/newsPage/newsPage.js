import {useState} from 'react';
import './newsPage.scss';

import NewsPagenator from "../newsPagenator/newsPagenator";

function NewsPage(){

    return(
        <>
        <div className="NewsWrapper">
            <div className="NewsTitle">
               <span>NEWS</span>
            </div>
            <div className="NewsBody">
                <div className="NewsBodyCategoryBox">
                    <div className="NewsBodyCategoryContentNo">
                        <span>NO</span>
                    </div>
                    <div className="NewsBodyCategoryContentTitle">
                        <span>제목</span>
                    </div>
                    <div className="NewsBodyCategoryContentWriter">
                        <span>작성자</span>                        
                    </div>
                    <div className="NewsBodyCategoryContentStamp">
                        <span>작성일</span>
                    </div>
                </div>
                <NewsPagenator/>
            </div>
        </div>
        </>
    )
}

export default NewsPage;