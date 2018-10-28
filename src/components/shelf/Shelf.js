import React from "react";
import PropTypes from "prop-types";

import BookCard from "../book/BookCard";
import BookEntity from "../book/entity/BookEntity";

const Shelf = props => (
  <div>
    {props.title && <h2 className="title is-2 has-text-link">{props.title}</h2>}
    <div className="columns is-multiline is-mobile">
      {props.books.length
        ? props.books.map(bookInfo => (
            <div
              className={`column is-${12 / props.slotsByRow}`}
              key={bookInfo.id}
            >
              <BookCard bookInfo={bookInfo} />
            </div>
          ))
        : "no content"}
    </div>
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(BookEntity).isRequired,
  slotsByRow: PropTypes.number.isRequired
};

export default Shelf;
