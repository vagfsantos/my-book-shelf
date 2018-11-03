import React from "react";
import PropTypes from "prop-types";

const getThumbnail = props =>
  props.imageURL ? props.imageURL : "https://via.placeholder.com/128x200";

const BookImage = props => (
  <div className="media-left">
    <figure className="image">
      <img src={getThumbnail(props)} alt={props.imageDescription} />
    </figure>
  </div>
);

BookImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired
};

export default BookImage;
