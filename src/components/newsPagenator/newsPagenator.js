import './newsPagenator.scss';

import {useContext,useState} from 'react'
import Loading from "../loading/loading";
import {ZtopContext} from "../../context/ztop";
import Posts from './Posts'

function NewsPagenator(){
    const {loading,pressRelease_} = useContext(ZtopContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPAge] = useState(10);
    //console.log(pressRelease_)
    return(
        <>
        <div className="NewsPagenatorWrapper">
            <Posts/>
        </div>
        </>
    )
}

export default NewsPagenator;