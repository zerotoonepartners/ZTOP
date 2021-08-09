import './cardpagenator.scss';

import {useContext,useState} from 'react'
import Loading from "../../loading/loading";
import {ZtopContext} from "../../../context/ztop";

import CardPost from "./cardpost";
import CardPagination from "./cardpagination";

function CardPagenator(){
    const {ztopNotice_} = useContext(ZtopContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6)
    switch(ztopNotice_.status){
        case 'pending':
            return <div className="CardPagenatorWrapper"><Loading/></div>
        case 'idle' :
            return <div className="CardPagenatorWrapper"><Loading/></div>
        case 'rejected' :
            return <>ERR</>
        default:
            let indexOfLastPost = currentPage * postsPerPage;
            let indexOfFirstPost = indexOfLastPost - postsPerPage;
            let currentPosts = ztopNotice_.data.slice(indexOfFirstPost,indexOfLastPost) 
            let howManyPages = Math.ceil(ztopNotice_.data.length/postsPerPage)
            return(
                <>
                <div className="CardPagenatorWrapper">
                    <CardPost posts={currentPosts}/>
                    <div className="CardNumberWrapper">
                    <CardPagination pages={howManyPages} setCurrentPage={setCurrentPage}/>
                    </div>
                </div>
                </>
            )
    }
    
}

export default CardPagenator;