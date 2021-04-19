import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  sendSearch = (event) => {
    event.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then((response) => response.json())
      .then((json) => this.setState({ reviews: json.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="search-bar">
          <h1>Search</h1>
          <form onSubmit={this.sendSearch}>
            <input
              className="form-control"
              id="search-input"
              type="text"
              onChange={this.handleChange}
              value={this.state.searchTerm}
              placeholder="Search for a movie"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0 && <h2>By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
