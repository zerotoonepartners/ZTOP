import React, { useState } from "react"; 
import './paging.scss'; import Pagination from "react-js-pagination"; 
const Paging = ({page,count,setPage}) => { 
    return ( 
    <Pagination 
    activePage={page} 
    itemsCountPerPage={10} 
    totalItemsCount={count} 
    pageRangeDisplayed={5} 
    prevPageText={"‹"} 
    nextPageText={"›"} 
    onChange={setPage} /> ); }; 
export default Paging;
