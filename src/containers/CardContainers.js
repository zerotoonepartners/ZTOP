import React from 'react';
import Headerr from '../components/namecardcomp/header/Header';
import Landing from '../components/namecardcomp/landing/Landing';
import NameCard from '../components/namecardcomp/namecard/NameCard';
import ToolFooter from '../components/namecardcomp/toolfooter/ToolFooter';
import Introduce from '../components/namecardcomp/introduce/Introduce';
import Footer from '../components/footer/footer';
import Newheader from '../components/header/newheader';
import HeaderBlack from "../components/homeHeader/homeHeaderBlack";
import WebProfile from '../components/webprofile/webprofile';
import { useContext, useState, useEffect } from 'react';
import { ZtopContext } from '../../src/context/ztop';
import './CardContainers.scss';
import FourPicture from '../components/namecardcomp/fourPicture/fourPicture';
import MobileTeam from './mobileTeam';
import Footercontents from '../components/namecardcomp/footercontents/footercontents';
import Slogan from '../components/namecardcomp/slogan/slogan';
function CardContainers({ match }) {
  const { namecard_ } = useContext(ZtopContext);
  const { no } = match.params;

  const [kp, setKp] = useState();
  useEffect(() => {
    try {
    } catch (e) {}
    namecard_.data &&
      namecard_.data.map((item, idx) => {
        if (item.id == no) {
          setKp(item.kakao_picture);
        }
      });
  }, []);

  return (
    <>
      <div className="cardContainerWrapper">
        <Headerr />
        <FourPicture />
        <NameCard no={no} />
        <ToolFooter no={no} kp={kp} />

        <Introduce no={no} />
        <MobileTeam />
        <Footercontents />
        <Footer />
      </div>
      <div className="webCardContainerWrapper">
        <HeaderBlack />
        <WebProfile no={no} />
        <Footer />
      </div>
    </>
  );
}

export default CardContainers;
