import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search: </label>
        <input
          type="text"
          placeholder="Search for Topic"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateSearch(this.state.search);
    this.setState({ search: "" });
  };
}

export default Search;
