import React, { Component } from "react";
import PropTypes from "prop-types";

import BookCard from "../book/BookCard";
import EmptyShelf from "./EmptyShelf";
import LoadingShelf from "./LoadingShelf";

import BookEntity from "../book/entity/BookEntity";

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string,
    books: PropTypes.arrayOf(BookEntity).isRequired,
    slotsByRow: PropTypes.number.isRequired,
    isLoading: PropTypes.bool,
    isHidden: PropTypes.bool
  };

  getColumnClassName() {
    return `column is-${12 / this.props.slotsByRow}`;
  }

  hasBooks() {
    return this.props.books.length > 0;
  }

  render() {
    return this.props.isHidden ? null : (
      <div>
        {this.props.title && (
          <h2 className="title is-2 has-text-link">{this.props.title}</h2>
        )}

        <div className="columns is-multiline is-mobile">
          {this.hasBooks() ? (
            this.props.books.map(bookInfo => (
              <div className={this.getColumnClassName()} key={bookInfo.id}>
                <BookCard bookInfo={bookInfo} />
              </div>
            ))
          ) : this.props.isLoading ? (
            <LoadingShelf />
          ) : (
            <EmptyShelf />
          )}
        </div>
      </div>
    );
  }
}

export default Shelf;
