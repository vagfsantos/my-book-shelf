import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import * as booksAPIService from "../services/api/books-api";
import { appEvent } from "../services/events/app-event-handler";
import { shelfFilter } from "./../utils/shelf/shelf-filter";

import Header from "./header/Header";

import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import ReadPage from "./pages/ReadPage";
import WantToReadPage from "./pages/WantToReadPage";
import OfflinePage from "./pages/OfflinePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";

import "../styles/main.scss";

class App extends Component {
  state = {
    books: [],
    isShelfsLoading: true,
    networkError: false
  };

  componentDidMount() {
    this.listenToBookShelfStatus();

    booksAPIService
      .getAll()
      .then(books => this.setState({ books, isShelfsLoading: false }))
      .catch(e => {
        console.log(e);
        this.setState({
          networkError: true
        });
      });
  }

  listenToBookShelfStatus() {
    appEvent.whenBookStatusChange(shelfStatuses => {
      const currentBooks = this.state.books;
      const rearregedBooks = shelfFilter.rearrangeBooksByShelf(
        shelfStatuses,
        currentBooks
      );

      const newBookId = shelfFilter.getNewBooks(shelfStatuses, currentBooks);

      if (newBookId) {
        const fetchBooks = booksAPIService.get(newBookId);
        fetchBooks.then(newFetchedBook => {
          this.setState(() => ({
            books: [...rearregedBooks, newFetchedBook]
          }));
        });
      } else {
        this.setState(() => ({
          books: rearregedBooks
        }));
      }
    });
  }

  render() {
    const { books, networkError, isShelfsLoading } = this.state;

    return (
      <Router>
        <div className="app">
          {networkError && <Redirect to="/offline" />}
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage books={books} isLoading={isShelfsLoading} />
              )}
            />
            <Route
              path="/reading"
              exact
              render={() => (
                <ReadingPage books={books} isLoading={isShelfsLoading} />
              )}
            />
            <Route
              path="/read"
              exact
              render={() => (
                <ReadPage books={books} isLoading={isShelfsLoading} />
              )}
            />
            <Route
              path="/want-to-read"
              exact
              render={() => (
                <WantToReadPage books={books} isLoading={isShelfsLoading} />
              )}
            />
            <Route
              path="/search"
              exact
              render={() => <SearchPage books={books} />}
            />
            <Route path="/offline" exact component={OfflinePage} />
            <Route path="/404" exact component={NotFoundPage} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
