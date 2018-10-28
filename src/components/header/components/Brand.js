import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = props => (
  <div className="navbar-brand">
    <Link to="/" className="navbar-item">
      <img src={props.brandImagePath} width="200px" alt={props.brandName} />
    </Link>
    {props.children}
  </div>
);

Brand.propTypes = {
  brandImagePath: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Brand;
