import React, { Component } from "react";
import PropTypes from "prop-types";
import { debounce } from "throttle-debounce";

import BookEntity from "../book/entity/BookEntity";
import Shelf from "./../shelf/Shelf";
import HeroSection from "./../HeroSection/HeroSection";
import SearchBookForm from "./../SearchBookForm/SearchBookForm";

import * as booksAPIService from "../../services/api/books-api";

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(BookEntity.isRequired).isRequired,
    onBookStatusChange: PropTypes.func.isRequired
  };

  state = {
    searchedBooks: [],
    isLoading: false
  };

  componentDidUpdate(previousProps) {
    if (previousProps.books !== this.props.books) {
      this.updateShelfStatuses(this.props.books);
    }
  }

  lastAPICall = null;

  searchBookHandler = debounce(250, bookQuery => {
    this.setState({ isLoading: true });

    if (!bookQuery.trim()) {
      return this.lastAPICall.then(this.emptyBookState);
    }

    return this.fetchBookResults(bookQuery);
  });

  fetchBookResults = bookQuery => {
    this.lastAPICall = booksAPIService
      .search(bookQuery)
      .then(response => {
        if (response.error) {
          return this.emptyBookState();
        }

        this.setState({ searchedBooks: response }, () => {
          this.updateShelfStatuses(this.props.books);
        });
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
    const { searchedBooks } = this.state;
    return searchedBooks.map(searchedBook => {
      if (searchedBook.id === storedBook.id) {
        return storedBook;
      }
      return searchedBook;
    });
  };

  updateShelfStatuses = currentStoredBooks => {
    const searchedBooksInAnyShelf = this.state.searchedBooks.filter(
      searchedBook =>
        currentStoredBooks.find(storedBook => storedBook.id === searchedBook.id)
    );
    const storedBooksToReplace = searchedBooksInAnyShelf.map(
      bookInfoUpdated => {
        const newBookInfo = currentStoredBooks.find(
          bookInfo => bookInfo.id === bookInfoUpdated.id
        );
        if (newBookInfo) {
          return newBookInfo;
        }

        return bookInfoUpdated;
      }
    );

    this.setState(previous => {
      return {
        searchedBooks: previous.searchedBooks.map(bookResult => {
          const newBookResult = storedBooksToReplace.find(
            newBook => newBook.id === bookResult.id
          );

          if (newBookResult) {
            return newBookResult;
          }
          return bookResult;
        })
      };
    });
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
                  onBookStatusChange={this.props.onBookStatusChange}
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
