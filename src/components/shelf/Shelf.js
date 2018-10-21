import React from "react";
import PropTypes from "prop-types";

const Shelf = props => (
  <div>
    <h2 class="title is-5">{props.title}</h2>
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Shelf;
