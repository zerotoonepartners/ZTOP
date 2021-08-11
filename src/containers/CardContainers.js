import React from 'react';
import Header from '../components/namecardcomp/header/Header';
import Landing from '../components/namecardcomp/landing/Landing';
import NameCard from '../components/namecardcomp/namecard/NameCard';
import ToolFooter from '../components/namecardcomp/toolfooter/ToolFooter';
import Introduce from '../components/namecardcomp/introduce/Introduce';
import { useContext, useState, useEffect } from 'react';
import { ZtopContext } from '../../src/context/ztop';
import './CardContainers.scss';

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
    console.log(kp);
  }, []);

  return (
    <>
      <div className="cardContainerWrapper">
        <Header />
        <Landing />
        <NameCard no={no} />
        <ToolFooter no={no} kp={kp} />
        <Introduce no={no} />
      </div>
      <div className="webCardContainerWrapper">this is for web namecard</div>
    </>
  );
}

export default CardContainers;
