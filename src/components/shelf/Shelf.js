import React from "react";
import PropTypes from "prop-types";

import BookCard from "../book/BookCard";
import BookEntity from "../book/entity/BookEntity";

const Shelf = props => (
  <div>
    <h2 className="title is-5">{props.title}</h2>
    <div className="columns is-multiline is-mobile">
      {props.books.map(bookInfo => (
        <div className={`column is-${12 / props.slotsByRow}`} key={bookInfo.id}>
          <BookCard bookInfo={bookInfo} />
        </div>
      ))}
    </div>
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(BookEntity).isRequired,
  slotsByRow: PropTypes.number.isRequired
};

export default Shelf;
