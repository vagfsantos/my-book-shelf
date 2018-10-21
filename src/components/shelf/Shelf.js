import React from "react";
import PropTypes from "prop-types";

import Book from "../book/Book";

const Shelf = props => (
  <div>
    <h2 className="title is-5">{props.title}</h2>
    <div className="columns is-multiline is-mobile">
      {props.books.map(book => (
        <div className="column is-6" key={book.id}>
          <Book cardContent={book} />
        </div>
      ))}
    </div>
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Shelf;
