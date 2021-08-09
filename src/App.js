import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {ZtopContextProvider } from './context/ztop';
import './App.css';
import './reset.css';

import About from './pages/about';
import Main from './pages/main';
import Media from './pages/media';
import NewsView from './pages/newsview';
import NoticeView from './pages/noticeview';
import scrollToTop from '../src/components/common/scrollToTop';

function App() {
  return (
    <ZtopContextProvider>
      <BrowserRouter>
        <scrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route path="/newsview/:no" component={NewsView}/>
            <Route path="/noticeview/:no" component={NoticeView}/>
         
          
        </Switch>
      </BrowserRouter>
    </ZtopContextProvider>
  );
}
//

export default App;
