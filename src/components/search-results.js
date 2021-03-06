import React, {Component} from 'react';
import Parser from 'html-react-parser';

export default class SearchResults extends Component {
  renderSearchResults = () => {
    let {results} = this.props;

    const SearchResults = results.map((article, index) => {
      return (
        <div className="result-box" key={index}>

          <a href={`https://en.wikipedia.org/wiki/${article.title}`} target="_blank" rel="noopener noreferrer">
            <h2 className="title">{article.title}</h2>
          </a>

          <p className="snippet">
            {Parser(article.snippet)} 
            <a href={`https://en.wikipedia.org/wiki/${article.title}`} target="_blank" rel="noopener noreferrer">
              (read more...)
            </a>
          </p>
        </div>
      )
    });

    return SearchResults;
  }

	render() {
    const {searchInput} = this.props;

    return (
      <div className="search-results-container">
        <h3 className="search-results-title">Search Results for your term: '{searchInput}'.</h3>

        <div className="result-box-container">
          {this.renderSearchResults()}
        </div>
      </div>
    );
	}
};