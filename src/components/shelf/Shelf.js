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
    isHidden: PropTypes.bool,
    onBookStatusChange: PropTypes.func.isRequired
  };

  getColumnClassName() {
    return `column is-${12 / this.props.slotsByRow}`;
  }

  hasBooks() {
    return this.props.books.length > 0;
  }

  markup = {
    getTitle: () => {
      const { title } = this.props;

      if (title) {
        return <h2 className="title is-2 has-text-link">{title}</h2>;
      }
    },

    getCards: () => {
      return this.props.books.map(bookInfo => (
        <div className={this.getColumnClassName()} key={bookInfo.id}>
          <BookCard
            bookInfo={bookInfo}
            onBookStatusChange={this.props.onBookStatusChange}
          />
        </div>
      ));
    },

    getContent: () => {
      if (this.hasBooks()) {
        return this.markup.getCards();
      } else if (this.props.isLoading) {
        return <LoadingShelf />;
      } else {
        return <EmptyShelf />;
      }
    }
  };

  render() {
    return this.props.isHidden ? null : (
      <div>
        {this.markup.getTitle()}

        <div className="columns is-multiline is-desktop">
          {this.markup.getContent()}
        </div>
      </div>
    );
  }
}

export default Shelf;
