import Newheader from '../components/header/newheader';
import Footer from '../components/footer/footer';
import {useContext} from 'react';
import { ZtopContext } from '../context/ztop';
import Loading from 'react-loading';
import { Link } from 'react-router-dom';

function MobileTeam({ match }) {
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
              <span>About ZeroToOnePartners</span>
            </div>
            <div className="aboutLanding"></div>
            <div className="aboutLine"></div>
            <div className="teamTitle">
              <span>Team</span>
            </div>
            <div className="ceoWrapper statusCate">
              {namecard_.data.map((item, index) => {
                if (item.group === '.')
                  return (
                    <>
                      <Link to={`/namecard/${item.id}`}>
                        <div className="gridWrapper">
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
                      <div className="gridWrapper">
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
                      <div className="gridWrapper">
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
                      <div className="gridWrapper">
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

export default MobileTeam;
