import './newsPagenator.scss';

import {useContext,useState,useCallback} from 'react'
import Loading from "../loading/loading";
import {ZtopContext} from "../../context/ztop";
import Posts from './Posts';
import Pagination from './pagination';

function NewsPagenator(){
    const {news_,selectionNews_} = useContext(ZtopContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)
    switch(news_.status){
        case 'pending':
            return <div className="NewsPagenatorWrapper"><Loading/></div>
        case 'idle' :
            return <div className="NewsPagenatorWrapper"><Loading/></div>
        case 'rejected' :
            return <>ERR</>
        default:
            let indexOfLastPost = currentPage * postsPerPage;
            let indexOfFirstPost = indexOfLastPost - postsPerPage;
            let currentPosts = news_.data.slice(indexOfFirstPost,indexOfLastPost) 
            let howManyPages = Math.ceil(news_.data.length/postsPerPage)
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
                        <div className="NewsPagenatorWrapper">
                                <Posts posts={currentPosts}/>
                                    <div className="pageNumberWrapper">
                                <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>
                                    </div> 
                        </div>
            </div>
        </div>
                </>
            )
    }
    
}

export default NewsPagenator;