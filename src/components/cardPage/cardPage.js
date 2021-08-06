import {useState} from 'react';
import './cardPage.scss';

import CardPagenator from './cardPagenator/cardpagenator';
function CardPage(){

    return(
        <>
        <div className="cardPageWrapper">
            <div className="cardPageTitle">
               <span>기업행사</span>
            </div>
            <CardPagenator/>
            
        </div>
        </>
    )
}

export default CardPage;