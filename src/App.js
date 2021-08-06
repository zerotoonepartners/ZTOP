import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ZtopContextProvider } from './context/ztop';
import './App.css';
import './reset.css';
import Library from './pages/library';
import About from './pages/about';
import Main from './pages/main';
import scrollToTop from '../src/components/common/scrollToTop';

function App() {
  return (
    <ZtopContextProvider>
      <BrowserRouter>
        <scrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/library" component={Library} />
        </Switch>
      </BrowserRouter>
    </ZtopContextProvider>
  );
}
//

export default App;
