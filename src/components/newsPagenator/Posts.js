import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';
import './newsPagenator.scss';
import { ZtopContext } from '../../context/ztop';
import { corporateNews } from '../../api/api';

function Posts({ posts }) {
  console.log(posts);
  const { news_, setSelectionNews_ } = useContext(ZtopContext);
  return (
    <>
      {posts.length === 0 ? (
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
      ) : (
        posts.map((post, idx) => (
          <Link to={`/newsview/${post.id}`} className="NewsPagenatorBox">
            <div className="NewsPagenatorNo">
              <span>{idx + 1}</span>
            </div>
            <div className="NewsPagenatorTitle">
              <span>{post.title}</span>
            </div>
            <div className="NewsPagenatorWriter">
              <span>{post.writer}</span>
            </div>
            <div className="NewsPagenatorStamp">
              <span>{post.time_stamp.slice(0, 10)}</span>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
export default Posts;
