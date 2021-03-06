import './scss/media.scss';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsPagenator from '../components/newsPagenator/newsPagenator';
import CardPagenator from '../components/cardPage/cardPagenator/cardpagenator';
import Header from '../components/header/newheader';
import Footer from '../components/footer/footer';
import { ZtopContext } from '../context/ztop';
import './scss/newsview.scss';
import Kakao from '../components/kakao/kakao';
import HeaderBlack from "../components/homeHeader/homeHeaderBlack";
import KakaoBtn from '../components/kakaobtn/kakao';

function NewsView({ history, location, match }) {
  const [news, setNews] = useState(true);
  const [notice, setNotice] = useState(false);
  const { news_ } = useContext(ZtopContext);

  const { no } = match.params;
  return (
    <div>
      <HeaderBlack />
      <div className="newsViewImgWrapper">
      <div className="newsViewCommonTitle">
          <span>MEDIA</span>
        </div>
        <div className="newsViewCategoryContainer">
          <div
            className="newsViewCategoryBox active"
            onClick={() => {
              history.push('/media/1');
            }}
          >
            <span>NEWS</span>
          </div>
          <div
            className="newsViewCategoryBox inactive"
            onClick={() => {
              history.push('/media/2');
            }}
          >
            <span>κΈ°μμμ</span>
          </div>
        </div>
      </div>
      <div className="newsViewPageWrapper">
        {news_.data !== null ? (
          news_.data.map((post, idx) => {
            if (no == post.id) {
              console.log(post);
              return (
                <>
                  <div className="newsViewWrapper">
                    <div className="newsViewTitlecontainer">
                      <span>NEWS</span>
                    </div>
                    <div className="newsViewInfoContainer">
                      <div className="newsViewTitleBox">
                        <span>{post.title}</span>
                      </div>
                      <div className="newsViewInfoBox">
                        <div className="newsViewWriterBox">
                          <span>μμ±μ : {post.writer}</span>
                        </div>
                        <div className="newsViewCreateBox">
                          <span>μμ±μΌ : {post.time_stamp.slice(0, 10)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="newsViewContentContainer">
                      <div
                        className={`newsViewContentImgBox ${
                          post.picture_1 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <img src={post.picture_1} alt="" />
                        <br />
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_1 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_1}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentImgBox ${
                          post.picture_2 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <img src={post.picture_2} />
                        <br />
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_2 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_2}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentImgBox ${
                          post.picture_3 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <img src={post.picture_3} />
                        <br />
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_3 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_3}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_4 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_4}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_5 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_5}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_6 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_6}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_7 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_7}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_8 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_8}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_9 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_9}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_10 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_10}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_11 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_11}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_12 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_12}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_13 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_13}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_14 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_14}
                          <br />
                        </span>
                      </div>
                      <div
                        className={`newsViewContentTextBox ${
                          post.content_15 !== null ? 'active' : 'inactive'
                        }`}
                      >
                        <span>
                          {post.content_15}
                          <br />
                        </span>
                      </div>
                    </div>
                    <div className="newsViewPrevNextContainer">
                      <Link
                        className="newsPrev"
                        to={
                          post.id + 1 > news_.data[0].id
                            ? '/media'
                            : `/newsview/${post.id + 1}`
                        }
                      >
                        {Number(no) + 1 > news_.data[0].id ? (
                          <span>
                            <q>μ΄μ κΈ</q>μ΄μ  κΈμ΄ μμ΅λλ€.
                          </span>
                        ) : (
                          news_.data.map((item, idx) => {
                            if (Number(no) + 1 == item.id) {
                              return (
                                <span>
                                  <q>μ΄μ κΈ</q>
                                  {item.title}
                                </span>
                              );
                            }
                          })
                        )}
                      </Link>
                      <Link
                        className="newsNext"
                        to={
                          post.id - 1 < news_.data[news_.data.length - 1].id
                            ? '/media'
                            : `/newsview/${post.id - 1}`
                        }
                      >
                        {Number(no) - 1 <
                        news_.data[news_.data.length - 1].id ? (
                          <span>
                            <q>λ€μκΈ</q>λ€μ κΈμ΄ μμ΅λλ€.
                          </span>
                        ) : (
                          news_.data.map((item, idx) => {
                            if (Number(no) - 1 == item.id) {
                              return (
                                <span>
                                  <q>λ€μκΈ</q>
                                  {item.title}
                                </span>
                              );
                            }
                          })
                        )}
                      </Link>
                    </div>
                    <div
                      className="newsNoticeBackBox"
                      onClick={() => {
                        history.push('/media');
                      }}
                    >
                      <span>λͺ©λ‘</span>
                    </div>
                  </div>
                </>
              );
            }
          })
        ) : (
          <div>ν΄λΉ κ²μκΈμ μ°Ύμ μ μμ΅λλ€.</div>
        )}
      </div>
      <KakaoBtn />
      <Footer />
    </div>
  );
}

export default NewsView;
