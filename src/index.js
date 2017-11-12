import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/components/common/header';
import Footer from '../src/components/common/footer';
import WikipediaViewer from '../src/containers/wikipedia-viewer';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <div>
      <Header />
        <Route exact path='/' component={ WikipediaViewer } />
        <Switch>
          <Route path='/wikipedia-viewer' components={ WikipediaViewer } />
        </Switch>
      <Footer />
    </div>
  </HashRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
