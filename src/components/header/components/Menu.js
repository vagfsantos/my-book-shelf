import React from "react";
import PropTypes from "prop-types";

const Menu = props => (
  <div className="navbar-menu">
    <div className="navbar-start">
      {props.menuItems.map(menuItem => (
        <a key={menuItem.name} href={menuItem.link} className="navbar-item">
          {menuItem.name}
        </a>
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
