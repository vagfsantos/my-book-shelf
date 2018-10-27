import React from "react";
import PropTypes from "prop-types";

const BookTags = props => (
  <div className="shelf-tag-box">
    {props.categories &&
      props.categories.map((category, index) => (
        <span key={index} className="tag is-link">
          {category.toLowerCase()}
        </span>
      ))}
  </div>
);

BookTags.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BookTags;
