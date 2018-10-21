import React from "react";
import PropTypes from "prop-types";

import Book from "../book/Book";

const Shelf = props => (
  <div>
    <h2 className="title is-5">{props.title}</h2>
    <div className="columns is-multiline is-mobile">
      {props.books.map(book => (
        <div className={`column is-${12 / props.slotsByRow}`} key={book.id}>
          <Book cardContent={book} />
        </div>
      ))}
    </div>
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  slotsByRow: PropTypes.number.isRequired
};

export default Shelf;
