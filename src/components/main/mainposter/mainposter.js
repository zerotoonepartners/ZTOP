import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import './mainposter.scss';
import layer1 from '../../../static/images/mainlayer1.png';
import layer2 from '../../../static/images/mainlayer2.png';
import layer3 from '../../../static/images/mainlayer3.png';
import layer4 from '../../../static/images/mainlayer4.png';

function Mainposter() {
  return (
    <div className="mainPoster">
      <Poster className="posterOne poster" img={layer1}>
        <div className="posterDisplayWrapper">
          <span className="displayTitle">ACCELERATOR</span>
          <span className="displayDesc">스타트업의 성장을 가속화하는 기업</span>
        </div>
        <div className="posterContentWrapper">
          <div className="posterDesc">
            <span>
              역동적인 스타트업 시장에 부합하는 변화하는 엑셀러레이터가
              되겠습니다. <br />
              <br /> 스타트업의 성장 단계에 맞춰 액셀러레이터 역할을 수행해
              나가면 스타트업과 함께 자사도 성장할 것을 믿고 있습니다.
            </span>
          </div>
        </div>
      </Poster>
      <Poster className="posterTwo poster" img={layer2}>
        <div className="posterDisplayWrapper">
          <span className="displayTitle">COMPANY BUILDER</span>
          <span className="displayDesc">스타트업 생태계를 선도하는 기업</span>
        </div>
        <div className="posterContentWrapper">
          <div className="posterDesc">
            <span>
              우리는 스타트업을 기획부터 사업화하는 컴퍼니 빌더입니다.
              <br />
              <br /> 세상에 한 걸음 더 앞으로 나갈 수 있도록 혁신적인 사업모델을
              기획하여 우수한 인재들과 함께 컴퍼니 빌더로 성장하고 있습니다.
            </span>
          </div>
        </div>
      </Poster>
      <Poster className="posterThree poster" img={layer3}>
        <div className="posterDisplayWrapper">
          <span className="displayTitle">CONSULTANT</span>
          <span className="displayDesc">기업의 고민을 알고 함께하는 기업</span>
        </div>
        <div className="posterContentWrapper">
          <div className="posterDesc">
            <span>
              스타트업의 문제점을 파악하고 해결방안을 제시해드립니다.
              <br />
              <br /> 다년간 축적된 경험으로 기업의 브랜딩, 사업 계획, 마케팅
              등의 비즈니스 구축을 위한 중요한 방향성을 설정합니다.
            </span>
          </div>
        </div>
      </Poster>

      <Poster className="posterFour poster" img={layer4}>
        <div className="posterDisplayWrapper">
          <span className="displayTitle">FUND RAISER</span>
          <span className="displayDesc">정직하게 성장하는 기업</span>
        </div>
        <div className="posterContentWrapper">
          <div className="posterDesc">
            <span>
              탁월한 판단력을 통해 100% 투자생존율을 보유하고 있습니다. <br />
              <br />
              제로투원파트너스는 성공사례만을 내세우지 않고 정직함과 탁월한
              판단력으로 우수한 수익률을 도출할 것을 약속드립니다.
            </span>
          </div>
        </div>
      </Poster>
    </div>
  );
}

const Poster = styled.div`
  position: relative;
  z-index: 1;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    background: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #000;
    &:after {
      opacity: 0.5;
    }
  }
`;

export default Mainposter;
