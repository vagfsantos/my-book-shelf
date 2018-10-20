import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./header/Header";

import "../styles/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
