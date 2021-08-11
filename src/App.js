import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { ZtopContextProvider } from './context/ztop';
import './App.css';
import './reset.css';

import About from './pages/about';
import Main from './pages/main';
import Media from './pages/media';
import NewsView from './pages/newsview';
import NoticeView from './pages/noticeview';
import ScrollToTop from '../src/components/common/scrollToTop';
import CardContainers from './containers/CardContainers';
import Contact from './pages/contact';

function App() {
  return (
    <ZtopContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/media" component={Media} />
          <Route path="/newsview/:no" component={NewsView} />
          <Route path="/noticeview/:no" component={NoticeView} />
          <Route path="/namecard/:no" component={CardContainers} />
        </Switch>
      </BrowserRouter>
    </ZtopContextProvider>
  );
}
//

export default App;
