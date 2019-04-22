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
          <SearchComponent />
        </div>
        <Footer />
      </div>
    );
  }
}
