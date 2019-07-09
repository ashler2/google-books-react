import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading.jsx';
import Search from './components/Search';
import Chart from './components/Chart';
import Books from './components/Books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Search />
        <Chart />
        <Books />
      </div>
    );
  }
}

export default App;
