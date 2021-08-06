import './newsPagenator.scss';

import {useContext,useState,useCallback} from 'react'
import Loading from "../loading/loading";
import {ZtopContext} from "../../context/ztop";
import Posts from './Posts';
import Pagination from './pagination';
import Paging from './paging';

function NewsPagenator(){
    const {loading,pressRelease_,corporatenews_} = useContext(ZtopContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(10);
    //console.log(pressRelease_)
    const indexofLast = currentPage * postsPerPage;
    const indexofFirst = indexofLast - postsPerPage;

    function currentPosts(tmp){
        let currentPosts = 0;
        currentPosts = tmp.slice(indexofFirst,indexofLast);
        return currentPosts;
    }
    switch(corporatenews_.status){
        case 'pending':
            return <Loading/>
        case 'idle' :
            return <Loading/>
        case 'rejected' :
            return <>ERR</>
        default:
            // const posts=corporatenews_.data;
            // const dispatch = useDispatch();
            // const {count,page,items} = useSelector(
            //     ({posts})=>({
            //         count : posts.count,
            //         page: posts.page,
            //         items: posts.items,
            //     }),
            //     shallowEqual
            // );
            // useEffect(()=>{
            //     dispatch(eventActions.getEvents());
            // },[]);
            // const setPage = useCallback(
            //     (page)=>{
            //         dispatch(eventActions.getEvents(page));
            //     },[dispatch]
            // )
            return(
                <>
                <div className="NewsPagenatorWrapper">
                        <Posts posts={posts}/>
                    <div className="pageNumberWrapper">
                        {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/> */}
                        <Paging page={page} count={count} setPage={setPage}/>
                    </div>
                </div>
                </>
            )
    }
    
}

export default NewsPagenator;