import React, {Component} from 'react';
import Parser from 'html-react-parser';

export default class SearchResults extends Component {
  renderSearchResults = () => {
    let {results} = this.props;
    const SearchResults = results.map((article, index) => {
      return (
        <div className="result" key={index}>
          <h2>{article.title}</h2>
          <p>
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
    return (
      <div className="search-results">
        <p>Search Results</p>
        {this.renderSearchResults()}
      </div>
    );
	}
};