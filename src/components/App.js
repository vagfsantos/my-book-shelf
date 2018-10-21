import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as booksAPIService from "../services/api/books-api";

import Header from "./header/Header";

import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import ReadPage from "./pages/ReadPage";
import WantToReadPage from "./pages/WantToReadPage";

import "../styles/main.scss";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    booksAPIService
      .getAll()
      .then(books => {
        this.setState({
          books
        });
        return books;
      })
      .then(console.log);
  }

  render() {
    const { books } = this.state.books;

    return (
      <Router>
        <div className="app">
          <Header />
          <Route path="/" exact render={() => <HomePage books={books} />} />
          <Route
            path="/reading"
            exact
            render={() => <ReadingPage books={books} />}
          />
          <Route path="/read" exact render={() => <ReadPage books={books} />} />
          <Route
            path="/want-to-read"
            exact
            render={() => <WantToReadPage books={books} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
