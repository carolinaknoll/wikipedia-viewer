import React, {Component}  from 'react';
import axios from 'axios';
import SearchResults from '../search-results/search-results';

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      SearchResults: [],
      errorMessage: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSubmit = (e) => {
    if (e.target) {
      e.preventDefault();
    }

    axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchInput}&origin=*&format=json`
    )
    .then((wikipediaData) => {
      this.setState({
        SearchResults: wikipediaData.data.query.search,
        errorMessage: '',
      });

      if (!this.state.SearchResults.length) {
        this.setState({
          errorMessage: `There were no results for your search term: '${this.state.searchInput}'.`
        });
      }
    }).catch((error) => {
      this.setState({
        errorMessage: 'Unable to load Wikipedia search results.'
      });
    });
  }

  renderSearchResults = () => {
    if (this.state.SearchResults.length) {
      return (
        <SearchResults
          searchInput={this.state.searchInput}
          results={this.state.SearchResults}
        />
      )
    }
  }

  renderErrorMessage = () => {
    if (this.state.errorMessage.length) {
      return (
        <h3 className="search-results-error">
          <i className="fa fa-exclamation-circle"></i>
          {this.state.errorMessage}
        </h3>
      );
    }
  }

	render() {
    return (
      <div className="search-component">
        <h2 className="title">Search from Wikipedia</h2>

        <form role="search" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            className="search-box"
            placeholder="Search Wikipedia"
            onChange={(event) => this.handleChange(event)}
            value={this.state.searchInput}
            required
          />

          <button
            className="search-button"
            onClick={() => this.handleSubmit(this.state.searchInput)}>
              Search
          </button>
        </form>

        <div className="lucky-box">
          <p className="lucky-url bold">
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">
              I'm feeling lucky!
            </a>
          </p>
        </div>

        {this.renderSearchResults()}
        {this.renderErrorMessage()}
      </div>
    );
	}
};
