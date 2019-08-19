import React, {Component} from 'react';
import SearchComponent from '../components/search-component';
import Header from '../components/header';
import Footer from '../components/footer';

export default class WikipediaViewer extends Component {
  render() {
    return (
      <div className="wikipedia-viewer">
        <Header />
        <SearchComponent />
        <Footer />
      </div>
    );
  }
}
