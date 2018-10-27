import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = props => (
  <div className="navbar-brand">
    <Link to="/" className="navbar-item">
      <img src={props.brandImagePath} width="200px" alt={props.brandName} />
    </Link>

    <a
      onClick={props.toggleMobileMenu}
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
  brandName: PropTypes.string.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired
};

export default Brand;
