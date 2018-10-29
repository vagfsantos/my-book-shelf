import React, { Component } from "react";

import Shelf from "./../shelf/Shelf";
import HeroSection from "./../HeroSection/HeroSection";
import SearchBookForm from "./../SearchBookForm/SearchBookForm";

import { appEvent } from "../../services/events/app-event-handler";
import * as booksAPIService from "../../services/api/books-api";

class SearchPage extends Component {
  state = {
    searchedBooks: [],
    isLoading: false
  };

  setupEvent = (() =>
    appEvent.whenBooksWereRearrenged(books => {
      this.whenSearchDidHappened(books);
    }))();

  searchBookHandler = bookQuery => {
    this.setState({ isLoading: true });

    if (!bookQuery.trim()) {
      this.emptyBookState();
      return;
    }

    booksAPIService
      .search(bookQuery)
      .then(response => {
        if (response.error) {
          return this.emptyBookState();
        }

        this.setState({ searchedBooks: response }, appEvent.searchHasCompleted);
      })
      .catch(error => {
        console.log(error);
        this.emptyBookState();
      });
  };

  emptyBookState = () => {
    this.setState({ searchedBooks: [], isLoading: false });
  };

  replaceSameBooksForCurrentStored = storedBook => {
    this.setState(currentState => {
      const { searchedBooks } = currentState;

      return {
        isLoading: false,
        searchedBooks: searchedBooks.map(searchedBook => {
          if (searchedBook.id === storedBook.id) {
            return storedBook;
          }
          return searchedBook;
        })
      };
    });
  };

  whenSearchDidHappened = books => {
    books.forEach(this.replaceSameBooksForCurrentStored);
  };

  isShelfHidden = () => {
    return !this.state.isLoading && this.state.searchedBooks.length === 0;
  };

  render() {
    const { searchedBooks, isLoading } = this.state;
    const isShelfHidden = this.isShelfHidden();

    return (
      <div>
        <HeroSection
          title="Search"
          subtitle="Find all the books you like the most"
          sizeClass="is-small"
        >
          <SearchBookForm onChangeHandler={this.searchBookHandler} />
        </HeroSection>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Shelf
                  books={searchedBooks}
                  slotsByRow={2}
                  isLoading={isLoading}
                  isHidden={isShelfHidden}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchPage;
