import {useContext,useState} from 'react'
import Loading from "../loading/loading";
import './newsPagenator.scss';
import {ZtopContext} from "../../context/ztop";
import { corporateNews } from '../../api/api';

const Posts = () => {
    const {loading,corporatenews_} = useContext(ZtopContext);
    console.log(corporatenews_);
    
    switch(corporatenews_.status){
        case 'pending':
            return <Loading/>
        case 'idle' :
            return <Loading/>
        case 'rejected' :
            return <>ERR</>
        default:
            console.log(corporatenews_);
            return (
                <>
                { corporatenews_.data.length===0? 
                <div className="NewsPagenatorBox">
                    <div className="NewsPagenatorNo">
                        <span>0</span>
                    </div>
                    <div className="NewsPagenatorTitle">
                        <span>게시된 글이 없습니다.</span>
                    </div>
                    <div className="NewsPagenatorWriter">
                        <span>관리자</span>
                    </div>
                    <div className="NewsPagenatorStamp">
                        <span>2000-00-00</span>
                    </div>
                </div>  
                
                :
                corporatenews_.data.map((post,idx)=>{
                    return(
                  <div key={post.id} className="NewsPagenatorBox">
                  <div className="NewsPagenatorNo">
                      <span>{post.id}</span>
                  </div>
                  <div className="NewsPagenatorTitle">
                      <span>{post.title}</span>
                  </div>
                  <div className="NewsPagenatorWriter">
                      <span>{post.writer}</span>
                  </div>
                  <div className="NewsPagenatorStamp">
                      <span>{post.createdAt}</span>
                  </div>
              </div>
                    )
                    })}
              </>
              );
    }
  
};
export default Posts;