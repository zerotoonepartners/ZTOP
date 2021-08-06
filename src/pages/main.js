import './scss/main.scss';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import MainLanding from '../components/main/mainlanding/mainlanding';
import Newheader from '../components/header/newheader';
import Mainintro from '../components/main/mainintro/mainintro';
import Mainposter from '../components/main/mainposter/mainposter';
import Mainevent from '../components/main/mainevent/mainevent';
import Mainstory from '../components/main/mainstory/mainstory';
import Footer from '../components/footer/footer';

function Main() {
  return (
    <>
      <Newheader />
      <MainLanding />
      <Mainintro />
      <Mainposter />
      <Mainevent />
      <Mainstory />
      <Footer />
    </>
  );
}

export default Main;
