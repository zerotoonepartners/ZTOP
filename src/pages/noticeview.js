import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/newheader';
import { ZtopContext } from '../context/ztop';
import './scss/noticeview.scss';

function NoticeView({ history, location, match }) {
  const { ztopNotice_ } = useContext(ZtopContext);

  const { no } = match.params;

  return (
    <div>
      <Header />
      <div className="noticeViewImgWrapper">
        <div className="noticeViewCategoryContainer">
          <div
            className="noticeViewCategoryBox inactive"
            onClick={() => {
              history.push('/media');
            }}
          >
            <span>NEWS</span>
          </div>
          <div
            className="noticeViewCategoryBox active"
            onClick={() => {
              history.push('/media');
            }}
          >
            <span>기업소식</span>
          </div>
        </div>
      </div>
      <div className="noticeViewPageWrapper">
        {ztopNotice_.data !== null ? (
          ztopNotice_.data.map((post, idx) => {
            if (no == post.id) {
              return (
                <>
                  <div className="noticeViewWrapper">
                    <div className="noticeViewTitlecontainer">
                      <span>기업소식</span>
                    </div>
                    <div className="noticeViewInfoContainer">
                      <div className="noticeViewTitleBox">
                        <span>{post.title}</span>
                      </div>
                      <div className="noticeViewInfoBox">
                        <div className="noticeViewWriterBox">
                          <span>작성자 : {post.writer}</span>
                        </div>
                        <div className="noticeViewCreateBox">
                          <span>작성일 : {post.created_at.slice(0, 10)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="noticeViewContentContainer">
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_1} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_2} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_3} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_1}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_4} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_5} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_6} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_2}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_7} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_8} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_9} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_3}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_10} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_11} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_12} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_4}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_13} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_14} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentImgBox">
                        <img src={post.picture_15} alt="" />
                        <br />
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_5}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_6}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_7}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_8}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_9}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_10}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_11}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_12}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_13}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_14}
                          <br />
                        </span>
                      </div>
                      <div className="noticeViewContentTextBox">
                        <span>
                          {post.content_15}
                          <br />
                        </span>
                      </div>
                    </div>
                    <div className="noticeViewPrevNextContainer">
                      <Link
                        className="noticePrev"
                        to={
                          post.id + 1 > ztopNotice_.data[0].id
                            ? '/media'
                            : `/noticeview/${post.id + 1}`
                        }
                      >
                        {Number(no) + 1 > ztopNotice_.data[0].id ? (
                          <span>
                            <q>이전글</q>이전 글이 없습니다.
                          </span>
                        ) : (
                          ztopNotice_.data.map((item, idx) => {
                            if (Number(no) + 1 == item.id) {
                              return (
                                <span>
                                  <q>이전글</q>
                                  {item.title}
                                </span>
                              );
                            }
                          })
                        )}
                      </Link>
                      <Link
                        className="noticeNext"
                        to={
                          post.id - 1 <
                          ztopNotice_.data[ztopNotice_.data.length - 1].id
                            ? '/media'
                            : `/noticeview/${post.id - 1}`
                        }
                      >
                        {Number(no) - 1 <
                        ztopNotice_.data[ztopNotice_.data.length - 1].id ? (
                          <span>
                            <q>다음글</q>다음 글이 없습니다.
                          </span>
                        ) : (
                          ztopNotice_.data.map((item, idx) => {
                            if (Number(no) - 1 == item.id) {
                              return (
                                <span>
                                  <q>다음글</q>
                                  {item.title}
                                </span>
                              );
                            }
                          })
                        )}
                      </Link>
                    </div>
                    <div
                      className="noticeNoticeBackBox"
                      onClick={() => {
                        history.push('/media');
                      }}
                    >
                      <span>목록</span>
                    </div>
                  </div>
                </>
              );
            }
          })
        ) : (
          <div>해당 게시글을 찾을 수 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default NoticeView;
