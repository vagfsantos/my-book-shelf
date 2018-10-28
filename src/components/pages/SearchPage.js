import React, { Component } from "react";
import PropTypes from "prop-types";

import Shelf from "./../shelf/Shelf";
import HeroSection from "./../HeroSection/HeroSection";
import SearchBookForm from "./../SearchBookForm/SearchBookForm";

import BookEntity from "../book/entity/BookEntity";
import * as booksAPIService from "../../services/api/books-api";

class SearchPage extends Component {
  static propsTypes = {
    books: PropTypes.arrayOf(BookEntity).isRequired
  };

  state = {
    searchedBooks: []
  };

  searchBook = bookQuery => {
    if (!bookQuery.trim()) {
      this.setState({ searchedBooks: [] });
      return;
    }

    booksAPIService
      .search(bookQuery)
      .then(books => {
        if (books.error) {
          return this.setState({ searchedBooks: [] });
        }

        this.setState({ searchedBooks: books }, this.searchDidHappened);
      })
      .catch(error => {
        this.setState({ searchedBooks: [] });
      });
  };

  searchDidHappened() {
    this.props.books.forEach(storedBooks => {
      this.setState(({ searchedBooks }) => {
        return {
          searchedBooks: searchedBooks.map(book => {
            if (book.id === storedBooks.id) {
              return storedBooks;
            }
            return book;
          })
        };
      });
    });
  }

  componentWillReceiveProps() {
    this.searchDidHappened();
  }

  render() {
    return (
      <div>
        <HeroSection
          title="Search"
          subtitle="Find all books you like the most"
          sizeClass="is-small"
        >
          <SearchBookForm onChangeHandler={this.searchBook} />
        </HeroSection>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Shelf books={this.state.searchedBooks} slotsByRow={2} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchPage;
