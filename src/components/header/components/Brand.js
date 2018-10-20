import React from "react";
import PropTypes from "prop-types";

const Brand = props => (
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={props.brandImagePath} width="200px" alt={props.brandName} />
    </a>

    <a
      href="#a"
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
);

Brand.propTypes = {
  brandImagePath: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired
};

export default Brand;
