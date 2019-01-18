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
    e.preventDefault();

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
          errorMessage: `There were no results for your search term: ${this.state.searchInput}.`
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
          results={this.state.SearchResults}
        />
      )
    }
  }

  renderErrorMessage = () => {
    if (this.state.errorMessage.length) {
      return <p>{this.state.errorMessage}</p>
    }
  }

	render() {
    return (
      <div className="search-component">
        <form role="search" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            className="search-box"
            placeholder="Search Wikipedia"
            onChange={(event) => this.handleChange(event)}
            value={this.state.searchInput}
            required
          />
        </form>

        {this.renderSearchResults()}
        {this.renderErrorMessage()}
      </div>
    );
	}
};