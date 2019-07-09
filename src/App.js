import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading.jsx";
import Search from "./components/Search";
import Chart from "./components/Chart";
import Books from "./components/Books";
import axios from "axios";

class App extends Component {
  state = {
    books: [],
    search: "javascript"
  };
  render() {
    console.log(this.state.books);
    const { books, search } = this.state;
    return (
      <div className="App">
        <Heading topic={search} />
        <Search updateSearch={this.updateSearch} />
        <Chart books={books} />
        <Books books={books} />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchBooks().then(books => {
      this.setState({ books });
    });
  };
  fetchBooks = async () => {
    const { search } = this.state;
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    return data.items;
  };
  updateSearch = search => {
    this.setState({ search });
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.search !== prevState.search) {
      const books = await this.fetchBooks();
      this.setState({ books });
    }
  };
}

export default App;
