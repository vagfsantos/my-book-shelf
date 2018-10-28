import React from "react";
import PropTypes from "prop-types";

const BurgerMenu = props => (
  <a
    href="#menu"
    onClick={props.clickHandler}
    className="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

BurgerMenu.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default BurgerMenu;
