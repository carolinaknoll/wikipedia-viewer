import React, { Component } from 'react';
import SearchInput from '../components/search-input';
import SearchResult from '../components/search-result';

export default class WikipediaViewer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wikipedia Viewer</h1>
          <h2>Explore the world's knowledge...</h2>
        </header>
        <SearchInput />
        <SearchResult />
      </div>
    );
  }
}
