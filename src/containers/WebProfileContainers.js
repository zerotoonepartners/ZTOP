import React from 'react';
import Header from '../components/namecardcomp/header/Header';
import Landing from '../components/namecardcomp/landing/Landing';
import NameCard from '../components/namecardcomp/namecard/NameCard';
import ToolFooter from '../components/namecardcomp/toolfooter/ToolFooter';
import Introduce from '../components/namecardcomp/introduce/Introduce';
import Footer from '../components/footer/footer';
import WebProfile from '../components/webprofile/webprofile';

function WebProfileContainers({ match }) {
  const { no } = match.params;

  return (
    <div className="cardContainerWrapper">
      <Header />
      <WebProfile no={no} />
      <Footer />
    </div>
  );
}

export default WebProfileContainers;
