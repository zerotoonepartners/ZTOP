import React from 'react';
import './mainintro.scss';

function Mainintro() {
  return (
    <div className="mainIntroWrapper">
      <div className="introTitleWraper">
        <div className="introTitle">
          <span>START-UP ACCELERATOR</span>
        </div>
        <div className="introDesc">
          <span>
            제로투원파트너스는 혁신적인 스타트업의 성장을 함께하는 <br />
            경영컨설팅 기업입니다.
          </span>
        </div>
      </div>
      <div className="introBoxWrapper">
        <div className="boxItem">
          <span className="itemTItle">EDUCATION</span>
          <span className="itemDesc">
            투자, 인증, 창업패키지 <br /> 스타트업에 필요한 맞춤 <br /> 교육
            진행
          </span>
        </div>
        <div className="boxItem">
          <span className="itemTItle">CONSULTING</span>
          <span className="itemDesc">
            스타트업 경영 컨설팅, <br /> 마케팅 컨설팅
          </span>
        </div>
        <div className="boxItem">
          <span className="itemTItle">AUDIT</span>
          <span className="itemDesc">
            ISO 인증, 이노비즈, <br /> 메인비즈, 벤처기업, <br /> 연구소 설립,
            가족친화 등 <br />
            각종 인증 진행
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mainintro;
