import React from 'react';
import ReactDOM from 'react-dom';
import WikipediaViewer from '../src/containers/wikipedia-viewer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <WikipediaViewer/>,
  document.getElementById('root'),
);

registerServiceWorker();
