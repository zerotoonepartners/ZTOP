import './scss/main.scss';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import MainLanding from '../components/mainlanding/mainlanding';
import Newheader from '../components/header/newheader';
import Mainintro from '../components/mainintro/mainintro';

function Main() {
    
  return (
    <>
      <Newheader />
      <MainLanding />
      <Mainintro />
    </>
  );
}

export default Main;
