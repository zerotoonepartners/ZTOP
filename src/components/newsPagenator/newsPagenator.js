import './newsPagenator.scss';

import {useContext} from 'react'
import Loading from "../loading/loading";
import {ZtopContext} from "../../context/ztop";

function NewsPagenator(){
    const {loading,pressRelease_} = useContext(ZtopContext);
    return(
        <>
        {
            loading&&
            <Loading/>
        }
        <div className="NewsPagenatorWrapper">
            <div className="NewsPagenatorBox">
                <div className="NewsPagenatorNo">
                    <span>1</span>
                </div>
                <div className="NewsPagenatorTitle">
                    <span>나는가수다나는가수다나는가수다나는가수다나는가수다나는가수다나는가수다나는가수다</span>
                </div>
                <div className="NewsPagenatorWriter">
                    <span>안경록</span>
                </div>
                <div className="NewsPagenatorStamp">
                    <span>2021-02-23</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsPagenator;