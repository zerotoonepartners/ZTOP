import './scss/about.scss';
import Newheader from '../components/header/newheader';
import Footer from '../components/footer/footer';
import { useContext } from 'react/cjs/react.development';
import { ZtopContext } from '../context/ztop';
import Loading from 'react-loading';
import { Link } from 'react-router-dom';

function About({ match }) {
  const { namecard_ } = useContext(ZtopContext);
  switch (namecard_.status) {
    case 'pending':
      return <Loading />;
    case 'idle':
      return <Loading />;
    case 'rejected':
      return <>Err</>;
    default:
      console.log(namecard_);
      return (
        <>
          <Newheader />
          <div className="aboutPageWrapper">
            <div className="aboutSlogan">
              <span>스타트업 성장의 시작을 함께하겠습니다.</span>
            </div>
            <div className="aboutLanding"></div>
            <div className="aboutInfoDesc">
              <span>
                다년간 축척해 온 전문성과 노하우를 바탕으로 아이디어 단계부터
                초기단계 (Seed~Series A)에 해당하는 스타트업 유망주들의 성공적인
                비즈니스 구축을 지원하며, 국내뿐 아니라 해외 진출을 위한 글로벌
                스타트업에 대한 직/간접 투자도 진행합니다. <br />
                <br /> 현재보다 더 나은 가치를 창조하고, 보다 나은 세상을 만들어
                갈 수 있는 목표를 가진 기업에게 더 높은 성장의 발판을 제공하고자
                언제나 노력하고 있습니다. <br />
                <br /> 다양한 분야의 전문가 및 네트워크를 통하여 스타트업에게 더
                빠르게 나아갈 수 있는 액셀러레이팅을 통해 스타트업의 목표를 이룰
                수 있도록 함께 하겠습니다.
              </span>
            </div>
            <div className="teamTitle">
              <span>Team</span>
            </div>
            <div className="ceoWrapper statusCate">
              {namecard_.data.map((item, index) => {
                if (item.group === '.')
                  return (
                    <>
                      <Link to={`/namecard/${item.id}`}>
                        <div className="avatarCardWrapper">
                          <img src={item.picture} alt="" className="cardImg" />
                          <div className="cardInfoWrapper">
                            <div className="nameWrapper">
                              <span className="mainName">{item.name} </span>
                              <span className="subName">{item.sub_name}</span>
                            </div>
                            <div className="statusWrapper">
                              <span className="statusSpan">{item.status}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
              })}
            </div>
            <div className="lineWrapper">
              <div className="titleTag">
                <span>투자본부</span>
              </div>
            </div>
            <div className="distributeWrapper statusCate">
              {namecard_.data.map((item, index) => {
                if (item.group === '투자본부')
                  return (
                    <>
                      <Link to={`/namecard/${item.id}`}>
                        <div className="avatarCardWrapper">
                          <img src={item.picture} alt="" className="cardImg" />
                          <div className="cardInfoWrapper">
                            <div className="nameWrapper">
                              <span className="mainName">{item.name} </span>
                              <span className="subName">{item.sub_name}</span>
                            </div>
                            <div className="statusWrapper">
                              <span className="statusSpan">{item.status}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
              })}
            </div>
            <div className="lineWrapper">
              <div className="titleTag">
                <span>기업지원본부</span>
              </div>
            </div>
            <div className="supportWrapper statusCate">
              {namecard_.data.map((item, index) => {
                if (item.group === '기업지원본부')
                  return (
                    <>
                      <Link to={`/namecard/${item.id}`}>
                        <div className="avatarCardWrapper">
                          <img src={item.picture} alt="" className="cardImg" />
                          <div className="cardInfoWrapper">
                            <div className="nameWrapper">
                              <span className="mainName">{item.name} </span>
                              <span className="subName">{item.sub_name}</span>
                            </div>
                            <div className="statusWrapper">
                              <span className="statusSpan">{item.status}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
              })}
            </div>
            <div className="lineWrapper">
              <div className="titleTag">
                <span>경영기획본부</span>
              </div>
            </div>
            <div className="supportWrapper statusCate">
              {namecard_.data.map((item, index) => {
                if (item.group === '경영기획본부')
                  return (
                    <>
                      <Link to={`/namecard/${item.id}`}>
                        <div className="avatarCardWrapper">
                          <img src={item.picture} alt="" className="cardImg" />
                          <div className="cardInfoWrapper">
                            <div className="nameWrapper">
                              <span className="mainName">{item.name} </span>
                              <span className="subName">{item.sub_name}</span>
                            </div>
                            <div className="statusWrapper">
                              <span className="statusSpan">{item.status}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
              })}
            </div>
          </div>
          <Footer />
        </>
      );
  }
}

export default About;

// <div className="nameCardWrapper">
// {namecard_.data.map((item, index) => {
//   return (
//     <Link to={`/namecard/${item.id}`}>
//       <div className="testCard">{item.name}</div>
//     </Link>
//   );
// })}
// </div>
