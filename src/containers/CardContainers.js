import React from 'react';
import Header from '../components/namecardcomp/header/Header';
import Landing from '../components/namecardcomp/landing/Landing';
import NameCard from '../components/namecardcomp/namecard/NameCard';
import ToolFooter from '../components/namecardcomp/toolfooter/ToolFooter';
import Introduce from '../components/namecardcomp/introduce/Introduce';

function CardContainers({ match }) {
  const { no } = match.params;

  return (
    <div className="cardContainerWrapper">
      <Header />
      <Landing />
      <NameCard no={no} />
      <ToolFooter />
      <Introduce no={no} />
    </div>
  );
}

export default CardContainers;
