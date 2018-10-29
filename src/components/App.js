import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import * as booksAPIService from "../services/api/books-api";
import { appEvent } from "../services/events/app-event-handler";
import { shelfFilter } from "../utils/shelf/shelf-filter";

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
    this.fetchUserBooks();
    this.listenToBookShelfStatus();
    this.listenToSearchCompleted();
  }

  fetchUserBooks() {
    booksAPIService
      .getAll()
      .then(books => this.setState({ books, isShelfsLoading: false }))
      .catch(this.handleNetworkError);
  }

  fetchNewAddedUserBook(newAddedBookId) {
    return booksAPIService.get(newAddedBookId).catch(this.handleNetworkError);
  }

  handleNetworkError = error => {
    console.log(error);
    this.setState({
      networkError: true
    });
  };

  listenToSearchCompleted = () => {
    appEvent.whenSearchHasCompleted(() => {
      appEvent.booksWereRearrenged(this.state.books);
    });
  };

  listenToBookShelfStatus() {
    appEvent.whenBookStatusChange(shelfStatuses => {
      const currentBooks = this.state.books;
      const rearregedBooks = shelfFilter.rearrangeBooksByShelf(
        shelfStatuses,
        currentBooks
      );

      const newAddedBookId = shelfFilter.getNewBooks(
        shelfStatuses,
        currentBooks
      );
      const hasNewAddedBook = !!newAddedBookId;

      if (hasNewAddedBook) {
        this.fetchNewAddedUserBook(newAddedBookId).then(newFetchedBook => {
          this.setState(
            () => ({
              books: [...rearregedBooks, newFetchedBook]
            }),
            () => {
              appEvent.booksWereRearrenged(this.state.books);
            }
          );
        });
      } else {
        this.setState(
          () => ({
            books: rearregedBooks
          }),
          () => {
            appEvent.booksWereRearrenged(this.state.books);
          }
        );
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
            <Route path="/search" exact component={SearchPage} />
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
