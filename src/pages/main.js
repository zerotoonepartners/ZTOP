// import './scss/main.scss';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import MainLanding from '../components/main/mainlanding/mainlanding';
import Newheader from '../components/header/newheader';
import HomeNewheader from '../components/homeHeader/homeheader';
import Mainintro from '../components/main/mainintro/mainintro';
import Mainposter from '../components/main/mainposter/mainposter';
import Mainevent from '../components/main/mainevent/mainevent';
import Mainstory from '../components/main/mainstory/mainstory';
import Footer from '../components/footer/footer';
import TopCircle from '../components/topcircle/topcircle';
import Kakao from '../components/kakao/kakao';
import NewMainIntro from '../components/main/newmainintro/newmainintro';
import KakaoBtn from '../components/kakaobtn/kakao';
function Main() {
  return (
    <>
      <HomeNewheader />
      <MainLanding />
      <NewMainIntro />
      <Mainposter />
      <Mainevent />
      <Mainstory />
      <Footer />
      <TopCircle />
      <KakaoBtn />
    </>
  );
}

export default Main;
