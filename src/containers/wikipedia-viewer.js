import React, {Component} from 'react';
import SearchComponent from '../components/search-component/search-component';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

export default class WikipediaViewer extends Component {
  render() {
    return (
      <div>
        <div className="wikipedia-viewer">
          <Header />

          <h2>Search from Wikipedia</h2>
          <h2>
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">
              I'm feeling lucky!
            </a>
          </h2>

          <SearchComponent />
        </div>
        <Footer />
      </div>
    );
  }
}
