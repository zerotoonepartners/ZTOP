import {useState,useContext,useEffect} from 'react'
import { ZtopContext } from '../../context/ztop'
import Loading from "../loading/loading";
import queryString from 'querystring';
import { news } from '../../api/api';

function NewsRead(){
    const {news_,selectionNews_,setSelectionNews_} = useContext(ZtopContext);

    switch(news_.status){
        case 'pending':
            return <div className="NewsPagenatorWrapper"><Loading/></div>
        case 'idle' :
            return <div className="NewsPagenatorWrapper"><Loading/></div>
        case 'rejected' :
            return <>ERR</>
        default:
            console.log(selectionNews_);
            return(
                <div className="newsReadWrapper">
                    {
                        news_.data.map((item,idx)=>{
                            if(item.id === selectionNews_){
                                return(
                                    <>
                                    <div>
                                    {item.title}
                                    </div>
                                    <div>
                                    {item.writer}
                                    </div>
                                    <div>
                                    {item.created_At}
                                    </div>
                                    </>
                                    )
                            }
                            
                        })
                    
                    
                }
                </div>
            )

    
    }
}

export default NewsRead;