import React from "react";
import PropTypes from "prop-types";

const BookStatusButton = props => (
  <button
    onClick={props.onClickHandler}
    className={`button ${props.theme} ${props.isActive ? "" : "is-outlined"}`}
  >
    <span className="icon is-small">
      <i className={`fas ${props.icon}`} />
    </span>
    <span>{props.children}</span>
  </button>
);

BookStatusButton.propTypes = {
  theme: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default BookStatusButton;
