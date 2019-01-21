import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import WikipediaViewer from '../src/containers/wikipedia-viewer';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={WikipediaViewer} />
      <Switch>
        <Route path='/wikipedia-viewer' components={WikipediaViewer} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
