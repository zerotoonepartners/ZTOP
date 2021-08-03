import './scss/main.scss';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import MainLanding from '../components/mainlanding/mainlanding';
import Header from '../components/header/header';
import Newheader from '../components/header/newheader';

function Main() {
    
  return (
    <>
      <Newheader />
      <MainLanding />
    </>
  );
}

export default Main;
