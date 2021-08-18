import React from 'react';
import './mainstory.scss';
import logoOne from '../../../static/images/story1logo.png';
import logoTwo from '../../../static/images/story2logo.png';
import logoThree from '../../../static/images/story3logo.png';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';
import Loading from "../../loading/loading";

function Mainstory() {
  const { bloglink1_, bloglink2_, bloglink3_ } = useContext(ZtopContext);
  console.log(bloglink1_, bloglink2_, bloglink3_);
  switch (bloglink1_.status) {
    case 'pending':
      return <Loading />;
    case 'idle':
      return <Loading />;
    case 'rejected':
      return <>Err</>;
    default:
      switch (bloglink2_.status) {
        case 'pending':
          return <Loading />;
        case 'idle':
          return <Loading />;
        case 'rejected':
          return <>Err</>;
        default:
          switch (bloglink3_.status) {
            case 'pending':
              return <Loading />;
            case 'idle':
              return <Loading />;
            case 'rejected':
              return <>Err</>;
            default:
  return (
    <div className="mainStoryWrapper">
      <div className="ztopTitleWrapper">
        <span>기업 관련 정보글을 만나보세요.</span>
      </div>
      <div className="storyGridWrapper">
        {
          bloglink1_.data.slice(undefined,1).map((item,idx)=>{
            return(
              <div className="gridItem">
                <img src={logoOne} alt="" className="storyLogoImg" />
                <div className="storyTitle">
                  <span>{item.title}</span>
                </div>
                <div className="storyDesc">
                  <span>
                    {
                      item.content
                    }
                  </span>
                </div>
                <div className="storyBtn">
                  <span onClick={()=>{window.open(`${item.link}`,'_blank')}}>게시글 보기</span>
                </div>
              </div>
            )
          })
          }
        {
          bloglink2_.data.slice(undefined,1).map((item,idx)=>{
            return(
              <div className="gridItem">
                <img src={logoOne} alt="" className="storyLogoImg" />
                <div className="storyTitle">
                  <span>{item.title}</span>
                </div>
                <div className="storyDesc">
                  <span>
                    {
                      item.content
                    }
                  </span>
                </div>
                <div className="storyBtn">
                  <span onClick={()=>{window.open(`${item.link}`,'_blank')}}>게시글 보기</span>
                </div>
              </div>
            )
          })
          }
        {
          bloglink3_.data.slice(undefined,1).map((item,idx)=>{
            return(
              <div className="gridItem">
                <img src={logoOne} alt="" className="storyLogoImg" />
                <div className="storyTitle">
                  <span>{item.title}</span>
                </div>
                <div className="storyDesc">
                  <span>
                    {
                      item.content
                    }
                  </span>
                </div>
                <div className="storyBtn">
                  <span onClick={()=>{window.open(`${item.link}`,'_blank')}}>게시글 보기</span>
                </div>
              </div>
            )
          })
          }
      </div>
      <div className="blogBtnWrapper" onClick={()=>{window.open('https://blog.naver.com/sjscjr','_blank')}}>
        <span>BLOG</span>
      </div>
    </div>
  );
  }}}
  }


export default Mainstory;
