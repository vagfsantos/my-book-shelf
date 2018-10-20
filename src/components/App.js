import React, { Component } from "react";

import Header from './header/Header';

import "../styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
