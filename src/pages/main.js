import './scss/main.scss';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import MainLanding from '../components/mainlanding/mainlanding';
import Newheader from '../components/header/newheader';
import Mainintro from '../components/mainintro/mainintro';
import Mainposter from '../components/mainposter/mainposter';
import Mainevent from '../components/mainevent/mainevent';

function Main() {
  return (
    <>
      <Newheader />
      <MainLanding />
      <Mainintro />
      <Mainposter />
      <Mainevent />
    </>
  );
}

export default Main;
