import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import * as booksAPIService from "../services/api/books-api";

import Header from "./header/Header";

import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import ReadPage from "./pages/ReadPage";
import WantToReadPage from "./pages/WantToReadPage";
import OfflinePage from "./pages/OfflinePage";
import NotFoundPage from "./pages/NotFoundPage";

import "../styles/main.scss";

class App extends Component {
  state = {
    books: [],
    networkError: false
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
      .then(console.log)
      .catch(e => {
        this.setState({
          networkError: true
        });
      });
  }

  render() {
    const { books, networkError } = this.state;

    return (
      <Router>
        <div className="app">
          {networkError && <Redirect to="/offline" />}
          <Header />
          <Switch>
            <Route path="/" exact render={() => <HomePage books={books} />} />
            <Route
              path="/reading"
              exact
              render={() => <ReadingPage books={books} />}
            />
            <Route
              path="/read"
              exact
              render={() => <ReadPage books={books} />}
            />
            <Route
              path="/want-to-read"
              exact
              render={() => <WantToReadPage books={books} />}
            />
            <Route path="/offline" exact component={OfflinePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
