import React from "react";
import PropTypes from "prop-types";

const BookImage = props => (
  <div className="media-left">
    <figure className="image">
      <img src={props.imageURL} alt={props.imageDescription} />
    </figure>
  </div>
);

BookImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired
};

export default BookImage;
