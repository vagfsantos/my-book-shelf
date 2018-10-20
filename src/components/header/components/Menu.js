import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Menu = props => (
  <div className="navbar-menu">
    <div className="navbar-start">
      {props.menuItems.map(menuItem => (
        <Link to={menuItem.link} key={menuItem.name} className="navbar-item">
          {menuItem.name}
        </Link>
      ))}
    </div>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Menu;
