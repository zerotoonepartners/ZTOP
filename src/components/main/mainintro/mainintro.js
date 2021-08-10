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
            Seed~Series A 기업 대상 <br /> 직·간접 투자 <br />
            <br /> 뛰어난 역량을 갖춘 팀이라면? <br /> 시기와 관계없이 투자
          </span>
        </div>
        <div className="boxItem">
          <span className="itemTItle">CONSULTING</span>
          <span className="itemDesc">
            스타트업의 부족함을 채우는 <br /> 원격+정기방문 상시관리체계! <br />
            <br /> 전반적 업무내용 자문, 서포터
          </span>
        </div>
        <div className="boxItem">
          <span className="itemTItle">AUDIT</span>
          <span className="itemDesc">
            엑셀레이팅을 위한 <br /> IR 컨퍼런스, 스케일러레이팅 <br /> 등
            프로그램 기획 및 진행
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mainintro;
