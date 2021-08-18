import React from 'react';
import './mainstory.scss';
import logoOne from '../../../static/images/story1logo.png';
import logoTwo from '../../../static/images/story2logo.png';
import logoThree from '../../../static/images/story3logo.png';
import { ZtopContext } from '../../../context/ztop';
import { useContext } from 'react';

function Mainstory() {
  const { bloglink1_, bloglink2_, bloglink3_, blogLink_ } =
    useContext(ZtopContext);
  console.log(bloglink1_, bloglink2_, bloglink3_, blogLink_);
  return (
    <>
      <div className="mainStoryWrapper">
        <div className="ztopTitleWrapper">
          <span>기업 관련 정보글을 만나보세요.</span>
        </div>
        <div className="storyGridWrapper">
          <div className="gridItem">
            <img src={logoOne} alt="" className="storyLogoImg" />
            <div className="storyTitle">
              <span>ISO</span>
            </div>
            <div className="storyDesc">
              <span>
                환경적 지속가능성을 포괄하는 경영전략을 도입할 것을 강력히
                요구하기 위해서 ISO 14001이 도입되었답니다!! 국내적 뿐 아니라
                국제적으로도 #ISO9001 다음으로 가장 많이 취득하는 #인증_규격이
                #14001 이에요!
              </span>
            </div>
            <div className="storyBtn">
              <span>게시글 보기</span>
            </div>
          </div>
          <div className="gridItem">
            <img src={logoTwo} alt="" className="storyLogoImg" />
            <div className="storyTitle">
              <span>주식 상식</span>
            </div>
            <div className="storyDesc">
              <span>
                개인사업을 오래 하시다가 법인으로 옮겨오신 분들은 경영
                방식에차이점이 많아, 실수를 하는 사례가 종종 발생하곤 하는데요,
                그 중 기업을 가장 세게 짓누르는 문제점이 바로 가계정일 것입니다.
              </span>
            </div>
            <div className="storyBtn">
              <span>게시글 보기</span>
            </div>
          </div>
          <div className="gridItem">
            <img src={logoThree} alt="" className="storyLogoImg" />
            <div className="storyTitle">
              <span>IR 상식</span>
            </div>
            <div className="storyDesc">
              <span>
                IR은 Investor Relations의 약어로 투자자를 대상으로 기업가치를
                마케팅하는 것을 말합니다. IR은 투자자들에게 기업의 정보를
                제공하며, 투자를 받을 때 결정적인 역할을 하는 만큼 중요한
                자료입니다.
              </span>
            </div>
            <div className="storyBtn">
              <span>게시글 보기</span>
            </div>
          </div>
        </div>
        <div className="blogBtnWrapper">
          <span>BLOG</span>
        </div>
      </div>
    </>
  );
}

export default Mainstory;
