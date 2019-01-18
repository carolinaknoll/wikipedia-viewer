import React, {Component} from 'react';
import SearchComponent from '../components/search-component/search-component';

export default class WikipediaViewer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wikipedia Viewer</h1>
          <h2>Explore the world's knowledge...</h2>
        </header>

        <h2>Search from Wikipedia</h2>

        <h2>
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">
            I'm feeling lucky!
          </a>
        </h2>

        <SearchComponent />
      </div>
    );
  }
}
